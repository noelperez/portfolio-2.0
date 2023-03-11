import siteLogs from "./models/siteLogs.js";

export const logRequest = async (req, res, next) => {

    let requestLog; 

    try {

        requestLog = await new siteLogs({
            url: req.originalUrl,
            method: req.method,
            IP: req.socket.remoteAddress || req.connection.remoteAddress,
            headers: req.rawHeaders,
            timeStamp: Date.now()
        });

        requestLog.save();
        console.log(`Site log successfully saved`)

    } catch (e) {
        console.log(`An error occurred while attempting to save the site log: ${e}`)

    }

    next();




}