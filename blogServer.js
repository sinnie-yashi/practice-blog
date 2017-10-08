//load the modules you installed
const express = require('express');
const formidable = require('express-formidable');
const app = express();
const bodyParser= require('body-parser')

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'index.html')
});


//call the port the app will be running on
app.listen(PORT, function() {
  console.log('Listening on ' + PORT)
});
