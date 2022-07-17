let users = require('./users').users;

console.log(users.filter((user) => user.address.zipcode[0] == 5));
