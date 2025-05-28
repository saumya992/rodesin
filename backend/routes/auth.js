const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register route
router.post('/register', async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;

  if (!firstname || !lastname || !email || !password || !role) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    res.status(201).json({ message: `Registration successful as ${role}` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(400).json({ message: 'Invalid login' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid login' });
    }

    res.status(200).json({ message: `Login successful as ${role}` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
