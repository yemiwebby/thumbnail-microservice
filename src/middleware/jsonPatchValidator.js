
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const validateJsonObject = (req, res, next ) => {
    // check for empty request 
    if (!req.body.object || !req.body.patch) {
        return res.status(401).json({
            message: 'Json Object cannot be empty',
        });
    }

    next();
};



export default validateJsonObject;