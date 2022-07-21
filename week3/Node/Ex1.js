const countries = [
  {
    name: 'Gentina',
    population: 30000,
    landmarks: [
      { name: 'Big bank', tourismCount: 100 },
      { name: 'Wild coyotes', tourismCount: 12 },
      { name: 'Purple blooming fields', tourismCount: 3 },
      { name: 'Turnip Gardens', tourismCount: 1500 },
    ],
  },
  {
    name: 'Ance',
    population: 155000,
    landmarks: [
      { name: 'Zumba Plaza', tourismCount: 240 },
      { name: 'Woodcutting Workshop', tourismCount: 16 },
      { name: 'Lava Pits', tourismCount: 890 },
    ],
  },
  {
    name: 'Noxyland',
    population: 80000,
    landmarks: [],
  },
  {
    name: 'Bouti',
    population: 410000,
    landmarks: [
      { name: 'Underground Labyrinths', tourismCount: 'Unknown' },
      { name: 'Dolphinarium', tourismCount: 3400 },
      { name: 'Astronomy Bunker', tourismCount: 250 },
      { name: 'Zoology Tower', tourismCount: 1200 },
    ],
  },
  {
    name: 'Rea',
    population: 827000,
  },
  {
    name: 'Golia',
    population: 54000,
    landmarks: [{ name: 'Horse Heritage Site', tourismCount: 920 }],
  },
];

//Find the country with the highest population
//It should print "Rea" in the end
let biggestCountry = '';
let biggestPop = 0;
for (let c of countries) {
  if (c.population > biggestPop) {
    biggestPop = c.population;
    biggestCountry = c.name;
  }
}
console.log(biggestCountry);

//Console log the name of all the touristic sites that have more than 1000 visitors
//These should be: the Zoology Tower, the Dolphinarium, and the Turnip Gardens
//Hint: the `continue` keyword will allow you to skip over an element in an array
//Alternative hint: remember the || operator
const popularAttractions = [];

for (let c of countries) {
  let landmarks = c.landmarks;
  for (let l in landmarks) {
    if (landmarks[l].tourismCount > 1000) {
      popularAttractions.push(landmarks[l].name);
    }
  }
}
console.log(popularAttractions);
