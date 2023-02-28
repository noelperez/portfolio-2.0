import mongoose from 'mongoose';

const siteSchema = mongoose.Schema({
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    IP: {
        type: String,
        required: true
    },
    headers: {
        type: Array,
        required: true
    }
})

const siteLogsModel = mongoose.model('siteLogs', siteSchema);
export default siteLogsModel;