require('newrelic');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('../db/index.js');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/public')));

const port = 3001;


app.get('/api/:id', (req, res) => {

  // console.log(req, 'GET :: server');

  // let db = mongoose.connect('localhost:27017/main');

  Product.find({ projectID: req.params.id}, function (err, data) {
    if (err) {
      console.log('err: ', err);
      res.status(400).end();
    } else {
      console.log('data received');
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`App now live at http://127.0.0.1:${port}`);
});
