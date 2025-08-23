const express = require('express');
const router = express.Router();
const { getSubjectDetails } = require('../controllers/subjectController');

router.post('/get-details', getSubjectDetails);

module.exports = router;
