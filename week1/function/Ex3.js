// Ex 3
function checkExists(arr, num) {
  for (const i in arr) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));
