// controllers/quizController.js
const Question = require('../models/Questions');
const Submissiondata = require('../models/Submissiondata');
const Leveldata = require('../models/Leveldata');

// Get questions for a specific subject and level
const getQuestions = async (req, res) => {
  try {
    const { subject, level } = req.params;
    
    // Validate subject and level
    if (!subject || !level) {
      return res.status(400).json({
        success: false,
        message: 'Subject and level are required'
      });
    }

    const questions = await Question.find({ 
      subject: subject.toLowerCase(), 
      level: parseInt(level) 
    }).select('-correctAnswer -explanation'); // Hide correct answers from frontend

    if (questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No questions found for this subject and level'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        questions,
        total: questions.length,
        subject,
        level: parseInt(level)
      }
    });

  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching questions'
    });
  }
};

// Submit quiz results
const submitQuizResult = async (req, res) => {
  try {
    const { 
      username, 
      subject, 
      level, 
      answers, 
      score, 
      totalQuestions 
    } = req.body;

    // Validate required fields
    if (!username || !subject || !level || !answers || score === undefined) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: username, subject, level, answers, score'
      });
    }

    // Get correct answers for validation
    const questions = await Question.find({ 
      subject: subject.toLowerCase(), 
      level: parseInt(level) 
    });

    if (questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Questions not found for validation'
      });
    }

    // Process answers and calculate actual score
    let calculatedScore = 0;
    const processedAnswers = [];

    answers.forEach((answer, index) => {
      const question = questions[index];
      if (question) {
        const isCorrect = question.correctAnswer === answer.selectedOption;
        if (isCorrect) calculatedScore++;

        processedAnswers.push({
          questionId: question._id.toString(),
          selectedOption: answer.selectedOption,
          correctOption: question.correctAnswer
        });
      }
    });

    // Calculate percentage and generate feedback
    const percentage = Math.round((calculatedScore / questions.length) * 100);
    const passed = percentage >= 60;
    
    let feedback;
    if (percentage >= 90) {
      feedback = "Excellent! Outstanding performance!";
    } else if (percentage >= 80) {
      feedback = "Very Good! Great job!";
    } else if (percentage >= 60) {
      feedback = "Good! You passed the quiz.";
    } else {
      feedback = "Keep practicing! Better luck next time.";
    }

    // Check if user has already submitted this quiz
    const existingSubmission = await Submissiondata.findOne({
      username: username.toLowerCase(),
      subject: subject.toLowerCase(),
      level: parseInt(level)
    });

    let submission;
    if (existingSubmission) {
      // Update existing submission
      existingSubmission.score = calculatedScore;
      existingSubmission.answers = processedAnswers;
      existingSubmission.feedback = feedback;
      existingSubmission.submittedOn = new Date();
      existingSubmission.attemps = (existingSubmission.attemps || 1) + 1;
      
      submission = await existingSubmission.save();
    } else {
      // Create new submission
      submission = new Submissiondata({
        username: username.toLowerCase(),
        subject: subject.toLowerCase(),
        level: parseInt(level),
        score: calculatedScore,
        answers: processedAnswers,
        feedback,
        attemps: 1
      });
      
      submission = await submission.save();
    }

    // Update user level if passed
    if (passed) {
      const currentLevelData = await Leveldata.findOne({
        username: username.toLowerCase(),
        subject: subject.toLowerCase()
      });

      if (!currentLevelData) {
        // Create new level entry
        await new Leveldata({
          username: username.toLowerCase(),
          subject: subject.toLowerCase(),
          level: parseInt(level)
        }).save();
      } else if (currentLevelData.level < parseInt(level)) {
        // Update to higher level
        currentLevelData.level = parseInt(level);
        await currentLevelData.save();
      }
    }

    res.status(200).json({
      success: true,
      message: 'Quiz result submitted successfully',
      data: {
        score: calculatedScore,
        totalQuestions: questions.length,
        percentage,
        passed,
        feedback,
        attempts: submission.attemps,
        nextLevel: passed ? parseInt(level) + 1 : parseInt(level)
      }
    });

  } catch (error) {
    console.error('Error submitting quiz result:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while submitting quiz result'
    });
  }
};

// Get user's quiz history
const getQuizHistory = async (req, res) => {
  try {
    const { username } = req.params;
    
    if (!username) {
      return res.status(400).json({
        success: false,
        message: 'Username is required'
      });
    }

    const submissions = await Submissiondata.find({ 
      username: username.toLowerCase() 
    }).sort({ submittedOn: -1 });

    res.status(200).json({
      success: true,
      data: submissions
    });

  } catch (error) {
    console.error('Error fetching quiz history:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching quiz history'
    });
  }
};

// Get user's current levels
const getUserLevels = async (req, res) => {
  try {
    const { username } = req.params;
    
    if (!username) {
      return res.status(400).json({
        success: false,
        message: 'Username is required'
      });
    }

    const levels = await Leveldata.find({ 
      username: username.toLowerCase() 
    });

    res.status(200).json({
      success: true,
      data: levels
    });

  } catch (error) {
    console.error('Error fetching user levels:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching user levels'
    });
  }
};

module.exports = {
  getQuestions,
  submitQuizResult,
  getQuizHistory,
  getUserLevels
};