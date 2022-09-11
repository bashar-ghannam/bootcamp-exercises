const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const expenseSchema = new Schema({
  item: String,
  group: String,
  amount: Number,
  date: Date,
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
