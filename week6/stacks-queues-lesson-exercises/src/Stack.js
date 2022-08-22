class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  pop() {
    if (this.length != 0) {
      delete this.stack[this.length];
      this.length--;
    }
  }

  push(x) {
    this.stack[this.length] = x;
    this.length++;
  }

  print() {
    if (this.length != 0) {
      console.log('Stack items : ');
      for (const item of this.stack) {
        console.log(item);
      }
    }
  }

  peek() {
    if (this.length != 0) {
      return this.stack[this.length - 1];
    }
    return null;
  }

  isEmpty() {
    if (this.length == 0) {
      return true;
    }
    return false;
  }
}
module.exports = Stack;
