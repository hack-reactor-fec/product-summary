const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('../db/index.js');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/public')));

const port = 1337;


app.get('/main', (req, res) => {

  console.log(req, 'GET :: server');

  let db = mongoose.connect('localhost:27017/main');

  Product.find({}).exec(function (err, docs) {
    if (err) {
      console.log('err');
      res.status(400).end();
    } else {
      console.log(docs)
      res.status(200).json(docs);
    }
  });
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
