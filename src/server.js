'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');


app.use(logger);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('Hello & Welcome form Homeback')
});

app.post('/bad', (req,res)=> {
    let number = 12;
    number.forEach(x=> console.log(x));
    res.send('this Bad Route');
})

app.get('/person',validator, (req, res)=> {
    res.json({
       name: req.name,
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}