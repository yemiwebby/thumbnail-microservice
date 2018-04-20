import isURL from 'validator/lib/isURL';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const checkValidURL = (req, res, next ) => {
    // check for empty request 
    if (!req.body.image) {
        return res.status(401).json({
            message: 'Image URL cannot be empty',
        });
    }

    // check if request is a valid JSON Object
    if (!isURL(req.body.image)) {
        return res.status(401).json({
            message: 'Invalid URL',
        });
    }

    next();
};



export default checkValidURL;
