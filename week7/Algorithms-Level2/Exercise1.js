const printBackwardsStars = function (num) {
  let string = '';
  while (num > 0) {
    if (string.length < num) {
      string += '*';
    } else if (string.length === num) {
      console.log(string);
      num--;
      string = '';
    }
  }
};

const printFrowardsStars = function (num) {
  let line = '';
  for (line = '*'; line.length < num; line += '*') console.log(line);
};
const printStarSeries = function (num, count) {};

const printStar = function (num, count) {
  for (let i = 0; i < count; i++) {
    printFrowardsStars(num);
    printBackwardsStars(num);
    console.log(' ');
  }
};

printStar(5, 3);
