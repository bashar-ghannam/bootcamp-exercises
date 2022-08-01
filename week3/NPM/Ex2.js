var { faker } = require('@faker-js/faker');

let users = [];
const makeHuman = function (number) {
  for (let i = 0; i < number; i++) {
    users.push({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      Vehicle: faker.vehicle.vehicle(),
      Address: faker.address.city(),
    });
  }
};

makeHuman(2);
console.log(users);
