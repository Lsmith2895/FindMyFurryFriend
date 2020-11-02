const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
})


//empty request handlers
app.post('/api/LostForm', (req, res) => {
  console.log('Reached Lost Form api call', req.body)
  res.send(req.body)
})

app.get('/', (req, res) => {
  res.send('hello from empty get request')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})