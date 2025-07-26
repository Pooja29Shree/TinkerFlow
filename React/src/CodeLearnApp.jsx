import React, { useState, useEffect } from 'react';
import './App.css';

const CodeLearnApp = () => {
  // State management
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setCurrentPage('main');
    } else {
      setCurrentPage('login');
    }
  }, []);
  
  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'main':
        return <MainPage />;
      case 'language':
        return <LanguagePage />;
      case 'online':
        return <OnlinePage />;
      default:
        return <LoginPage />;
    }
  };

  // Language data
  const languages = {
    javascript: {
      name: 'JavaScript',
      levels: [
        { id: 1, title: 'Introduction to JavaScript', description: 'Basic syntax and concepts' },
        { id: 2, title: 'Variables and Data Types', description: 'Understanding different data types' },
        { id: 3, title: 'Functions and Scope', description: 'Creating reusable code blocks' },
        { id: 4, title: 'DOM Manipulation', description: 'Interacting with web pages' },
        { id: 5, title: 'Advanced JavaScript', description: 'ES6+ features and async programming' }
      ]
    },
    python: {
      name: 'Python',
      levels: [
        { id: 1, title: 'Python Basics', description: 'Syntax, variables, and basic operations' },
        { id: 2, title: 'Data Structures', description: 'Lists, dictionaries, and sets' },
        { id: 3, title: 'Control Flow', description: 'Loops and conditional statements' },
        { id: 4, title: 'Functions and Modules', description: 'Code organization and reusability' },
        { id: 5, title: 'Object-Oriented Programming', description: 'Classes and inheritance' }
      ]
    },
    java: {
      name: 'Java',
      levels: [
        { id: 1, title: 'Java Fundamentals', description: 'Basic syntax and structure' },
        { id: 2, title: 'Object-Oriented Programming', description: 'Classes, objects, and inheritance' },
        { id: 3, title: 'Collections Framework', description: 'Lists, maps, and data structures' },
        { id: 4, title: 'Exception Handling', description: 'Error management and debugging' },
        { id: 5, title: 'Advanced Java', description: 'Threads, streams, and best practices' }
      ]
    },
    cpp: {
      name: 'C++',
      levels: [
        { id: 1, title: 'C++ Basics', description: 'Syntax, variables, and basic I/O' },
        { id: 2, title: 'Pointers and Memory', description: 'Memory management concepts' },
        { id: 3, title: 'Object-Oriented C++', description: 'Classes and objects in C++' },
        { id: 4, title: 'Templates and STL', description: 'Generic programming and libraries' },
        { id: 5, title: 'Advanced C++', description: 'Performance optimization and best practices' }
      ]
    },
    html: {
      name: 'HTML/CSS',
      levels: [
        { id: 1, title: 'HTML Structure', description: 'Basic HTML elements and structure' },
        { id: 2, title: 'CSS Styling', description: 'Colors, fonts, and basic styling' },
        { id: 3, title: 'Layout Techniques', description: 'Flexbox and CSS Grid' },
        { id: 4, title: 'Responsive Design', description: 'Mobile-first web design' },
        { id: 5, title: 'Advanced CSS', description: 'Animations and modern CSS features' }
      ]
    },
    react: {
      name: 'React',
      levels: [
        { id: 1, title: 'React Basics', description: 'Components and JSX' },
        { id: 2, title: 'State and Props', description: 'Managing component data' },
        { id: 3, title: 'Hooks and Effects', description: 'Modern React patterns' },
        { id: 4, title: 'Routing and Navigation', description: 'Multi-page applications' },
        { id: 5, title: 'Advanced React', description: 'Context, optimization, and testing' }
      ]
    }
  };

  // Login Component
  const LoginPage = ({ setCurrentUser, setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const user = {
        name: username,
        email: `${username.toLowerCase()}@email.com`,
        initials: username.substring(0, 2).toUpperCase()
      };
      // Save user to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      setCurrentPage('main');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2>Login to CodeLearn</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>
    </div>
  );
};


  // Main Page Component
  const MainPage = () => {
    const languageCards = [
      { id: 'python', icon: '🐍', name: 'Python', desc: 'Perfect for beginners and data science' },
      { id: 'javascript', icon: 'JS', name: 'JavaScript', desc: 'Learn web development and modern programming' },
      { id: 'java', icon: '☕', name: 'Java', desc: 'Object-oriented programming fundamentals' },
      { id: 'cpp', icon: 'C++', name: 'C++', desc: 'System programming and performance' },
      { id: 'html', icon: '🌐', name: 'HTML/CSS', desc: 'Web design and structure' },
      { id: 'react', icon: '⚛️', name: 'React', desc: 'Modern web applications' }
    ];

    return (
      <div className="main-page">
        <div className="container">
          <div className="header">
            <div className="app-name">CodeLearn</div>
            <div className="user-logo" onClick={() => setShowUserModal(true)}>
              {currentUser?.initials}
            </div>
          </div>

          <div style={{textAlign: 'center', color: 'white', marginBottom: '20px'}}>
            <h2>Choose Your Programming Language</h2>
            <p>Select a language to start your learning journey</p>
          </div>

          <div className="languages-container">
            {languageCards.map(lang => (
              <div key={lang.id} className="language-card" onClick={() => openLanguage(lang.id)}>
                <div className="language-icon">{lang.icon}</div>
                <h3>{lang.name}</h3>
                <p>{lang.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Language Detail Page Component
  const LanguagePage = () => {
    const language = languages[currentLanguage];
    if (!language) return null;

    return (
      <div className="language-page">
        <div className="container">
          <div className="back-header">
            <button className="back-btn" onClick={() => setCurrentPage('main')}>← Go Back</button>
            <div className="user-logo" onClick={() => setShowUserModal(true)}>
              {currentUser?.initials}
            </div>
          </div>

          <div style={{textAlign: 'center', color: 'white', marginBottom: '20px'}}>
            <h2>{language.name} Levels</h2>
            <p>Choose your skill level and start learning</p>
          </div>

          <div className="levels-container">
            {language.levels.map(level => (
              <div key={level.id} className="level-card">
                <h4>Level {level.id}: {level.title}</h4>
                <p>{level.description}</p>
                <div className="level-actions">
                  <button className="action-btn online-btn" onClick={() => goOnline(level.id)}>
                    Go Online
                  </button>
                  <button className="action-btn download-btn" onClick={() => downloadLevel(level.id)}>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Online Learning Page Component
  const OnlinePage = () => {
    const language = languages[currentLanguage];
    const level = language?.levels.find(l => l.id === currentLevel);
    if (!level) return null;

    const textToSpeech = () => {
      const content = "Welcome to Programming! In this level, you'll learn the fundamentals of programming. We'll start with basic concepts and gradually build your understanding.";
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(content);
        speechSynthesis.speak(utterance);
      } else {
        alert('Text-to-speech not supported in your browser');
      }
    };

    const workoutCode = () => {
      alert('Opening interactive code editor...');
    };

    const takeQuiz = () => {
      alert('Loading quiz questions...');
    };

    return (
      <div className="online-page">
        <div className="container">
          <div className="learning-header">
            <div>
              <button className="back-btn" onClick={() => setCurrentPage('language')}>← Back</button>
              <span style={{color: 'white', fontSize: '18px', marginLeft: '15px'}}>
                Level {level.id}: {level.title}
              </span>
            </div>
            <div className="user-logo" onClick={() => setShowUserModal(true)}>
              {currentUser?.initials}
            </div>
          </div>

          <div className="content-section">
            <div className="content-panel">
              <h3>📚 Learning Content</h3>
              <div>
                <h4>Welcome to Programming!</h4>
                <p>In this level, you'll learn the fundamentals of programming. We'll start with basic concepts and gradually build your understanding.</p>
                <p><strong>Topics covered:</strong></p>
                <ul>
                  <li>What is programming?</li>
                  <li>Variables and data types</li>
                  <li>Basic syntax</li>
                  <li>Your first program</li>
                </ul>
              </div>
            </div>
            <div className="visual-panel">
              <h3>🎥 Visual Learning</h3>
              <div>
                <div style={{
                  background: '#f0f0f0', 
                  padding: '20px', 
                  borderRadius: '8px', 
                  textAlign: 'center', 
                  minHeight: '250px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <p>Video content or interactive visuals will be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="action-bar">
            <button className="feature-btn" onClick={textToSpeech}>🔊 Text to Voice</button>
            <button className="feature-btn" onClick={workoutCode}>💻 Practice Code</button>
            <button className="feature-btn" onClick={takeQuiz}>📝 Take Quiz</button>
          </div>
        </div>
      </div>
    );
  };

  // User Modal Component
  const UserModal = () => {
    if (!showUserModal) return null;

    const handleLogout = () => {
      setCurrentUser(null);
      setCurrentLanguage(null);
      setCurrentLevel(null);
      setCurrentPage('login');
      setShowUserModal(false);
    };

    return (
      <div className="user-modal" onClick={() => setShowUserModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={() => setShowUserModal(false)}>&times;</span>
          <h3>User Information</h3>
          <p><strong>Name:</strong> {currentUser?.name}</p>
          <p><strong>Email:</strong> {currentUser?.email}</p>
          <p><strong>Progress:</strong> 3 languages in progress</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  };

  // Helper functions
  const openLanguage = (languageId) => {
    setCurrentLanguage(languageId);
    setCurrentPage('language');
  };

  const goOnline = (levelId) => {
    setCurrentLevel(levelId);
    setCurrentPage('online');
  };

  const downloadLevel = (levelId) => {
    alert(`Downloading Level ${levelId} resources for ${languages[currentLanguage].name}...`);
  };

  

  return (
    <div className="App">
      {renderCurrentPage()}
      <UserModal />
    </div>
  );
};

export default CodeLearnApp;
