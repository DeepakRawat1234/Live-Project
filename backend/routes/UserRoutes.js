import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// ================= Signup =================
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) 
      return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password });
    await newUser.save();  // Creates DB & collection automatically if not exists

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ================= Login =================
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) 
      return res.status(400).json({ message: 'User not found' });

    if (user.password !== password)  // For now plain text, later hash with bcrypt
      return res.status(400).json({ message: 'Invalid password' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
