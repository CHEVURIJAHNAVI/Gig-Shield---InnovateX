const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  userId:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  triggerType: { type: String, required: true },   // e.g. "Rain"
  amount:      { type: Number, required: true },   // e.g. 170
  status:      { type: String, enum: ['Approved', 'Under Review'], default: 'Approved' },

  // Payout
  payoutStatus:  { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
  transactionId: { type: String, default: null },
  paidAt:        { type: Date,   default: null },

  // Fraud check result
  fraudCheck: { type: String, default: 'Passed' },
  location:   { type: String, default: 'valid' },

  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Claim', ClaimSchema);
