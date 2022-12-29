import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
        minLength: [2, 'The first name should be at least 2 characters long.'],
        validate: [validator.isAlpha, 'The first name cannot contain numbers or special characters.']

    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'],
        minLength: [2, 'The last name should be at least 2 characters long.'],
        validate: [validator.isAlpha, 'The last name cannot contain numbers or special characters.']
    },
    role: {
        type: String,
        default: 'viewer'
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'The password must be at least 6 characters long.'],
        validate: [ (value) => {
            return validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1
            });
        }, 'The password must contain at least 8 characters, including upper/lower case and a special character (!@#$%^&*).']
    },
    confirmPassword: {
        type: String,
        required: [ true, 'You must confirm your password.']
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    email: {
        type: String,
        lowercase: true,
        unique: [true, 'The email provided is already in use.'],
        required: true  
    },
    gender: {
        type: String,
        default: 'not specified'
    },
    dateOfBirth: {
        type: Date
    },
    profilePic: {
        type: Buffer,
        default: null
    }
});

userSchema.pre('save', async function (next) {
    const user = this;
    
    

    if (user.password !== user.confirmPassword) {
        throw {
            name: 'ValidationError',
            errors: {
                password: {
                    message: 'The passwords are not matching.'
                }
            }
        }
    }
    
    user.confirmPassword = null;
    next();


})

userSchema.pre('save', async function(next) {

    let user = this;

    try {

        /* Hashing password if the user password was changed/modified */
        
        if (!user.isModified('password')) return next();
    
        const hashedPassword = await bcrypt.hash(user.password, 10);
    
        user.password = hashedPassword;
    
        return next();
        
    } catch(e) {
        console.log(`Something went wrong while hashing the password: ${e}`);
        

    }

    


});

const User = mongoose.model('User', userSchema);

export default User;