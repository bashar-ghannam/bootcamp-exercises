const BSTree = require('./BinarySearch');
const alphabet = require('./alphabet');

class ScoreTree extends BSTree {
  constructor(value, score) {
    super(value);
    this.score = score;
  }
  insertNode(key, score) {
    //this function inserts a letter into the morse code tree - this should run once in the beginning
    if (!this.value) {
      this.value = key;
      this.score = score;
    } else if (score > this.score && this.rightChild) {
      this.rightChild.insertNode(key, score);
    } else if (score <= this.score && this.leftChild) {
      this.leftChild.insertNode(key, score);
    } else if (score <= this.score) {
      this.leftChild = new ScoreTree(key, score);
    } else {
      this.rightChild = new ScoreTree(key, score);
    }
  }
  findLetter(val, str) {
    if (val < this.score && this.leftChild) {
      str += '.';
      return this.leftChild.findLetter(val, str);
    } else if (val > this.score && this.rightChild) {
      str += '-';
      return this.rightChild.findLetter(val, str);
    } else if (val === this.score) {
      return str;
    } else return '/';
  }

  translateWord(word) {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toUpperCase();
      str += morseCode.findLetter(alphabet[`${char}`], '') + ' ';
    }
    console.log(str);
  }

  goForword(word) {
    if (word.length === 0) {
      return this.value;
    } else if (word[0] == '.' && this.leftChild) {
      return this.leftChild.goForword(word.substring(1));
    } else if (word[0] == '-' && this.rightChild) {
      return this.rightChild.goForword(word.substring(1));
    }
    return this.value;
  }

  translateMorse(str) {
    const words = str.split(' ');
    let newStr = '';
    words.forEach((word) => {
      if (word === '/') {
        newStr += ' ';
      } else {
        newStr += this.goForword(word);
      }
    });
    console.log(newStr);
  }
}
//initializing the MorseCode tree
const morseCode = new ScoreTree('TOP', 50);
Object.keys(alphabet).forEach((l) => {
  morseCode.insertNode(l, alphabet[l]);
});

morseCode.translateWord('welcome'); // should print .-- . .-.. -.-. --- -- .
morseCode.translateWord('elevation is cool'); // should print . .-.. . ...- .- - .. --- -. /.. ... /-.-. --- --- .-..
morseCode.translateMorse('.... ---- ....');
morseCode.translateMorse(
  '-. .. -.-. . / .--- --- -... / --- -. / - .... . / .-.. . ... ... --- -.'
);
