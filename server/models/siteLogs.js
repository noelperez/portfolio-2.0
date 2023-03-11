import mongoose from 'mongoose';

const siteSchema = mongoose.Schema({
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    url: {
        type: String

    },
    method: {
        type: String

    },
    IP: {
        type: String

    },
    headers: {
        type: Array
    }
})

const siteLogsModel = mongoose.model('siteLogs', siteSchema);
export default siteLogsModel;