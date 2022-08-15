const CharstoLength = function (str) {
  let obj = {};
  let lastIndex = '';
  let count = 0;
  let i = 0;
  for (const char of str) {
    if (char == lastIndex) {
      count++;
      obj[i]++;
    } else {
      i++;
      count = 1;
      obj[i] = 1;
    }
    lastIndex = char;
  }
  lastIndex = '';
  let newStr = '';
  i = 1;
  for (const char of str) {
    if (char != lastIndex) {
      newStr += char + obj[i];
      i++;
    }
    lastIndex = char;
  }
  return newStr;
};

console.log(CharstoLength('aaba'));
console.log(CharstoLength('aaabbcb'));
