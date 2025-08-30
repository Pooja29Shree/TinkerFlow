import React from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";

const MainPage = ({ currentUser, setShowUserModal, setCurrentLanguageId }) => {
  const navigate = useNavigate();
  const openLanguage = (languageId) => {
    setCurrentLanguageId(languageId);
    navigate(`/language/${languageId}`);
  };

  return (
    <div className="main-page">
      <div className="header">
          <div className="app-name">TinkerFlow</div>
          <div className="user-logo" onClick={() => setShowUserModal(true)}>
            {currentUser?.initials}
          </div>
        </div>
      <div className="container">
        <div className="intro-section">
          <h2>Choose Your Programming Language</h2>
          <p>Select a language to start your learning journey</p>
        </div>

        <div className="languages-container">
          {Object.entries(languages).map(([id, lang]) => (
            <div key={id} className="language-card" onClick={() => openLanguage(id)}>
              <div className="language-icon"><img src={`/${lang.id}/logo.webp`}/></div>
              <h3>{lang.name}</h3>
              <p>{lang.desc || ""}</p>
            </div>
          ))}
        </div>

        {/* AI Model Button at the bottom */}
        <div className="feature-buttons">
          <button
            className="feature-btn"
            onClick={() => navigate("/chatbot")}
          >
            AI Mentor
          </button>
          <button
            className="feature-btn"
            onClick={() => navigate("/codeeditor")}
          >
            Code Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
