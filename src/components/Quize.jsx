import React, { useState } from 'react';
import questions from '../data/questions';
import QuestionCard from './QuestionCard';
import Result from './Result';

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (selected) => {
    const isCorrect = questions[currentQIndex].answer === selected;
    setScore(prev => isCorrect ? prev + 1 : prev);

    const nextIndex = currentQIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQIndex(nextIndex);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {!isCompleted ? (
        <QuestionCard
          question={questions[currentQIndex]}
          handleAnswer={handleAnswer}
          score={score}
          questionNumber={currentQIndex + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
}
