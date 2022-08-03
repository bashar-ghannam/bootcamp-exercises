const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/solarSystem', { useNewUrlParser: true });

var { Planet, Visitor, SolarSystem } = require('./server/models/models');

// let s1 = new SolarSystem({
//   starName: 'Milky Way',
//   planets: [],
// });

// let p1 = new Planet({
//   name: 'Earth',
//   system: s1,
//   visitors: [],
// });

// let p2 = new Planet({
//   name: 'Mars',
//   system: s1,
//   visitors: [],
// });

// let v1 = new Visitor({
//   name: 'omar',
//   homePlanet: p1,
//   visitedPlanets: [],
// });

// let v2 = new Visitor({
//   name: "bashar",
//   homePlanet: p2,
//   visitedPlanets: [],
// });

// s1.planets.push(p1);
// s1.planets.push(p2);

// p2.visitors.push(v1);
// v1.visitedPlanets.push(p2);

// p1.visitors.push(v2);
// v2.visitedPlanets.push(p1);

// s1.save();
// p1.save();
// p2.save();
// v1.save();
// v2.save();

// Planet.find({}, function (err, plantes) {
//   console.log(plantes);
// });

// Planet.find({})
//   .populate('visitors')
//   .exec(function (err, planet) {
//     console.log(planet[0].visitors);
//   });

// let ss = new SolarSystem({
//   planets: [],
//   starName: 'Soya Way',
// });

// let p1 = new Planet({
//   name: 'Earthy',
//   system: ss,
//   visitors: [],
// });

// let p2 = new Planet({
//   name: 'Marsy',
//   system: ss,
//   visitors: [],
// });

// let p3 = new Planet({
//   name: 'Uranusy',
//   system: ss,
//   visitors: [],
// });

// let v1 = new Visitor({
//   name: 'Mr mars',
//   homePlanet: p2,
//   visitedPlanets: [],
// });

// let v2 = new Visitor({
//   name: 'Mr Uranus',
//   homePlanet: p3,
//   visitedPlanets: [],
// });

// ss.planets.push(p1);
// ss.planets.push(p2);
// ss.planets.push(p3);

// v1.visitedPlanets.push(p3);
// v1.visitedPlanets.push(p1);

// p1.visitors.push(v1);
// p3.visitors.push(v1);

// v2.visitedPlanets.push(p1);
// p1.visitors.push(v2);

// ss.save();

// p1.save();
// p2.save();
// p3.save();

// v1.save();
// v2.save();

//Find a visitor's list of visited planets
// Visitor.findOne({})
//   .populate('visitedPlanets')
//   .exec(function (err, visitor) {
//     console.log(visitor.name + ' visited Planets :');
//     visitor.visitedPlanets.forEach((vp) => {
//       console.log(vp.name);
//     });
//   });

//Find all the visitors on a planet
// Planet.findOne({})
//   .populate('visitors')
//   .exec(function (err, planet) {
//     console.log(planet.name);
//     console.log('Visitors : ');
//     planet.visitors.forEach((vp) => {
//       console.log(vp.name);
//     });
//   });

//Find all the visitors in a system (subdocuments!)
// SolarSystem.findOne({})
//   .populate({
//     path: 'planets',
//     populate: {
//       path: 'visitors',
//     },
//   })
//   .exec(function (err, s) {
//     console.log(s.starName + ' : ');
//     s.planets.forEach((p) => {
//       console.log('  ' + p.name + ' : ');
//       p.visitors.forEach((vp) => {
//         console.log('    ' + vp.name);
//       });
//     });
//   });

// Find the name of the star in the system of a visitor’s home planet ** don't work
// Visitor.findOne({})
//   .populate({
//     path: 'homePlanet',
//     populate: {
//       path: 'system',
//     },
//   })
//   .exec(function (err, visitors) {
//     console.log(visitors.homePlanet);
//     // visitors.forEach((visitor) => {
//     //   console.log('Visitor name : ' + visitor.name);
//     //   console.log('Home Planet : ' + visitor.homePlanet.name);
//     //   // console.log('Solar System : ' +visitor.homePlanet);
//     // });
//   });

//Find a planet's system's star name as well as its visitors ** don't work
// Planet.findOne({})
//   .populate({
//     path: 'system visitors',
//     populate: {
//       path: 'homePlanet',
//     },
//   })
//   .exec(function (err, planet) {
//     planet.visitors.forEach((v) => console.log(v.homePlanet.name));
//   });
