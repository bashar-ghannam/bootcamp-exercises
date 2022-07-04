//Ex 1 + 2
const names = ['Ashley', 'Donovan', 'Lucas'];
const ages = [23, 47, 18];
const people = [];
for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}

for (const item of people) {
  console.log(`${item.name} is ${item.age} years old`);
}
