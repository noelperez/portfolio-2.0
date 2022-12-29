import path from 'path';
export const blogMain = (req, res) => {
    res.render('./blog/blog', { message: 'This is a test file', title: `Noel's Blog`});
}
