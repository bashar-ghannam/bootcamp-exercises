const reverseString = function (str) {
  if (str.length == 1) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str[0];
  }
};

console.log(reverseString('bashar'));
