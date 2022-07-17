let users = require('./users').users;

console.log(users.map((user) => user.name).filter((name) => name[0] == 'C'));
