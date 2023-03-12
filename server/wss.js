import UserModel from './models/user.js';
import chatLogsModel from './models/chatLogs.js';


export const upgradeHandler = (request, socket, head, sessionParser, wss) => {



    sessionParser(request, {}, () => {
        if (!request.session._id) {
            console.log(`Distroying connection...`)
            socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
            socket.destroy();
            return;
        }

        wss.handleUpgrade(request, socket, head, async (ws) => {
            ws._id = request.session._id;
            let chatLogs;

            wss.emit('connection', ws, request);

            try {
                chatLogs = await chatLogsModel({
                    senderID: ws._id,
                    totalOnlineUsers: wss.clients.size,
                    eventType: 'CONNECTION_ESTABLISHED',
                    onlineUsers: Array.from(wss.clients).map((client) => { return client._id}),
                    timeStamp: Date.now()

                });
                chatLogs.save();
                console.log('Chat log successfully saved');
            } catch (e) {
                console.log(`An error occurred while attempting to save a chatlog: ${e}`)

            }


            ws.on('message', async (data) => {
                let user;
                let chatLogs;



                try {
                    user = await UserModel.findOne({ _id: ws._id }, { password: 0, _id: 0, confirmPassword: 0, createdAt: 0, email: 0, gender: 0 });

                    user = { ...user, profilePic: user.profilePic ? user.profilePic.toString('base64') : '' };

                } catch (e) {
                    console.log(`Error while retrieve user with ws._id: ${e}`);
                    return;
                }

                wss.clients.forEach((client) => {
                    console.log(`logging the client: ${client._id}`);
                    if (client !== ws) {

                        client.send(JSON.stringify({
                            code: 1,
                            user: user,
                            content: `${data}`,
                            timestamp: Date.now()
                        }));
                    }
                });

                // Saving the MESSAGE_SENT event log. The message is saved as plain text.
                //TODO:
                // - Create a single module for storing chat logs.
                // - Create a model for general public site logs (IP, device used, and which endpoint was hit)
                //   and for logged in users, create its own site log (unique user visits).

                try {
                    chatLogs = await chatLogsModel({
                        senderID: ws._id,
                        totalOnlineUsers: wss.clients.size,
                        eventType: 'MESSAGE_SENT',
                        onlineUsers: Array.from(wss.clients).map((client) => { return client._id}),
                        message: `${data}`

                    });
                    chatLogs.save();
                    console.log('Chat log successfully saved');
                } catch (e) {
                    console.log(`An error occurred while attempting to save a chatlog: ${e}`)

                }
            });

            ws.on('close', async () => {

                let user;
                let chatLogs;

                
                

                try {
                    user = await UserModel.findOne({ _id: ws._id });
                    // Logging client disconnection.
                     chatLogs = await chatLogsModel({
                        senderID: ws._id,
                        totalOnlineUsers: wss.clients.size,
                        eventType: 'USER_DISCONNECTED',
                        onlineUsers: Array.from(wss.clients).map((client) => { return client._id})

                    });
                    chatLogs.save();
                    console.log('Chat log successfully saved');
                } catch (e) {

                    console.log(`Error while attempting to retrieve user: ${e}`);
                    console.log(`An error occurred while attempting to save a chatlog: ${e}`)

                }
                wss.clients.forEach((client) => {
                    if (client != ws) {
                        client.send(
                            JSON.stringify(
                                {
                                    code: 0,
                                    content: `${user.firstName} ${user.lastName} abandoned the chat`,
                                    timestamp: Date.now()
                                }
                            )
                        )
                    }
                })

            })
            ws.on('open', () => {
                ws.send(
                    JSON.stringify(
                        {
                            code: 0,
                            content: `Welcome! Total online users: ${Array.from(wss.clients).length}`,
                            timestamp: Date.now()
                        }
                    )
                )

                console.log(`Total clients connected: ${Array.from(wss.clients).length}`)

            });



            socket.onerror = (e) => {
                console.error(e);
            };

        });
    });
}