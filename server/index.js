import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import projectsRouter from './routes/projects.js';
import postsRouter from './routes/posts.js';
import usersRouter from './routes/users.js';
import blogRouter from './routes/blog.js';
import errorController from './controllers/errorController.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';






const DB_URL = 'mongodb://127.0.0.1:27017/portfolio';
const PORT = process.env.PORT || 3000; 

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database...')
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
});

const app = express();;
app.use(session({
    secret: 'secretPassword',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: DB_URL
    })
}))
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cors());
app.use(bodyParser.json({ limite: '15 mb'}));
app.use(bodyParser.urlencoded({ limit: '15 mb'}));
app.use(express.static('../build'));


/* Projects' static files */

app.use(express.static('../projects/dehanta'));
app.use(express.static('../projects/note-app'));
app.use(express.static('../projects/platformgame'));
app.use(express.static('../projects/unit-conversion-app'));
app.use(express.static('../projects/loginui'));
app.use(express.static('../projects/underconstruction'));
app.use(express.static('./views'));
app.use(express.static('./public'));

/* Routes */

app.use('/projects', projectsRouter);
app.use('/posts', postsRouter);
app.use('/blog', blogRouter);
app.use('/blog/users', usersRouter);
 



app.use(errorController);




