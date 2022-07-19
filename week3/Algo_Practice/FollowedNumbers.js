const FollowedNumbers = function (arr) {
  let newArr = [];
  const setArr = new Set(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (setArr.has(arr[i] + 1)) {
      newArr.push([arr[i], arr[i] + 1]);
    } else if (setArr.has(arr[i] - 1)) {
      newArr.push([arr[i], arr[i] - 1]);
    }
  }
  return newArr;
};

let arr = [4, 1, 3, 5];
console.log(FollowedNumbers(arr));
