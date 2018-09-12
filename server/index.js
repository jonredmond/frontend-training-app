const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const app = express();

app.use(sassMiddleware({
  src: path.join(__dirname, '../sass'),
  dest: path.join(__dirname, '../client/styles'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/styles'
}));

app.use(express.static('client'));

app.post('/submit', (req, res) => console.log(req) && res.send(JSON.stringify(req.params)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));