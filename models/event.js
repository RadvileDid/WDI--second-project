const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String},
  // date: { type: Date},
  description: { type: String},
  address: { type: String},
  industry: { type: String},
  image: { type: String }
});

module.exports = mongoose.model('Event', eventSchema);
