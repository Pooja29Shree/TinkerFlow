const express = require('express');
const router = express.Router();
const { getSubjectDetails } = require('../controllers/subjectController');

router.post('/get-details', getSubjectDetails); // Fetch content by subject + level

module.exports = router;
