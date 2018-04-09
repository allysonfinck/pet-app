const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  animal: String,
  breed: String,
  size: String,
  sex: String,
  location: String,
  age: String
});

const Pets = mongoose.model('Pets', petSchema);

module.exports = Pets;
