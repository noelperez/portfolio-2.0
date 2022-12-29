import express from 'express';
import UserModel from '../models/user.js';
import Post from '../models/posts.js';
import { blogMain } from '../controllers/blog.js';
import { readFile } from 'fs/promises';
import { read } from 'fs';

const router = express.Router();

router.get('/', async (req, res, next) => {
    let posts;
    let user;


    if (req.session._id) {
        try {
            user = await UserModel.findOne({ _id: req.session._id }, { password: 0, confirmPassword: 0 });
            posts = await Post.find({}).sort({ _id: 'desc' });

            let { profilePic } = user;

            if (!profilePic) {
                user = { ...user._doc, profilePic: await readFile('./imgUploads/avatar.png') }
            }

            res.render('./blog/blog', { user, posts });

        } catch (e) {
            console.log(e);
            return res.send(e);

        }
    } else {

        try {
            posts = await Post.find({}).sort({ _id: 'desc' });;
        } catch (e) {
            console.log(e);
            res.send(e);

        }

        res.render('./blog/blog', { posts });


    }

}, blogMain);

router.get('/posts/:postID', async (req, res, next) => {
    const postID = req.params.postID;
    let post;
    let user;
    let profilePic;



    

    

    try {


        post = await Post.findOne({ _id: postID });
        
        await Post.updateOne({ _id: postID }, { $set: { visits: post._doc.visits + 1 } });

        if (req.session._id) {
            user = await UserModel.findOne({ _id: req.session._id });
            if (!user.profilePic) {
                profilePic = await readFile('./imgUploads/avatar.png');
                user = { ...user._doc, profilePic: profilePic };
            }
        }
        res.render('./post/post', { user, post });






    } catch (e) {
        console.log(`Error from blog route: ${e}`);
        res.send({ message: `Error from blog route`, error: e });
    }




})

export default router;