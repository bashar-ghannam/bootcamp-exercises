const express = require('express');
const router = express.Router();

const wordCounter = {};

router.get('/word/:word', function (request, response) {
  if (wordCounter[request.params.word]) {
    response.send({ count: wordCounter[request.params.word] });
  } else {
    response.send({ count: 0 });
  }
});

router.post('/word/:word', function (request, response) {
  if (wordCounter[request.params.word]) {
    wordCounter[request.params.word]++;
  } else {
    wordCounter[request.params.word] = 1;
  }
  response.send({
    text: `added ${request.params.word}`,
    currentCount: wordCounter[request.params.word],
  });
});

router.post('/words/:sentence', function (req, res) {
  let words = req.params.sentence.split(' ');
  let numNewWords = 0;
  let numOldWords = 0;
  for (let word of words) {
    if (wordCounter[word]) {
      wordCounter[word]++;
      numOldWords++;
    } else {
      wordCounter[word] = 1;
      numNewWords++;
    }
  }
  res.send({
    text: `added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

router.delete('/word/:word', function (request, response) {
  if (wordCounter[request.params.word]) {
    wordCounter[request.params.word]++;
  } else {
    wordCounter[request.params.word] = 1;
  }
  response.send({
    text: `added ${request.params.word}`,
    currentCount: wordCounter[request.params.word],
  });
});


module.exports = router;
