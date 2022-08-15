const swap = function (arr1, arr2) {
  if (arr1.length == 1) {
    arr2.push(arr1[0]);
    arr1.pop();
    return arr1;
  }
  arr2.push(arr1[0]);
  arr1 = swap(arr1.slice(1), arr2);
  return arr1;
};

let arr1 = [1, 2, 3];
let arr2 = [];
arr1 = swap(arr1, arr2);
console.log(arr1); //[]
console.log(arr2); //[1, 2, 3]
