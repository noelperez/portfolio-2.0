import UserModel from '../models/user.js';
import { readFile, unlink } from 'fs/promises';
import Post from '../models/posts.js';
import bcrypt from 'bcrypt';



export const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    let profilePic;
    if (req.file) {
        profilePic = await readFile(req.file.path);
        await unlink(req.file.path);
    } else {
        profilePic = await readFile('./imgUploads/avatar.png')
    }

    let user;
    
    try {

        user = await UserModel({ firstName, lastName, email, password, confirmPassword, profilePic});

        try {
            await user.save();

        } catch (e) {
            throw {...e, name: 'ValidationError', firstName, lastName, email }
            //throw e;

        }
        
        console.log(`User successfully created`);
        user = await UserModel.findOne({ email });
        res.redirect('/blog/users/login');


    } catch(e) {
        console.log(`An error occurred while save the user: ${e}`);
        next(e);

    }

    

    
};

export const newUser = (req, res)=> {
    res.render('./register/newUser');

}

export const logIn = async (req, res, next) => {
    const { email, password } = req.body;
    let user;
    let posts;


    
    try {

        if (!email) throw { errors: `Please enter an email address`};

        user = await UserModel.findOne({ email });

        if (!user) throw { errors: `User ${email} does not exist.`, email: email };
        
        const isAuthenticated = await bcrypt.compare(password, user.password);

        if (!isAuthenticated) throw { errors: `Incorrect password.`, email: email}

        req.session._id = user._id;

        let { firstName, lastName, profilePic } = user;

        if (!profilePic) profilePic = await readFile('./imgUploads/avatar.png');
        posts = await Post.find({});
        
        //res.status(302).render('./blog/blog', { user, posts });
        res.status(302).redirect('./login');
    
    } catch(e) {
        console.log(`${e.email}`);
        res.render('./login/login', { 
            errors: e.errors || 'There was an internal error, please contact the site administrator.',
            email: `${e.email || ''}` });
        
         
    }
}

export const logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/blog/');
}



