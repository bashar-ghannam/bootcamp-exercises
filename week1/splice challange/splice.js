// overriding the native splice method
Array.prototype.splice = function (
  startIndex,
  endIndex = null,
  num1 = null,
  num2 = null
) {
  // write your code here
  let arr = this;
  const leng = arr.length;
  let newArr = [];
  if (startIndex < 0) {
    startIndex += leng;
  }
  if (startIndex === undefined) {
    return newArr;
  } else if (num1 == null) {
    if (endIndex == null) {
      for (let index = startIndex; index < leng; index++) {
        newArr.push(arr[index]);
      }
      for (let index = startIndex; index < leng; index++) {
        arr.pop();
      }
    } else {
      if (startIndex == endIndex) {
        for (let index = 0; index < leng; index++) {
          if (startIndex != index) {
            newArr.push(arr[index]);
          }
        }
        fillArray(arr, newArr);
      } else {
        //
        for (const index in arr) {
          if (startIndex > index || endIndex <= index) {
            newArr.push(arr[index]);
          }
        }
        fillArray(arr, newArr);
      }
    }
    return newArr;
  } else if (num1 != null) {
    if (endIndex == 0) {
      for (let index = 0; index < leng; index++) {
        if (startIndex == index) {
          newArr.push(num1);
          if (num2 != null) {
            newArr.push(num2);
          }
        }
        newArr.push(arr[index]);
      }
      fillArray(arr, newArr);
      newArr.length = 0;
    } else {
      for (let i = 0; i < leng; i++) {
        if (startIndex == i) {
          newArr[i] = num1;
          if (num2 != null) {
            newArr[i + 1] = num2;
            i++;
          }
        } else {
          newArr.push(arr[i]);
        }
      }
      fillArray(arr, newArr);
      newArr.length = 0;
    }
  }
  return newArr;
};

function fillArray(arr, newArr) {
  const leng = arr.length;
  arr.length = 0;
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i]);
  }
}

// delete all elements from index to end
let arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// add 2 element
arr = [1, 2, 3];
arr.splice(0, 0, -1, 0);
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3, 4, 5];
arr.splice(1, 1, 23, 55);
console.log(arr); //should be [1,55,3]

// delete 1 elements from one index
arr = [1, 2, 3, 4, 5];
arr.splice(1, 1);
console.log(arr); //should be [1, 3, 4, 5]

// remove 1 element
arr = [1, 2, 3];
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
console.log(deleted); //should be [1,3]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be []
