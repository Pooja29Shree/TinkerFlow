import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import your logo image (adjust path if needed)
import appLogo from "/app_icon.jpeg"; // Make sure this path is correct

function LoginPage({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setCurrentUser({ name: username, initials: username.slice(0, 2).toUpperCase() });
      setWarning("");
      navigate("/main");
    } else {
      setWarning("Please enter a valid username and password");
    }
  };

  return (
    <div className="page login-page">
      <div className="auth-container">
        {/* App Logo above TinkerFlow */}
        <img
          src={appLogo}
          alt="App Logo"
          className="applogo"
        />
        <h2>TinkerFlow</h2>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {warning && (
            <div style={{ color: "red", marginTop: "8px" }}>{warning}</div>
          )}

          <button type="submit">Login</button>
        </form>

        <div className="links">
          <p>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/create-account")}>Sign In</span>
          </p>
          <p>
            Forgot your password?{" "}
            <span onClick={() => navigate("/forgot-password")}>Forgot Password</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
