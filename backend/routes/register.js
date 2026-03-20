const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/register
router.post('/register', async (req, res) => {
  try {
    const { name, phone, city, upiId } = req.body;

    if (!name || !phone || !city || !upiId) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if phone already registered
    const existing = await User.findOne({ phone });
    if (existing) {
      return res.status(409).json({ message: 'Phone already registered.', userId: existing._id });
    }

    const user = new User({ name, phone, city, upiId });
    await user.save();

    res.status(201).json({
      message: '✅ Registration successful!',
      userId: user._id,
      name: user.name,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
