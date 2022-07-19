function deepClone(obj) {
  if (null == obj || 'object' != typeof obj) return obj;
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = deepClone(obj[attr]);
    }
    return copy;
  }
}

let x = { a: 'b', a2: ['first', 'second'] };
let y = { b: x, b3: ['firtsY', x] };
let z = deepClone(y);
x.a = 'a';
console.log(y);
console.log(z);
