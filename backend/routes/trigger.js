const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Claim = require('../models/Claim');

// Helper: generate a fake transaction ID
const generateTxnId = () =>
  'TXN' + Math.random().toString(36).substring(2, 10).toUpperCase();

// Helper: mock fraud check
const fraudCheck = (location) => {
  // Hardcoded valid for demo; in production this uses multi-signal ML scoring
  if (location === 'valid') return { passed: true, result: 'Passed' };
  return { passed: false, result: 'Failed' };
};

// POST /api/trigger-event
router.post('/trigger-event', async (req, res) => {
  try {
    const { userId, triggerType = 'Rain' } = req.body;

    if (!userId) return res.status(400).json({ message: 'userId is required.' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    if (!user.planActivated) {
      return res.status(400).json({ message: 'No active plan. Please select a plan first.' });
    }

    // ── Simulated conditions ──────────────────────────────────────
    const rain        = true;
    const user_active = true;
    const location    = 'valid';           // hardcoded for demo
    // ─────────────────────────────────────────────────────────────

    // Business rule: only create claim if both conditions met
    if (!rain || !user_active) {
      return res.json({ message: 'Conditions not met. No claim created.' });
    }

    // Mock fraud check
    const fraud = fraudCheck(location);
    const claimStatus = fraud.passed ? 'Approved' : 'Under Review';

    // Fixed payout amount for demo
    const PAYOUT_AMOUNT = 170;

    // Create claim
    const claim = new Claim({
      userId,
      triggerType,
      amount: PAYOUT_AMOUNT,
      status: claimStatus,
      location,
      fraudCheck: fraud.result,
    });

    if (fraud.passed) {
      // Simulate instant payout
      const txnId = generateTxnId();
      claim.payoutStatus  = 'Paid';
      claim.transactionId = txnId;
      claim.paidAt        = new Date();
    }

    await claim.save();

    // Mark rain simulated on user
    user.rainSimulated = true;
    await user.save();

    res.json({
      message:       fraud.passed ? `💸 ₹${PAYOUT_AMOUNT} credited to ${user.upiId}` : '⚠️ Claim under review',
      triggerType,
      claimId:       claim._id,
      status:        claim.status,
      amount:        claim.amount,
      payoutStatus:  claim.payoutStatus,
      transactionId: claim.transactionId,
      paidAt:        claim.paidAt,
      fraudCheck:    fraud.result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// GET /api/claims/:userId
router.get('/claims/:userId', async (req, res) => {
  try {
    const claims = await Claim.find({ userId: req.params.userId }).sort({ timestamp: -1 });
    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
