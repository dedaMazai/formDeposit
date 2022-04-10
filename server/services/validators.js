const { body } = require('express-validator/check');

const validators = {
    userValidator: [
        body('email').isEmail().normalizeEmail(),
        body('password').not().isEmpty().trim().isLength({min:5})
        .withMessage('must be moreover 5 chars').matches(/\d/).withMessage('must be contain a number')
    ],
    loginValidator: [
        body('email').isEmail().normalizeEmail(),
        body('password').not().isEmpty().trim().isLength({min:5})
        .withMessage('must be moreover 5 chars').matches(/\d/).withMessage('must be contain a number')
    ]
}

module.exports = validators;