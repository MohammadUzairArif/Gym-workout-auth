import UserModel from '../models/user.model.js';
// login user

const loginUser = async (req, res) => {
    res.json({
        message: 'Login user',  
    });
}

// signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.signup(email, password);
        if(!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export {
    loginUser,
    signupUser
}