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
} = require('../middlewares/quizMiddleware');

router.get(
  '/questions/:subject/:level',
  validateQuizParams,
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