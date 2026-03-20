const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Claim = require('../models/Claim');

// GET /api/dashboard/:userId
router.get('/dashboard/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const claims = await Claim.find({ userId: user._id }).sort({ timestamp: -1 });

    const totalPayout = claims
      .filter((c) => c.payoutStatus === 'Paid')
      .reduce((sum, c) => sum + c.amount, 0);

    // AI Risk Indicator — simple logic
    const riskLevel = user.rainSimulated ? 'HIGH' : 'LOW';

    res.json({
      user: {
        name:          user.name,
        phone:         user.phone,
        city:          user.city,
        upiId:         user.upiId,
        selectedPlan:  user.selectedPlan,
        planPrice:     user.planPrice,
        planCoverage:  user.planCoverage,
        planActivated: user.planActivated,
      },
      totalPayout,
      riskLevel,
      claimCount: claims.length,
      claims,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
