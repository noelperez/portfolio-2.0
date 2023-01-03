import PostModel from '../models/posts.js';
import UserModel from '../models/user.js';
import { readFile } from 'fs/promises';

export const newPost = async (req, res) => {
    const { _id: userID } = req.session;
    let post = req.body;
    let posts;

    try {

        const user = await UserModel.findOne({
            _id: userID
        }, {
            profilePic: 0,
            password: 0,
            confirmPassword: 0
        });

        const newPost = await PostModel(post);
        newPost.author = user;
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

 export const editPost = async (req, res, next) => {
    if (!req.session._id) next();

    const postID = req.params.postID;

    let user;
    let post;
    let profilePic;

    try {
        user = await UserModel.findOne({ _id: req.session._id });
        post = await PostModel.findOne({ _id: postID});
        if (!user.profilePic) {
            profilePic = await readFile('./imgUploads/avatar.png');
            user = {...user._doc,  profilePic: profilePic };

        }
    } catch(e) {
        console.log(`Error while retrieveing user from writePost: ${e}`);
        res.send(e);

    }
    res.render('./writepost/writepost', { user, post });

} 

export const updatePost = async (req, res, next) => {

     const { oldPost, content } = req.body;
     
     let _post = JSON.parse(oldPost);
     let post;
     let user = _post.author;

    try {
        user = await UserModel.findOne({ _id: user._id})
        
        post = await PostModel.findOne({ _id: _post._id});
        post.content =  content;
        await post.save();
    } catch(e) {
        console.log(`Error while retrieveing user from writePost: ${e}`);
        res.send(e);

    }
    res.redirect(`/blog/posts/${post._id}`); 

} 


