const express = require('express');
const router = express();
const moment = require('moment');
const Expense = require('../model/Expense');

router.get('/expenses', function (request, response) {
  const d1 = moment(request.query.d1).format('LLLL');
  const d2 = moment(request.query.d2).format('LLLL');
  console.log(d1, d2);
  if (d1 && d2) {
    Expense.find({
      date: { $lt: d2, $gt: d1 },
    }).exec(function (err, expenses) {
      response.end(expenses);
    });
  } else if (d1) {
    console.log('b');
  } else {
    console.log('c');
  }
});

router.post('/expenses', function (request, response) {
  const item = request.body.item;
  const group = request.body.group;
  const amount = request.body.amount;
  const expense = new Expense({
    item,
    group,
    amount,
    date: (request.body.date ? moment(request.body.date) : moment()).format(
      'LLLL'
    ),
  });
  expense.save();
  response.send(`${amount} of ${item} added to expenses`);
});

router.put('/update', function (request, response) {
  const group1 = request.query.group1;
  const group2 = request.query.group2;
  Expense.findByIdAndUpdate(
    `${group1}`,
    { group: group2 },
    function (err, oldItem) {
      response.send(
        `${oldItem.item} expense group changed from ${oldItem.group} to ${group2}`
      );
    }
  );
});

router.get('/expenses/:group', function (request, response) {
  const group = request.params.group;
  const total = request.query.total;
  if (total) {
    Expense.aggregate([
      { $match: { group } },
      { $group: { _id: '$group', sum: { $sum: '$amount' } } },
    ]).exec(function (err, expenses) {
      console.log('Sum : ' + expenses[0].sum);
      response.end();
    });
  }
});

module.exports = router;
