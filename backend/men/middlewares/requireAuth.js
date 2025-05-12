import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const requireAuth = async  (req, res, next) => {
    // Check if the user is authenticated
    const {Authorization} = req.headers
    
    if (!Authorization) {
        return res.status(401).json({error: 'Authorization token required'});
    }
    const token = Authorization.split(' ')[1];
    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        return res.status(401).json({error: 'Request is not authorized'});
    }
    next();
}