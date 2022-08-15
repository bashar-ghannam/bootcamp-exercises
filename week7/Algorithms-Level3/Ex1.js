const highestScore = function (str) {
  const arr = str.split(' ');
  let obj = {};
  let count = 0;
  let i;
  for (const word of arr) {
    count = 0;
    for (const index in word) {
      count += word.charCodeAt(index) - 96;
    }
    obj[word] = count;
  }

  let maxLength = 0;
  let maxWrod = '';
  for (const word in obj) {
    if (obj[word] > maxLength) {
      maxLength = obj[word];
      maxWrod = word;
    }
  }
  return maxWrod;
};

console.log(highestScore('if you are a winner'));
