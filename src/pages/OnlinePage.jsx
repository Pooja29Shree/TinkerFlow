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
  const [videoUrl, setVideoUrl] = useState("");
  const [lang, setLang] = useState("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const langDropdownRef = useRef(null);

  const languageOptions = [
    { code: "en", label: "English" },
    { code: "ta", label: "Tamil" },
    { code: "te", label: "Telugu" },
    { code: "hi", label: "Hindi" },
    { code: "ml", label: "Malayalam" },
    { code: "kn", label: "Kannada" },
  ];

  const loadHtml = async (langCode = lang) => {
    try {
      const module = await import(`../data/${currentLanguageId}/${currentLevelId}.js`);
      setHtmlContent(module[langCode]);
    } catch (error) {
      setHtmlContent("<p>Content not found.</p>");
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
    loadHtml(lang);
    // eslint-disable-next-line
  }, [currentLanguageId, currentLevelId, lang]);

  if (!level) return null;

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await fetch("http://localhost:5000/api/subjects/get-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject: currentLanguageId,
            level: currentLevelId
          })
        });

        const data = await res.json();
        setVideoUrl(data.videoUrl || "");
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    }
    fetchVideo();
  }, [currentLanguageId, currentLevelId]);

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
          <div className="translate-dropdown" ref={langDropdownRef}>
            <button
              className="feature-btn"
              onClick={() => setShowLangDropdown(v => !v)}
            >
              🌐 Translate
            </button>
            {showLangDropdown && (
              <div className="dropdown-menu">
                {languageOptions.map(opt => (
                  <button
                    key={opt.code}
                    className="dropdown-item"
                    onClick={() => {
                      setLang(opt.code);
                      setShowLangDropdown(false);
                      loadHtml(opt.code);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="feature-btn" onClick={() => navigate(`/codeeditor`)}>💻 Practice Code</button>
          <div className="quiz-dropdown" ref={dropdownRef}>
            <button className="feature-btn" onClick={() => setShowQuizDropdown(v => !v)}>
              📝 Take Quiz
            </button>
            {showQuizDropdown && (
              <div className="quiz-dropdown-content">
                <button className="dropdown-item" onClick={() => navigate(`/blockquiz/${currentLanguageId}/${currentLevelId}`)}>🧩 Block Quiz</button>
                <button className="dropdown-item" onClick={() => navigate(`/quiz/${currentLanguageId}/${currentLevelId}`)}>✍️ MCQ Quiz</button>
              </div>
            )}
          </div>
          <div className="visual-panel">
            <button
              className="feature-btn visual-btn"
              onClick={() => setShowVideo(true)}
            >
              🎥 Visual Learning
            </button>
            {showVideo && videoUrl && (
              <div className="video-modal" onClick={() => setShowVideo(false)}>
                <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                  <button className="video-modal-close" onClick={() => setShowVideo(false)}>
                    ×
                  </button>
                  <video
                    src={videoUrl}
                    controls
                    className="video-player"
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
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default OnlinePage;