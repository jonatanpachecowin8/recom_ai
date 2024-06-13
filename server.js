const express = require('express');
const { recommendProducts } = require('./controllers/recomendaciones');
const app = express();
const port = 3000;
const routes = require('./routes/routes');

app.use('/', routes);


app.listen(port, () => {
  console.log(`Recommendation app listening at http://localhost:${port}`);
});
