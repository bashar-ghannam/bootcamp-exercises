let users = require('./users').users;

console.log(
  users.map((user) => ({
    email: user.email,
    companyName: user.company.name,
  }))
);
