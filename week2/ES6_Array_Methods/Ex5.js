let users = require('./users').users;

console.log(users.every((user) => user.address.city == 'South Christy'));
