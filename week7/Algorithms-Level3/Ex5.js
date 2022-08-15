const camelCase = function (str) {
  const arr = str.split(' ');
  let camelCaseStr = arr[0];
  for (const word of arr) {
    camelCaseStr += word[0].toUpperCase() + word.slice(1);
  }
  return camelCaseStr;
};

console.log(camelCase('hello case'));
console.log(camelCase('camel case word'));
