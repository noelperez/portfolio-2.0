import express from 'express';
import { serveProject } from '../controllers/projects.js';


const router = express.Router();

/* router.get('/', (req, res, next) => {
    res.redirect('/');
}) */

router.get('/:projectName', serveProject);

export default router;

