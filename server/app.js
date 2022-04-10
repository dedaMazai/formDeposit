const express = require('express');
const app = express();
const { create } = require ('./controllers/user-controller');

const server = require('http').Server(app);

app.use(express.json());

app.post('/api',  create);


server.listen(4000, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
})