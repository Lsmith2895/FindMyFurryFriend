const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db.js')

app.use(express.static('public'));

app.get('/', (req, res) => {
})


//empty request handlers
app.post('/', (req, res) => {
  res.send('hello from empty post request')
})

app.get('/', (req, res) => {
  res.send('hello from empty get request')
})

app.put('/', (req, res) => {
  res.send('hello from empty put request')
})
app.patch('/', (req, res) => {
  res.send('hello from empty patch request')
})
app.delete('/', (req, res) => {
  res.send('hello from empty delete request')
})


app.listen(PORT, () => {
  console.log('you have connected find my furry friend')
  console.log(`Server listening on port: ${PORT}`);
})