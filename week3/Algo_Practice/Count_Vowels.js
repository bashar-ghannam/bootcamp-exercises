const Count_Vowels = function () {
  let count = 0;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  for (const char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
};

const str = 'abcde'.toLowerCase();

console.log('Count : ' + Count_Vowels(str));
