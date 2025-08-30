import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignInPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_KEY;


  const handleSignIn = async (e) => {
    e.preventDefault();
    if (username && email && phone && password) {
      try {
        const res = await axios.post(`${API_URL}/auth/register`, {
          username, 
          email,
          phone,
          password
        });

        if (res.data.success) {
          setWarning('');
          setSuccess(res.data.message);
          setTimeout(() => navigate('/'), 1500);
        } else {
          setSuccess('');
          setWarning(res.data.message);
        }

      } catch (err) {
        setSuccess('');
        // Axios gives you more info in err.response
        if (err.response && err.response.data && err.response.data.message) {
          setWarning(err.response.data.message);
        } else {
          setWarning('Something went wrong. Try again.');
        }
        console.error(err);
      }
    } else {
      setSuccess('');
      setWarning('Please fill all fields.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Create Account</button>

        {warning && <p className="error-message">{warning}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>

      {/* Restored the "Back to Login" link, styled with the .back-link class */}
      <div className="back-link" onClick={() => navigate("/")}>
        Back to Login
      </div>
    </div>
  );
}

export default SignInPage;