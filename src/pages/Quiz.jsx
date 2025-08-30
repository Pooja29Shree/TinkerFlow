import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Capitalize the first letter of a string
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Home Component
export default function QuizHome({ currentLanguageId, currentLevelId }) {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);

  const onRetake = () => {
    setStarted(false);
    setQuestions(null);
  };

  const handleStartQuiz = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/quiz/questions/${currentLanguageId}/${currentLevelId}`);
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setQuestions(data.data.questions);
        setStarted(true);
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Failed to load quiz questions.');
      console.error(err);
    }
    setLoading(false);
  };

  if (started && questions) {
    return <Quiz questions={questions} currentLanguageId={currentLanguageId} onRetake={onRetake} currentLevelId={currentLevelId} />;
  }

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="home-card"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home-title">⚔️ Tech Titans: Quiz Arena</h1>
        <p className="home-subtitle">🚀 You are about to start <strong>{capitalize(currentLanguageId)} Level {currentLevelId}</strong></p>
        <p className="home-subtitle">Compete, conquer, and become a code master in {capitalize(currentLanguageId)}!</p>
        <button className="start-button" onClick={handleStartQuiz} disabled={loading}>
          {loading ? 'Loading...' : "🚀 Start Level"}
        </button>
      </motion.div>
    </motion.div>
  );
}

// QuestionCard Component
function QuestionCard({ question, handleAnswer, questionNumber, totalQuestions }) {
  return (
    <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="question">
        Q{questionNumber} of {totalQuestions}: {question.questionText}  {/* <-- change from question.question */}
      </h2>
      <div className="options">
        {question.options.map((opt, idx) => (
          <button key={idx} className="option-btn" onClick={() => handleAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>

    </motion.div>
  );
}

// Quiz Component
function Quiz({ questions, currentLanguageId, onRetake, currentLevelId }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = async (selected) => {
    const currentQuestion = questions[current];
    if (selected === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);

      try {
        const response = await fetch('http://localhost:5000/api/quiz/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'YOUR_USERNAME',  // Replace dynamically
            subject: currentLanguageId,
            level: currentLevelId,
            answers: questions.map(q => ({
              questionId: q._id,
              selectedOption: q.selectedAnswer || null
            })),
            score,
            totalQuestions: questions.length
          })
        });

        const result = await response.json();
        console.log('Quiz submitted:', result);
      } catch (err) {
        console.error('Failed to submit quiz result:', err);
      }
    }
  };
  const fetchHistory = async (username) => {
  try {
    const response = await fetch(`http://localhost:5000/api/quiz/history/${username}`);
    const data = await response.json();
    if (data.success) {
      console.log('Quiz History:', data.data);
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
  }
};
  const fetchLevels = async (username) => {
  try {
    const response = await fetch(`http://localhost:5000/api/quiz/levels/${username}`);
    const data = await response.json();
    if (data.success) {
      console.log('User Levels:', data.data);
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
  }
};


  if (completed) {
    return <Result score={score} total={questions.length} questions={questions} currentLanguageId={currentLanguageId} onRetake={onRetake} currentLevelId={currentLevelId} />;
  }

  return (
    <div className="quiz-container">
      <QuestionCard
        question={questions[current]}
        handleAnswer={handleAnswer}
        questionNumber={current + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
}

// Result component
function Result({ score, total, questions, currentLanguageId, onRetake, currentLevelId }) {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 60;
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="result">
      <h1>🎯 Quiz Completed!</h1>
      <p><strong>Total Questions:</strong> {total}</p>
      <p><strong>Your Score:</strong> {score}</p>
      <p><strong>Percentage:</strong> {percentage}%</p>

      <h2 style={{ color: passed ? 'lightgreen' : 'salmon' }}>
        {passed ? "✅ Qualified for Next Level!" : "❌ Not Qualified"}
      </h2>

      <div className="result-actions">
        <button className="retake-btn" onClick={onRetake}>Retake Quiz</button>

        <button className="next-btn" onClick={() => navigate(`/online/${currentLanguageId}/${currentLevelId}`)}>
          Back to Content
        </button>

        <button className="review-btn" onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? "❌ Hide Answers" : "Show Correct Answers"}
        </button>
      </div>

      {showAnswers && (
        <div className="answers-review">
          <h3>📘 Correct Answers:</h3>
          <ul>
            {questions.map((q, idx) => (
              <li key={idx} style={{ marginBottom: "10px" }}>
                <strong>Q{idx + 1}:</strong> {q.questionText} <br />  {/* <-- questionText */}
                ✅ Correct Answer: <span style={{ color: "green" }}>{q.correctAnswer}</span> {/* or q.answer if mapped */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 