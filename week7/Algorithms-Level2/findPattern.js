const findPattern = function (pattern, str) {
  const arr = str.split(' ');
  let obj = {};
  let newStr = '';
  let j = 'a';
  for (const word of arr) {
    if (obj[word]) {
      newStr += obj[word];
    } else {
      obj[word] = j;
      newStr += j;
      j = String.fromCharCode(j.charCodeAt(0) + 1);
    }
  }
  if (newStr === pattern) {
    return true;
  }
  return false;
};

console.log(findPattern('abbc', 'cat dog dog cow'));
console.log(findPattern('abc', 'cat dog cow'));
console.log(findPattern('abb', 'cat dog cow'));
console.log(findPattern('aba', 'omar sami omar'));
console.log(findPattern('abb', 'cat dog cat'));
