// controllers/authController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Login Controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required'
      });
    }

    // Find user by username or email
    const user = await User.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: username.toLowerCase() }
      ]
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if user is active
    if (user.status !== 'active') {
      return res.status(403).json({
        success: false,
        message: 'Account is not active. Please contact support.'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Store user session
    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    };

    // Remove password from response
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      profileImageUrl: user.profileImageUrl,
      isAdmin: user.isAdmin,
      status: user.status,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin
    };

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: userResponse
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};


module.exports = {
  loginUser
};