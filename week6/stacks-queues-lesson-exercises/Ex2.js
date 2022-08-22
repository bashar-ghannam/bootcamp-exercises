const MinStack = require('./src/MinStack');

let ms = new MinStack();
ms.push(17);
ms.push(12);
ms.push(31);
console.log(ms.getMin()); //12
ms.pop();
ms.pop();
ms.pop();
console.log(ms.getMin()); //null
ms.push(19);
ms.push(21);
console.log(ms.getMin()); //19
ms.push(3);
console.log(ms.getMin()); //3
ms.pop();
ms.pop();
console.log(ms.getMin()); //19
