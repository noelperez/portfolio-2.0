import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    
    title: {
        type: String,
        required: [true, 'Please enter a post title']
    },
    tags: [String],
    author: { 
        type: String,
        required: true
    }, 
    comments: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    visits: {
        type: Number,
        default: 0
    },
    content: String,



})

const Post = mongoose.model('Post', postSchema);

export default Post;

