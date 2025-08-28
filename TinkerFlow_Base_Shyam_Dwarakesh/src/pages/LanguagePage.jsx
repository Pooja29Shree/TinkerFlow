import React from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";

const LanguagePage = ({ currentUser, currentLanguageId, setShowUserModal, setCurrentLevelId }) => {
  const language = languages[currentLanguageId];
  const navigate = useNavigate();
  if (!language) return null;

  const goOnline = (levelId) => {
    setCurrentLevelId(levelId);
    navigate(`/online/${currentLanguageId}/${levelId}`);
  };

  const downloadLevel = (languageId, levelId) => {
    alert(`Downloading resources for ${languages[languageId].name} - Level ${levelId}`);
  };

  return (
    <div className="language-page">
      <div className="header">
          <button className="back-btn" onClick={() => navigate("/main")}>← Back</button>
          <div className="language-title">{language.name} Levels</div>
          <div className="user-logo" onClick={() => setShowUserModal(true)}>
            {currentUser?.initials}
          </div>
        </div>
      <div className="container">
        

        

        <div className="levels-container">
          {language.levels.map(level => (
            <div key={level.id} className="level-card">
              <h4>Level {level.id}: {level.title}</h4>
              <p>{level.description}</p>
              <div className="level-actions">
                <button className="action-btn online-btn" onClick={() => goOnline(level.id)}>Go Online</button>
                <button className="action-btn download-btn" onClick={() => downloadLevel(currentLanguageId, level.id)}>Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
