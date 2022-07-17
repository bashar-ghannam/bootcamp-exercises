let users = require('./users').users;

const printInfo = function (user) {
  console.log(
    `${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`
  );
};

users.forEach(printInfo);
