import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LanguagePage from "./pages/LanguagePage";
import OnlinePage from "./pages/OnlinePage";
import SignInPage from "./pages/SignInPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserModal from "./components/UserModal";
import Chatbot from "./pages/Chatbot";
import BlockQuiz from "./pages/BlockQuiz";
import QuizHome from "./pages/Quiz";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [currentLanguageId, setCurrentLanguageId] = useState(null);
  const [currentLevelId, setCurrentLevelId] = useState(null);

  // On load, check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage setCurrentUser={setCurrentUser} />} />
          <Route path="/create-account" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected routes (require user login) */}
          <Route
            path="/main"
            element={
              currentUser ? (
                <MainPage
                  currentUser={currentUser}
                  setShowUserModal={setShowUserModal}
                  setCurrentLanguageId={setCurrentLanguageId}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/language/:languageId"
            element={
              currentUser ? (
                <LanguagePage
                  currentUser={currentUser}
                  currentLanguageId={currentLanguageId}
                  setShowUserModal={setShowUserModal}
                  setCurrentLevelId={setCurrentLevelId}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/online/:languageId/:levelId"
            element={
              currentUser ? (
                <OnlinePage
                  currentUser={currentUser}
                  currentLanguageId={currentLanguageId}
                  currentLevelId={currentLevelId}
                  setShowUserModal={setShowUserModal}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/chatbot"
            element={
              currentUser ? (
                <Chatbot
                  currentUser={currentUser}
                  setShowUserModal={setShowUserModal}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/blockquiz/:languageId/:levelId"
            element={
              currentUser ? (
                <BlockQuiz
                  currentLanguageId={currentLanguageId}
                  currentLevelId={currentLevelId}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="quiz/:languageId/:levelId"
            element={
              currentUser ? (
                <QuizHome
                  currentLanguageId={currentLanguageId}
                  currentLevelId={currentLevelId}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/codeeditor" element={<CodeEditor />} />
        </Routes>

        {/* User modal (global) */}
        {currentUser && (
          <UserModal
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setShowUserModal={setShowUserModal}
            showUserModal={showUserModal}
          />
        )}
      </div>
    </Router>
  );
}

function CodeEditor() {
  return (
    <iframe
      src="http://localhost:3000"  // this is the Node app started by "node terminal.js"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}

export default App;

