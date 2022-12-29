import { promises as fsPromises } from 'fs';
import path from 'path';


const serveProject = async (req, res) => {
    
    const project = req.params.projectName;

    try {
        
        let projects =  await fsPromises.readdir(path.join(process.cwd(), "..", "client","projects"));
        

    
        /* if the provided project doesn't exists */

        if (!projects.includes(project)) {
    
            if (project == 'blog' || project == 'skillsharing') {

                return res.sendFile(path.join(process.cwd(), "..", "client", "projects", `underconstruction`, "index.html"));

            } else {

                return res.send(`What is this project '${project}'?`);
                
            }
        
        }

        console.log('sending file')
        res.sendFile(path.join(process.cwd(), "..", "client", "projects", `${project}`, "index.html"));

    } catch (e) {
        console.log(`Something went wrong while attempting to serve the project '${project}': e`);
        res.send({ message: `Something went wrong while attempting to serve the project '${project}'`, error: e});
        
    }
    
};



export {
    serveProject
}