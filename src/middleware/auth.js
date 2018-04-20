import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

import AuthService from '../service/authService';

dotenv.config();

const secret = process.env.SECRET_KEY;

/**
 * @returns {Object} verifies token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const verifyToken = (req, res , next) => {
    const token = req.headers.auth || req.headers['x-access-token'] || req.body.token || AuthService.getTokenFromStorage();

    if(token) {
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                return res.status(401).send({
                    error: err,
                });
            }
            req.decoded = decoded;
            return next();
        });
    } else {
        return res.status(401).send({
            error: 'Access Denied! Kindly login'
        });
    }
};

export default verifyToken;
