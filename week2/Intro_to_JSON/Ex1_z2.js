const fs = require('fs');

try {
  let jsonFile = fs.readFileSync('./index.json', 'utf-8');
  jsonFile = JSON.parse(jsonFile);
  let obj = {
    name: 'garlic powder',
    count: 2,
  };
  jsonFile.ingredients.push(obj);
  jsonFile.calories = 250;
  jsonFile.healthy = true;
  jsonFile.directions =
    'Cut potatoes into half inch thick slices.,' + jsonFile.directions;
  console.log(
    jsonFile.ingredients.filter((i) => i.name == 'garlic powder')[0].count
  ); //should print 2
  console.log(jsonFile.healthy); //should print true
  console.log(jsonFile.calories); //should print 250
  console.log(jsonFile.directions[0]); //should print "Cut potatoes into half inch thick slices"

  const data = JSON.stringify(jsonFile);

  fs.writeFile('./index.json', data, (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('JSON data is written to the file successfully');
    }
  });
} catch (error) {
  console.log(error);
}
