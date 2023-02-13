import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import projectsRouter from './routes/projects.js';
import postsRouter from './routes/posts.js';
import usersRouter from './routes/users.js';
import blogRouter from './routes/blog.js';
import errorController from './controllers/errorController.js';
import * as dotenv from 'dotenv';
import { createServer } from 'http';
import { upgradeHandler } from './wss.js';
import { WebSocketServer } from 'ws';
import UserModel from './models/user.js';

dotenv.config();

const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

const wss = new WebSocketServer({
    clientTracking: true,    
    noServer: true
})


const app = express();
const sessionParser = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: DB_URL
    })
})


app.use(sessionParser);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cors());
app.use(bodyParser.json({ limite: '15 mb'}));
app.use(bodyParser.urlencoded({ limit: '15 mb'}));
app.use(express.static('../client/build'));


/* Projects' static files */

app.use(express.static('../client/projects/dehanta'));
app.use(express.static('../client/projects/note-app'));
app.use(express.static('../client/projects/platformgame'));
app.use(express.static('../client/projects/unit-conversion-app'));
app.use(express.static('../client/projects/loginui'));
app.use(express.static('../client/projects/underconstruction'));
app.use(express.static('./views'));
app.use(express.static('../client/public'));
app.use(express.static('./public'));

/* Routes */

app.use('/projects', projectsRouter);
app.use('/posts', postsRouter);
app.use('/blog', blogRouter);
app.use('/blog/users', usersRouter);
 

app.use(errorController);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database...');
    
    const server = createServer(app).listen(PORT, () => {
        console.log(`Listening on por ${PORT}`);
    });
    
    server.on('upgrade', (request, socket, head) => {
        console.log(`Upgrade request received...`);
        upgradeHandler(request, socket, head, sessionParser, wss);
    });
});


wss.on('connection', (ws, request) => {
    console.log(`Connection emmitted finally, sending message to: ${ws._id}`);
    ws.send(
        JSON.stringify(
            {
                code: 0,
                content: `Welcome! Total online users: ${Array.from(wss.clients).length}`,
                timestamp: Date.now()
            }
        )
    );

    wss.clients.forEach(async (client) => {
        let user;

        try {
            user = await UserModel.findOne({ _id: ws._id});
        } catch (e) {

            console.log(`Error while attempting to retrieve user: ${e}`);
            
        }
        if (client != ws) {
            client.send(
                JSON.stringify(
                    {
                        code: 0,
                        content: `${user.firstName} ${user.lastName} joined the chat`,
                        timestamp: Date.now()
                    }
                )
            )

        }
    })
})