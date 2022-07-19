// overriding the native splice method
Array.prototype.splice = function (startIndex, ...args) {
  if (startIndex !== undefined) {
    let arr = args;
    let oldArr = this;
    let newArr = [];
    const argsLen = arr.length;
    const oldArrLen = oldArr.length;
    if (argsLen == 0) {
      for (let i = startIndex; i < oldArrLen; i++) {
        newArr.push(oldArr[i]);
        oldArr.pop();
      }
      return newArr;
    } else if (argsLen == 1) {
      let lastIndex = arr[1];
      if (lastIndex > oldArrLen) {
        lastIndex = oldArrLen;
      }
      for (let i = startIndex; i < lastIndex; i++) {
        newArr.push(oldArr[i]);
        oldArr.pop();
      }
      return newArr;
    }
  }
};

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
//console.log(arr); //should be [0,1,2,3]

// add 2 element
arr = [1, 2, 3];
arr.splice(0, 0, -1, 0);
//console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3, 4, 5];
arr.splice(1, 1, 23, 55);
//console.log(arr); //should be [1,55,3]

// delete 1 elements from one index
arr = [1, 2, 3, 4, 5];
arr.splice(1, 1);
//console.log(arr); //should be [1, 3, 4, 5]

// remove 1 element
arr = [1, 2, 3];
arr.splice(0, 1);
//console.log(arr); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
//console.log(deleted); //should be [1,3]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
//console.log(arr); //should be []
