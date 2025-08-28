import React, { useState, useRef, useEffect } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";

const OnlinePage = ({ currentUser, currentLanguageId, currentLevelId, setShowUserModal }) => {
  const language = languages[currentLanguageId];
  const level = language?.levels.find(l => l.id === currentLevelId);
  const navigate = useNavigate();
  const [showQuizDropdown, setShowQuizDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const textToSpeech = () => {
    const content = "Welcome to Programming! In this level, you'll learn the fundamentals of programming.";
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(content);
      speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowQuizDropdown(false);
      }
    }
    if (showQuizDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showQuizDropdown]);

  useEffect(() => {
    async function loadHtml() {
      try {
        const module = await import(`../data/${currentLanguageId}/${currentLevelId}.js`);
        setHtmlContent(module.default);
      } catch (error) {
        setHtmlContent("<p>Content not found.</p>");
      }
    }
    loadHtml();
  }, [currentLanguageId, currentLevelId]);

  if (!level) return null;

  return (
    <div className="online-page">
      <div className="container">
        <div className="learning-header">
          <div>
            <button className="back-btn" onClick={() => navigate(`/language/${currentLanguageId}`)}>← Back</button>
            <span className="level-title">
              Level {level.id}: {level.title}
            </span>
          </div>
          <div className="user-logo" onClick={() => setShowUserModal(true)}>
            {currentUser?.initials}
          </div>
        </div>

        <div className="action-bar">
          <button className="feature-btn" onClick={() => textToSpeech()}>🔊 Text to Voice</button>
          <button className="feature-btn" onClick={() => navigate(`/codeeditor/${currentLanguageId}/${currentLevelId}`)}>💻 Practice Code</button>
          <div className="quiz-dropdown" ref={dropdownRef}>
            <button className="feature-btn" onClick={() => setShowQuizDropdown(v => !v)}>
              📝 Take Quiz
            </button>
            {showQuizDropdown && (
              <div className="quiz-dropdown-content">
                <button onClick={() => navigate(`/blockquiz/${currentLanguageId}/${currentLevelId}`)}>🧩 Block Quiz</button>
                <button onClick={() => navigate(`/quiz/${currentLanguageId}/${currentLevelId}`)}>✍️ MCQ Quiz</button>
              </div>
            )}
          </div>
          <div className="visual-panel">
            <button
              className="feature-btn"
              style={{ marginTop: "16px" }}
              onClick={() => setShowVideo(true)}
            >
              🎥 Visual Learning
            </button>
            {showVideo && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(0,0,0,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000
                }}
                onClick={() => setShowVideo(false)}
              >
                <div
                  style={{
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "12px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                    position: "relative"
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      background: "#eee",
                      border: "none",
                      borderRadius: "50%",
                      width: 32,
                      height: 32,
                      fontSize: 18,
                      cursor: "pointer"
                    }}
                    onClick={() => setShowVideo(false)}
                  >
                    ×
                  </button>
                  <video
                    src={`/${currentLanguageId}/${currentLevelId}.mp4`}
                    controls
                    style={{ width: "480px", maxWidth: "80vw", borderRadius: "8px" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="content-section">
          <div
            className="content-panel"
            style={{
              width: "85%",
              overflowY: "auto",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px"
            }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default OnlinePage;
