const SecondBiggest = function (array) {
  let firstMax = -Infinity;
  let secendMax = -Infinity;
  let arr = [];
  for (let m = 0; m < array.length; m++) {
    if (array[m] > firstMax) {
      secendMax = firstMax;
      firstMax = array[m];
    } else if (secendMax < array[m]) {
      secendMax = array[m];
    }
  }
  return secendMax;
};

const arr = [1, 5, 43, 7, 23, 4, 0];
console.log(SecondBiggest(arr));


