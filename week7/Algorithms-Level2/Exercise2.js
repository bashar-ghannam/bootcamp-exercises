const reverse = function (str) {
  if (str.length != 1) {
    return reverse(str.slice(1)) + str[0];
  }
  return str;
};

console.log(reverse('dog')); //should return "god"
console.log(reverse('race car')); //should return "rac ecar"
