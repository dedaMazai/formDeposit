const express = require('express');
const app = express();
const { create } = require ('./controllers/user-controller');
const { cardValidator } = require ('./services/validators');

const server = require('http').Server(app);

app.use(express.json());

app.post('/api', cardValidator, create);


server.listen(4000, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
})