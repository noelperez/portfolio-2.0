import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    senderID: {
        type: String,
        required: true
    },
    totalOnlineUsers: {
        type: Number,
        required: true
    },
    eventType: {
        // MESSAGE_SENT, MESSAGE_RECEIVED, CONNECTION_ESTABLISHED, USER_DISCONNECTED
        type: String,
        required: true
    },
    onlineUsers: {
        type: [String],
        required: true
    },
    message: {
        type: String,
        default: ''
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    }
})

let chatLogsModel = mongoose.model('chatLogs', chatSchema);

export default chatLogsModel;

