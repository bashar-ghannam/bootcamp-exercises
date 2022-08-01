const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//API that returns a random word
app.get('/randomWord', function (req, res) {
  let words = [
    'Bonanza',
    'Elusive',
    'Hindrance',
    'Astute',
    'Polaroid',
    'Phonic',
    'Yonder',
  ];
  res.send(words[Math.floor(Math.random() * words.length)]);
});

//API that returns synonyms for a word
app.get('/synonyms/:word', function (req, res) {
  let thesauraus = {
    Absolute: ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
    Astute: ['Sharp', 'Poignant', 'Clever'],
    Azure: ['Blue', 'Cyan', 'Sky-blue'],
    Bright: ['Luminous', 'Brilliant'],
    Bonanza: ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
    Elusive: ['Slick', 'Slippery', 'Ethereal', 'Loose'],
    Erode: ['Destroy', 'Wear out', 'Tarnish'],
    Hindrance: ['Bother', 'Disturbance', 'Problematic'],
    Phonic: ['Soundful'],
    Ploy: ['Plan', 'Ruse'],
    Polaroid: ['Photograph'],
    Yap: ['Bark', 'Blab', 'Chatter'],
    Yonder: ['There', 'Away', 'Far', 'Afar'],
  };

  let word = req.params.word;
  res.send(thesauraus[word]);
});

//API that returns the sentiment of a word: Positive (1), Negative (-1), or Neutral (0)
app.get('/sentiment/:word', function (req, res) {
  let word = req.params.word;
  let wordSentiment = {
    Absolute: 1,
    Astute: 1,
    Azure: 0,
    Bright: 1,
    Bonanza: 1,
    Elusive: -1,
    Erode: -1,
    Hindrance: -1,
    Phonic: 0,
    Ploy: 0,
    Polaroid: 0,
    Yap: -1,
    Yonder: -1,
  };

  res.send(JSON.stringify(wordSentiment[word]));
});

app.listen(3000, function () {
  console.log('Server running on 3000');
});
