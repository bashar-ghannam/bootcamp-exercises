//Ex 1 + 2
function isEven(num) {
  if (num % 2 == 0) return true;
  return false;
}

function oddinArray(arr) {
  for (const i in arr) {
    if (!isEven(arr[i])) {
      console.log(arr[i]);
    }
  }
}

let arr = [1, 2, 3, 4, 5];
oddinArray(arr);
