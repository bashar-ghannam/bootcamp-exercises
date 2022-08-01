const express = require('express');
const { db } = require('../models/Person');
const router = express.Router();

const Person = require('../models/Person');

router.get('/people', function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});

router.post('/person', function (req, res) {
  let person = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });
  person.save();
  res.end();
});

router.put('/person/:id', function (req, res) {
  Person.findByIdAndUpdate(
    `${req.params.id}`,
    { age: 80 },
    { new: true },
    function (err, person) {
      res.send(person);
    }
  );
});

router.delete('/apocalypse', function (req, res) {
  Person.find({}, function (err, people) {
    people.forEach((person) => {
      person.remove();
    });
  });
  res.end();
});

module.exports = router;
