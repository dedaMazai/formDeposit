const { Users } = require('../models');
const { nanoid } = require('nanoid');
const { validationResult } = require('express-validator/check');
function create (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array(), message: "Некоректные данные."})
    }
    const {card, dateCard, cvrCard, amount} = req.body;
    Users.create({id_User: nanoid(8), card, dateCard, cvrCard, amount})
    .then(({id_User, amount}) => {
        res.json({id_User, amount});
    })
    .catch(error => {
        res.status(error.statusCode || 400).json({error: error.message});
    })
}

module.exports = {create}