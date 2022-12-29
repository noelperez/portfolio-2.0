import e from "express";

const errorController = (err, req, res, next) => {
    console.log(`An error has ocurred ${err} ******************`, err);

    if (err.code == '11000') {

        const values = Object.keys(err.keyValue);
        let output = '';

        for ( let value of values) {
            output += `The ${value} is already in use.`
        }
        res.render('./register/newUser', { 
            errors: output,
            firstName: `${err.firstName || ''}`,
            lastName: `${err.lastName || ''}`,
            email: `${err.email || ''}`
        });
        
    } else if (err.name == 'ValidationError') {

        const errorsFields = Object.keys(err.errors);
        let output = '';
    
        for (let error of errorsFields) {
            output += err.errors[error].message + ' ';
        }
        res.render('./register/newUser', {
            errors: output,
            firstName: err.firstName,
            lastName: err.lastName,
            email: err.email
        });
        //res.send(err)

    } else {
        console.log('Error from errorController', err)
        res.send(err);
    }

};
    
export default errorController;