const MedianChar = function (str) {
  let arr = Array.from(str).sort();
  return arr[arr.length / 2 - 1];
};

const str = 'question';
console.log(MedianChar(str));
