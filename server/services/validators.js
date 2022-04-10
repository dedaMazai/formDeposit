const { body } = require('express-validator/check');

const validators = {
    cardValidator: [
        body('card').not().isEmpty().trim().isLength({min:11}),
        body('dateCard').not().isEmpty().matches(/\d{2}\/\d{4}/),
        body('cvrCard').not().isEmpty().trim().isLength(3),
        body('amount').not().isEmpty()
    ]
}

module.exports = validators;