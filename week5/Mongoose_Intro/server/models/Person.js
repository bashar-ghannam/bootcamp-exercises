const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  age: Number,
});

const Person = mongoose.model('person', personSchema);
module.exports = Person;
