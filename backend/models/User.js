const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  phone:   { type: String, required: true, unique: true, trim: true },
  city:    { type: String, required: true, trim: true },
  upiId:   { type: String, required: true, trim: true },

  // Plan details
  selectedPlan:  { type: String, enum: ['Basic', 'Standard', 'Full'], default: null },
  planPrice:     { type: Number, default: 0 },
  planCoverage:  { type: Number, default: 0 },
  planActivated: { type: Boolean, default: false },
  planActivatedAt: { type: Date, default: null },

  // Risk state
  rainSimulated: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
