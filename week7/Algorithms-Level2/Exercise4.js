const encrypt = function (str) {
  let encryptStr = '';
  for (const char of str) {
    encryptStr += String.fromCharCode(char.charCodeAt(char) + 1);
  }
  return encryptStr;
};

console.log(encrypt('cat'));
