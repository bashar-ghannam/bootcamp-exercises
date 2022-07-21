var validator = require('validator');
console.log(validator.isEmail('shoobert@dylan'));
console.log(validator.isMobilePhone('786-329-9958', 'en-US'));
let blacklist = ['!', '?', '.', '@', '~', ',', "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist));
