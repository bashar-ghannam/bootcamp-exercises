const getLetter = function () {
  let randomNum = Math.random() * 100;
  const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20,
  };

  let totalPercent = 0;
  let currentPercent = 0;
  for (const key in rawDist) {
    currentPercent = totalPercent + rawDist[key];
    if (totalPercent <= randomNum && currentPercent > randomNum) {
      return key;
    }
    totalPercent = currentPercent;
  }
};

console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
console.log(getLetter());
