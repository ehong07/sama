const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/get-form', async (req, res) => {
  const filter = req.params;

  db.fetchForm({}, (err, formData) => {
    if (err) {
      console.log('GET FORM ERR: ', err);
      res.sendStatus(500);
    } else {
      res.json(formData);
    }
  })
});

app.post('/save-form', async (req, res) => {
  const payload = req.body;
  console.log(payload);

  try {
    await db.postForm(payload);
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.get('/test', (req, res) => {
  res.send('running!');
});

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
