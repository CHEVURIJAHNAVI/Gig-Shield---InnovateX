const express = require('express');
const router = express.Router();
const User = require('../models/User');

const PLANS = {
  Basic:    { price: 30,  coverage: 500  },
  Standard: { price: 55,  coverage: 1000 },
  Full:     { price: 90,  coverage: 2000 },
};

// POST /api/select-plan
router.post('/select-plan', async (req, res) => {
  try {
    const { userId, plan } = req.body;

    if (!userId || !plan) {
      return res.status(400).json({ message: 'userId and plan are required.' });
    }
    if (!PLANS[plan]) {
      return res.status(400).json({ message: 'Invalid plan. Choose Basic, Standard, or Full.' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    user.selectedPlan   = plan;
    user.planPrice      = PLANS[plan].price;
    user.planCoverage   = PLANS[plan].coverage;
    user.planActivated  = true;
    user.planActivatedAt = new Date();
    await user.save();

    res.json({
      message: `🎉 Plan Activated! You are now covered under ${plan} Shield.`,
      plan,
      price: PLANS[plan].price,
      coverage: PLANS[plan].coverage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
