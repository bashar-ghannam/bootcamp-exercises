// overriding the native splice method
Array.prototype.splice = function (startIndex, elementCount = null, ...args) {
  if (startIndex !== undefined) {
    let oldArr = this;
    let newArr = [];
    const oldArrLen = oldArr.length;
    if (elementCount == null) {
      for (let i = startIndex; i < oldArrLen; i++) {
        newArr.push(oldArr[i]);
      }
      for (let i = startIndex; i < oldArrLen; i++) {
        oldArr.pop();
      }
      return newArr;
    } else if (args.length == 0) {
      const lastIndex = elementCount + startIndex;
      let tempArr = [];
      if (elementCount > oldArrLen) {
        elementCount = oldArrLen;
      }
      for (let i = 0; i < oldArrLen; i++) {
        if (startIndex <= i && i < lastIndex) {
          newArr.push(oldArr[i]);
        } else {
          tempArr.push(oldArr[i]);
        }
      }
      oldArr.length = 0;
      for (let i = 0; i < tempArr.length; i++) {
        oldArr.push(tempArr[i]);
      }
      return newArr;
    } else {
      for (let i = 0; i < oldArrLen; i++) {
        if (startIndex == i) {
          newArr.push(...args);
          i += elementCount;
        } else {
          newArr.push(oldArr[i]);
        }
      }
      oldArr.length = 0;
      for (const element of newArr) {
        oldArr.push(element);
      }
      return [];
    }
  }
};

let arr = [1, 2, 3, 4, 5];
arr.splice(1);
//console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
//console.log(deleted); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
//console.log(arr); //should be [0,1,2,3]

// add 2 element
arr = [1, 2, 3];
arr.splice(1, 0, -1, 0);
//console.log(arr); //should be [1,-1,0,2,3]

// replace 1 element
arr = [1, 2, 3, 4, 5];
arr.splice(1, 1, 23, 55);
console.log(arr); //should be [1,55,3]

// replace 2 element
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 23, 55);
console.log(arr); //should be [1,55,3]

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
//console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
//console.log(deleted); //should be []
