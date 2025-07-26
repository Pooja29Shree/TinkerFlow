import React from 'react';
import { motion } from 'framer-motion';

export default function Home({ onStart }) {
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
        <p className="home-subtitle">Boost your brainpower in C and Python!</p>
        <p className="home-subtitle">Compete, conquer, and become a code master in C and Python!</p>
        <button className="start-button" onClick={onStart}>🚀 Start Quiz</button>
      </motion.div>
    </motion.div>
  );
}
