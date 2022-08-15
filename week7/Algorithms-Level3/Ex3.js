const hasUniqueCharacters = function (word) {
  let wordSet = new Set();
  for (const char of word) {
    if (wordSet.has(char)) {
      return false;
    } else {
      wordSet.add(char);
    }
  }
  return true;
};

console.log(hasUniqueCharacters('hello'));
console.log(hasUniqueCharacters('cat'));
