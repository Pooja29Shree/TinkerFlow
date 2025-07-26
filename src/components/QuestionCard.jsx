import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionCard({ question, handleAnswer, score, questionNumber, totalQuestions }) {
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
      <p className="score">Current Score: {score}</p>
    </motion.div>
  );
}
