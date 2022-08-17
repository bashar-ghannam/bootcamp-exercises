const firstNon_repeatingCharacter = function (word) {
  let charCount = {};
  for (const char of word) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (const char in charCount) {
    if (charCount[char] == 1) {
      return char;
    }
  }
};

console.log(firstNon_repeatingCharacter('aabbccdee'));
console.log(firstNon_repeatingCharacter('abca'));
