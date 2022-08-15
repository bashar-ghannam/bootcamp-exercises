const LongestSubstring = function (word) {
  let charSet = new Set();
  let obj = {};
  let count = 0;
  let subString = '';
  let i = 1;
  for (const char of word) {
    if (!charSet.has(char)) {
      subString += char;
      count++;
      charSet.add(char);
      if (word.length == i) {
        obj[subString] = count;
      }
    } else {
      obj[subString] = count;
      count = 1;
      subString = char;
      charSet.clear();
    }
    i++;
  }
  let maxLength = 0;
  let maxPart = '';
  for (const part in obj) {
    if (maxLength < obj[part]) {
      maxLength = obj[part];
      maxPart = part;
    }
  }
  return `${maxPart}: ${maxLength}`;
};

console.log(LongestSubstring('communication'));
