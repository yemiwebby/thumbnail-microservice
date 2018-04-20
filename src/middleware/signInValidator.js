import validator from 'validator';


/**
 * @returns {Object} validate input
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const validateUserSignIn = (req, res, next) => {
    // check for empty fields
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'All or some of the field is/are undefined',
        });
    }

    // check for username
    if (validator.isEmpty(req.body.username)) {
        return res.status(400).json({
            message: 'Username field is required',
        });
    }

    if (!validator.isLength(req.body.username, { min: 3, max: 50 })) {
        return res.status(406).send({
            status: 'Fail',
            message: "Username should be between 3 and 50 characters",
        });
    }

    // check for password
    if (validator.isEmpty(req.body.password)) {
        return res.status(401).json({
            message: 'Please enter a password',
        });
    }

    next();
};

export default validateUserSignIn;