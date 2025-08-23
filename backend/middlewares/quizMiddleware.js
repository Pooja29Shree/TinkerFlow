// middleware/quizMiddleware.js
const Question = require('../models/Questions');
const Leveldata = require('../models/Leveldata');

// Validate quiz parameters
const validateQuizParams = (req, res, next) => {
  const { subject, level } = req.params;
  
  // Check if subject and level are provided
  if (!subject || !level) {
    return res.status(400).json({
      success: false,
      message: 'Subject and level parameters are required'
    });
  }

  // Validate level is a positive integer
  const levelNum = parseInt(level);
  if (isNaN(levelNum) || levelNum < 1) {
    return res.status(400).json({
      success: false,
      message: 'Level must be a positive integer'
    });
  }

  // Validate subject format (basic validation)
  if (typeof subject !== 'string' || subject.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Subject must be a valid string with at least 2 characters'
    });
  }

  // Add validated values to req object
  req.validatedParams = {
    subject: subject.toLowerCase().trim(),
    level: levelNum
  };

  next();
};

// Validate submission data
const validateSubmission = (req, res, next) => {
  const { username, subject, level, answers, score } = req.body;

  // Check required fields
  if (!username || !subject || !level || !answers || score === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: username, subject, level, answers, score'
    });
  }

  // Validate username
  if (typeof username !== 'string' || username.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Username must be a valid string with at least 2 characters'
    });
  }

  // Validate subject
  if (typeof subject !== 'string' || subject.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Subject must be a valid string with at least 2 characters'
    });
  }

  // Validate level
  const levelNum = parseInt(level);
  if (isNaN(levelNum) || levelNum < 1) {
    return res.status(400).json({
      success: false,
      message: 'Level must be a positive integer'
    });
  }

  // Validate answers array
  if (!Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Answers must be a non-empty array'
    });
  }

  // Validate score
  const scoreNum = parseInt(score);
  if (isNaN(scoreNum) || scoreNum < 0) {
    return res.status(400).json({
      success: false,
      message: 'Score must be a non-negative integer'
    });
  }

  // Validate each answer object
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (!answer || typeof answer.selectedOption === 'undefined') {
      return res.status(400).json({
        success: false,
        message: `Answer at index ${i} must have selectedOption property`
      });
    }
  }

  // Add validated values to req object
  req.validatedSubmission = {
    username: username.toLowerCase().trim(),
    subject: subject.toLowerCase().trim(),
    level: levelNum,
    answers,
    score: scoreNum
  };

  next();
};

// Check if user is eligible for the level
const checkLevelEligibility = async (req, res, next) => {
  try {
    const { username, subject, level } = req.validatedSubmission || req.validatedParams || req.body;
    
    if (level === 1) {
      // Everyone can access level 1
      return next();
    }

    // Check if user has completed previous level
    const userLevel = await Leveldata.findOne({
      username: username.toLowerCase(),
      subject: subject.toLowerCase()
    });

    if (!userLevel || userLevel.level < level - 1) {
      return res.status(403).json({
        success: false,
        message: `You need to complete level ${level - 1} first to access level ${level}`,
        currentLevel: userLevel ? userLevel.level : 0,
        requiredLevel: level - 1
      });
    }

    next();
  } catch (error) {
    console.error('Error checking level eligibility:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while checking level eligibility'
    });
  }
};

// Rate limiting middleware (basic implementation)
const rateLimiter = (() => {
  const attempts = new Map();
  const WINDOW_SIZE = 15 * 60 * 1000; // 15 minutes
  const MAX_ATTEMPTS = 10; // Max 10 submissions per 15 minutes

  return (req, res, next) => {
    const key = req.ip || 'unknown';
    const now = Date.now();
    
    if (!attempts.has(key)) {
      attempts.set(key, []);
    }
    
    const userAttempts = attempts.get(key);
    
    // Remove old attempts outside the window
    const validAttempts = userAttempts.filter(time => now - time < WINDOW_SIZE);
    attempts.set(key, validAttempts);
    
    if (validAttempts.length >= MAX_ATTEMPTS) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil((validAttempts[0] + WINDOW_SIZE - now) / 1000)
      });
    }
    
    // Add current attempt
    validAttempts.push(now);
    attempts.set(key, validAttempts);
    
    next();
  };
})();

// Validate username parameter
const validateUsername = (req, res, next) => {
  const { username } = req.params;
  
  if (!username || typeof username !== 'string' || username.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Valid username parameter is required'
    });
  }

  req.validatedUsername = username.toLowerCase().trim();
  next();
};

module.exports = {
  validateQuizParams,
  validateSubmission,
  checkLevelEligibility,
  rateLimiter,
  validateUsername
};