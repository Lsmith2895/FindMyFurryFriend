const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db.js')
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const router = require('');

app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
})

app.use('/', router);



app.get('/', (req, res) => {
  res.send('hello from empty get request')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})