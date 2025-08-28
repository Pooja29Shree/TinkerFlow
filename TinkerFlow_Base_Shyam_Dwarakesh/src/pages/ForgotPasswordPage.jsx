import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (email) {
      setMessage(`Password reset link sent to ${email}`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Please enter your email address.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      
      <p className="reset-info">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
      
      <div className="back-link" onClick={() => navigate("/")}>
        Back to Login
      </div>
    </div>
  );
}

export default ForgotPasswordPage;