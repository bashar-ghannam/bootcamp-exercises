const add = function (a, b) {
  if (arguments.length == 2) {
    return a + b;
  }
  return function (b) {
    return a + b;
  };
};

console.log(add(2, 5));
console.log(add(2)(5));
