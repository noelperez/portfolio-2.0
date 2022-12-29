import PostModel from '../models/posts.js';
import UserModel from '../models/user.js';
import { readFile } from 'fs/promises';

export const newPost = async (req, res) => {
    let post = req.body;
    let posts;

    try {

        const newPost = await PostModel(post);
        newPost.save();
        posts = await PostModel.find({});
        
        res.redirect('../blog/');
    
    } catch (e) {
        console.log(`The submitted post info might be wrong: ${e}`);
        return res.status(500).json({ message: 'Something went wrong', error: e});

    }

    
};

export const fetchPosts = async (req, res) => {
    let posts;

    try {

        posts = await PostModel.find();
        

    } catch (e) {
        console.log(`Something went wrong while fetching the posts: ${e}`);
        return res.status(501).json({ message: `something when wrong while fetching the posts`, error: e});

    }

    res.status(200).json(posts);
}; 

export const writePost = async (req, res, next) => {

    if (!req.session._id) next();
    let user;
    let profilePic;

    try {
        user = await UserModel.findOne({ _id: req.session._id });
        if (!user.profilePic) {
            profilePic = await readFile('./imgUploads/avatar.png');
            user = {...user._doc,  profilePic: profilePic };

        }
    } catch(e) {
        console.log(`Error while retrieveing user from writePost: ${e}`);
        res.send(e);

    }
    res.render('./writepost/writepost', { user });
}


