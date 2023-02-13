import UserModel from './models/user.js';


export const upgradeHandler = (request, socket, head, sessionParser, wss) => {



    sessionParser(request, {}, () => {
        if (!request.session._id) {
            console.log(`Distroying connection...`)
            socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
            socket.destroy();
            return;
        }

        wss.handleUpgrade(request, socket, head, (ws) => {
            ws._id = request.session._id;

            console.log(`initiating event ${wss.clients}`)
            wss.emit('connection', ws, request);

            
            ws.on('message', async (data) => {
                let user;
                console.log(ws._id);

            

                try {
                    user = await UserModel.findOne({ _id: ws._id }, { password: 0, _id: 0, confirmPassword: 0, createdAt: 0, email: 0, gender: 0 });
                    
                    user = {...user, profilePic: user.profilePic ? user.profilePic.toString('base64') : ''};

                } catch (e) {
                    console.log(`Error while retrieve user with ws._id: ${e}`);
                    return;
                }

                wss.clients.forEach((client) => {
                    if (client !== ws) {
                        client.send(JSON.stringify({
                            code: 1,
                            user: user,
                            content: `${data}`,
                            timestamp: Date.now()
                        }));
                    }
                });
            });

            ws.on('close', async () => {

                let user;

                try {
                    user = await UserModel.findOne({ _id: ws._id});
                } catch (error) {

                    console.log(`Error while attempting to retrieve user: ${e}`);
                    
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