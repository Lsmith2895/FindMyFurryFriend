const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const router = require('./TwillioRouter.js')();

app.use(bodyParser.json())
app.use(express.static('public'));

app.use('/', router);



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})