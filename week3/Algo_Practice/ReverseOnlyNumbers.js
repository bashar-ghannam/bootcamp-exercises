const ReverseOnlyNumbers = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      arr[i] = newArr.pop();
    }
  }
};

let arr = [1, 'w', 'e', 2, 5, 3, 'r', 7, 8];
ReverseOnlyNumbers(arr);
console.log(arr);
