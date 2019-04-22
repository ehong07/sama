const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test', (req, res) => {
  res.send('running!');
});

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
