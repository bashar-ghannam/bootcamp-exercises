const DuplicateAnArray = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
    newArr[i + arr.length] = arr[i];
  }
  return newArr;
};

const arr = [1, 2, 3, 2, 45];
console.log(DuplicateAnArray(arr));
