import express from 'express';
import { newPost, fetchPosts, writePost, editPost, updatePost } from '../controllers/posts.js';
import PostModel from '../models/posts.js';


const router = express.Router();

router.get('/', fetchPosts);
router.route('/newpost/:postID')
.get(editPost)
.post(updatePost);

router.route('/newpost')
.get(writePost)
.post(newPost);



export default router;