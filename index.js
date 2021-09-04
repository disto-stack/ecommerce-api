const express = require('express');
const config = require('config');

const app = express();
const port = config.get('server-port');

const databaseConnection = require('./model/db-connection/mongodb');
databaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res, next) => {
    res.send(`
        <h1>Welcome to e-commerce API</h1>
    `)
})

app.listen(port, () => {
    console.log('Server running on port', port);
})