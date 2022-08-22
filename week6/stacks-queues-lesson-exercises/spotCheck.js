const Stack = require('./src/Stack');
let myStack = new Stack();
console.log(myStack.isEmpty()); //true
myStack.print(); //[]
myStack.push(2);
console.log(myStack.isEmpty()); //false
myStack.push(4);
myStack.print(); //[2,4]
console.log(myStack.peek()); //4
myStack.pop();
myStack.pop();
console.log(myStack.peek()); //null
console.log(myStack.isEmpty()); //true
