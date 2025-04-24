import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; 
import { Link } from "react-router-dom";
import "../styles/Login.css"; // Reuse your login page styling

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent! Check your inbox.");
      setError("");
    } catch (err) {
      setError("⚠️ Failed to send reset email. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <Link to="/login" className="back-button">← Back</Link>
        <h1 className="logo">TaskMaster</h1>
        <form className="login-form" onSubmit={handleReset}>
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error">{error}</p>}
          <button type="submit">Send Reset Email</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
