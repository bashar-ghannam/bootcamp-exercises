people_info = [
  {
    name: 'guido',
    profession: 'bungalow builder',
    age: 17,
    country: 'canaland',
    city: 'sydurn',
    catchphrase: 'what a piece of wood!',
  },
  {
    name: 'petra',
    profession: 'jet plane mechanic',
    age: 31,
    country: 'greenmark',
    city: 'bostork',
    catchphrase: "that's my engine, bub",
  },
  {
    name: 'damian',
    profession: 'nursery assistant',
    age: 72,
    country: 'zimbia',
    city: 'bekyo',
    catchphrase: 'with great responsibility comes great power',
  },
];
const capitalize = function (str) {
  let capitalizedStr = '';
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1); //add the rest of str normallyreturn capitalizedStr
  return capitalizedStr;
};

function getAge(age) {
  if (age < 21) {
    return 'Underage';
  } else if (age > 55) {
    return '+55';
  }
  return age;
}
const getSummary = function (person) {
  let summary = '';
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} from `;
  const arr = person.profession.split(' ');
  arr.map((item) => {
    summary += capitalize(item) + '';
  });
  summary +=
    capitalize(person.city) +
    ', ' +
    capitalize(person.country) +
    '. ' +
    capitalize(person.name) +
    ' loves to say "'; //call function for country + city
  summary += capitalize(person.catchphrase) + '"'; //call function for catchphrasereturn summary
  return summary;
};
console.log(getSummary(people_info[0]));
console.log(getSummary(people_info[1]));
console.log(getSummary(people_info[2]));
