const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {type: String, required: true },
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const eventSchema = new mongoose.Schema({
  title: { type: String},
  // date: { type: Date},
  description: { type: String},
  address: { type: String},
  industry: { type: String},
  image: { type: String },
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  comments: [ commentSchema ],
  attendants: [ { type: mongoose.Schema.ObjectId, ref: 'User'} ]
});

eventSchema.methods.belongsTo = function eventBelongsTo(user) {
  return this.createdBy.id === user._id;
};


module.exports = mongoose.model('Event', eventSchema);
