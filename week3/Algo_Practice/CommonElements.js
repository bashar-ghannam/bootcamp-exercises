// const commonElements = function (arr, arr2, arr3) {
//   let newArr = [];
//   arr2 = new Set(arr2);
//   arr3 = new Set(arr3);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr2.has(arr[i]) && arr3.has(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// let arr = [4, 1, 2, 5];
// let arr2 = [6, 9, , 1, 2];
// let arr3 = [6, 9, , 1, 3];
// console.log(commonElements(arr, arr2, arr3));

const findCommon = function (arr1, arr2, arr3, L1, L2, L3) {
  let common = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < L1 && j < L2 && k < L3) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) i++;
    else if (arr2[j] < arr3[k]) j++;
    else k++;
  }
  return common;
};

const ar1 = [1, 5, 10, 20, 40, 80];
const ar2 = [6, 7, 20, 80, 100];
const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
const n1 = ar1.length;
const n2 = ar2.length;
const n3 = ar3.length;

console.log('Common Elements are :' + findCommon(ar1, ar2, ar3, n1, n2, n3));
