// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const {
  getQuestions,
  submitQuizResult,
  getQuizHistory,
  getUserLevels
} = require('../controllers/quizController');
const {
  validateQuizParams,
  validateSubmission,
  checkLevelEligibility,
  rateLimiter,
  validateUsername
} = require('../middleware/quizMiddleware');

router.get(
  '/questions/:subject/:level',
  validateQuizParams,
  checkLevelEligibility,
  getQuestions
);

router.post(
  '/submit',
  rateLimiter,
  validateSubmission,
  checkLevelEligibility,
  submitQuizResult
);

router.get(
  '/history/:username',
  validateUsername,
  getQuizHistory
);


router.get(
  '/levels/:username',
  validateUsername,
  getUserLevels
);

module.exports = router;