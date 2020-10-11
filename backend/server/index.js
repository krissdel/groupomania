const express = require('express');
const routes = require('../routes');

const server = express();
server.use(express.json());

server.use('/api', routes);

module.exports = server;



// require('dotenv').config();

// const server = require('./server');

// const PORT = process.env.PORT || 3300;

// server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));