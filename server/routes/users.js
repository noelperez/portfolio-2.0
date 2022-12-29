import express from 'express';
const router = express.Router();
import multer from 'multer';
import { createUser, newUser, logIn, logOut } from '../controllers/users.js';
import UserModel from '../models/user.js';
import Post from '../models/posts.js';
import { readFile } from 'fs/promises';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'imgUploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + '.jpeg')
    }
});
const upload = multer({ storage: storage});

router.route('/new')
.get(newUser)
.post(upload.single('profilePic'), createUser);

router.route('/login')
.get( async (req, res, next) => {

    if (req.session._id) {
        let user = await UserModel.findOne({ _id: req.session._id }, { password: 0, confirmPassword: 0 });
        let posts = await Post.find({}).sort({ _id: 'desc'});;
        let { firstName, lastName, profilePic } = user;

        if (!profilePic) {
            user = { ...user._doc, profilePic: await readFile('./imgUploads/avatar.png') }
        }
        return res.render('./blog/blog', { user, posts });

    }

    next();
},(req, res, next) => {
    res.render('./login/login', { email: ``});
})
.post(logIn);

router.get('/logout', logOut);



export default router;