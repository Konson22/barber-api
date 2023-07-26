const User = require("../models/user");
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: err });
  }
}



// Sign-up route
const registerUser = async (req, res) => {
  const { username, email, phoneNumber, location, password } = req.body;
  try {

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({
      username,
      phoneNumber,
      imageUrl:req.imageUrl,
      location,
      email,
      password: hashedPassword,
    });
    // Save the user to the database
    await newUser.save();
    // Respond with success message
    res.status(201).json({ 
      message: 'User created successfully',
      data:{
        _id:newUser._id,
        username:newUser.username,
        imageUrl:newUser.imageUrl,
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}




module.exports = { loginUser, registerUser }

