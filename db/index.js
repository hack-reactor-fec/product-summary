const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/notairbnb').then(
  () => {console.log('connected to MongoDB')},
  err => {console.log(err)}
);

let productSchema = new mongoose.Schema({
    projectID: Number,
    mainDisplay: {
      title: String,
      description: String,
      img: String,
    },
    product: {
      name: String,
      category: String,
      numBackers: Number,
      amtPledged: Number,
    },
    target: {
      endDate: String,
      amt: Number,
    },
    creator: {
      name: String,
      location: String,
      avatarImg: String,
      numberProducts: Number,
    },
})

let Product = mongoose.model('Product', productSchema, 'Product');

module.exports = Product;
