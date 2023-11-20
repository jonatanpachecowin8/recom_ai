// server.js

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const routes = require('./routes/routes');

const app = express();


app.use('/', routes);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

