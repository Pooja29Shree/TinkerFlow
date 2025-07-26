import React, { useState } from 'react';
import Quiz from './components/Quize';
import Home from './components/Home';
import './index.css';
import cLogo from './assets/C.png';
import pythonLogo from './assets/python.png';

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">

      {/* PNG Background Logos */}
      <img src={cLogo} className="bg-logo c-logo" alt="C Logo" />
      <img src={pythonLogo} className="bg-logo python-logo" alt="Python Logo" />

      {!started ? <Home onStart={() => setStarted(true)} /> : <Quiz />}
    </div>
  );
}
