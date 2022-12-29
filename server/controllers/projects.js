import { promises as fsPromises } from 'fs';
import path from 'path';


const serveProject = async (req, res) => {
    
    const project = req.params.projectName;
    
    let projects =  await fsPromises.readdir(path.join(process.cwd(), "..","projects"));
    console.log(projects, project);

    /* if the provided project doesn't exists */
    if (!projects.includes(project)) {

        if (project == 'blog' || project == 'skillsharing') {
            return res.sendFile(path.join(process.cwd(), "..", "projects", `underconstruction`, "index.html"));
        } else {
            return res.send(`What is this project '${project}'?`);
            
        }


    }
    console.log('sending file')
    res.sendFile(path.join(process.cwd(), "..", "projects", `${project}`, "index.html"));
};



export {
    serveProject
}