// server.js

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const AWSPersonalizeController = require('./controllers/AWSPersonaliceController');
const AWSS3Controller = require('./controllers/AWSS3Controller');
const routes = require('./routes/routes');

const app = express();

const personalizeController = new AWSPersonalizeController();
const s3Controller = new AWSS3Controller();


app.use('/', routes);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

// Resto de configuraciones y rutas...
