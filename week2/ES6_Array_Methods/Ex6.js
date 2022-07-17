let users = require('./users').users;

console.log(
  users.find((user) => user.address.suite == 'Apt. 950').company.name
);
