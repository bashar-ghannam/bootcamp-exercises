const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: String,
});

const Book = mongoose.model('book', bookSchema);
module.exports = Book;
