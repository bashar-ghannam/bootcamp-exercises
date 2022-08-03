const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const solarSystemSchema = new Schema({
  starName: String,
  planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
});

const planetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: 'solarSystem' },
  visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }],
});

const visitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
});

const Planet = mongoose.model('Planet', planetSchema);
const Visitor = mongoose.model('Visitor', visitorSchema);
const SolarSystem = mongoose.model('SolarSystem', solarSystemSchema);

module.exports = { Planet, Visitor, SolarSystem };
