const Stack = require('./Stack');

class MinStack extends Stack {
  constructor() {
    super();
    this.minValues = new Stack();
  }
  pop() {
    if (this.length != 0) {
      if (this.peek() === this.minValues.peek()) {
        this.minValues.pop();
      }
      delete this.stack[this.length];
      this.length--;
    }
  }

  push(x) {
    this.stack[this.length] = x;
    if (!this.minValues.peek()) {
      this.minValues.push(x);
    } else {
      if (this.minValues.peek() > x) {
        this.minValues.push(x);
      }
    }
    this.length++;
  }
  getMin() {
    return this.minValues.peek();
  }
}

module.exports = MinStack;
