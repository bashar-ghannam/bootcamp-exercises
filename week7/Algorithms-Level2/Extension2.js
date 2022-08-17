const findClosest = function (pizzaLocations, homeLocation) {
  let closest = Infinity;
  let closestLocation = null;
  for (const location of pizzaLocations) {
    let currentClosest = Math.sqrt(
      (location.x - homeLocation.x) * (location.x - homeLocation.x) +
        (location.y - homeLocation.y) * (location.y - homeLocation.y)
    );
    if (closest > currentClosest) {
      closest = currentClosest;
      closestLocation = location;
    }
  }
  console.log(closestLocation);
};

let pizzaLocations = [
  { x: 6, y: 12 },
  { x: 3, y: 1 },
  { x: 9, y: 0 },
  { x: 4, y: 10 },
];

let homeLocation = { x: 4, y: 2 };

findClosest(pizzaLocations, homeLocation); // should return {x: 3, y: 1}
