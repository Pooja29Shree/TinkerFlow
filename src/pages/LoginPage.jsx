import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import appLogo from "/app_icon.jpeg"; 

function LoginPage({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_KEY;
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setWarning("Please enter a valid username and password");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password
      });

      if (response.data.success) {
        const user = response.data.data.user;
        setCurrentUser({
          name: user.username,
          initials: user.username.slice(0, 2).toUpperCase(),
        });
        setWarning("");
        navigate("/main");
      } else {
        setWarning(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setWarning(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page login-page">
      <div className="auth-container">
        <img src={appLogo} alt="App Logo" className="applogo" />
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
            <span onClick={() => navigate("/create-account")}>Sign Up</span>
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
