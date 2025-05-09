import User from '../models/user.model.js';
// login user

const loginUser = async (req, res) => {
    res.json({
        message: 'Login user',  
    });
}

// signup user
const signupUser = async (req, res) => {
    res.json({
        message: 'Signup user',
    });
}

export {
    loginUser,
    signupUser
}