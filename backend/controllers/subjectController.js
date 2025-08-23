const Subject = require('../models/Subject');

const getSubjectDetails = async (req, res, next) => {
  try {
    const { subject, level } = req.body; // frontend sends these

    if (!subject || !level) {
      return res.status(400).json({ message: 'Subject and level are required' });
    }

    const subjectData = await Subject.findOne({ subject, level });

    if (!subjectData) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    // Send only content, pdfLink, videoUrl
    const { content, pdfLink, videoUrl } = subjectData;
    res.status(200).json({ content, pdfLink, videoUrl });
  } catch (err) {
    next(err);
  }
};

module.exports = { getSubjectDetails };
