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
      const module = await import(`../data/${currentLanguageId}/quizQuestions.js`);
      const levelKey = `level${currentLevelId}`;
      setQuestions(module.default[levelKey] || []);
      setStarted(true);
    } catch (err) {
      alert('Failed to load quiz questions.');
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
        Q{questionNumber} of {totalQuestions}: {question.question}
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

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setCompleted(true);
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
                <strong>Q{idx + 1}:</strong> {q.question} <br />
                ✅ Correct Answer: <span style={{ color: "green" }}>{q.answer}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}