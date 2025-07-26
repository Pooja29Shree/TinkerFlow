import React from 'react';

export default function Result({ score, total }) {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 60;

  return (
    <div className="result">
      <h1>🎯 Quiz Completed!</h1>
      <p><strong>Total Questions:</strong> {total}</p>
      <p><strong>Your Score:</strong> {score}</p>
      <p><strong>Percentage:</strong> {percentage}%</p>

      <h2 style={{ color: passed ? 'lightgreen' : 'salmon' }}>
        {passed ? "✅ Qualified for Next Level!" : "❌ Not Qualified"}
      </h2>
    </div>
  );
}
