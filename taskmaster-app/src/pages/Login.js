import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import '../styles/Login.css'; 

// Login component responsible for user authentication and login functionality
// It uses Firebase Authentication to sign in users with their email and password
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
  
    // useNavigate hook is used to navigate to different routes when buttons are clicke
    const navigate = useNavigate();
  
    // this function is called when the user submits the login form
    // It uses Firebase Authentication to sign in the user with their email and password
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('email', email);
        navigate('/dashboard');
      } catch (err) {
        setError('Invalid email or password.');
      }
    };
  
    return (
      <div className="login-container">
        <div className="login-wrapper">
        <button onClick={() => navigate('/')} style={{ marginBottom: "1rem" }}>← Back</button>
        <h1 className="logo">TaskMaster</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email / Username</label>
          <input
            type="email"
            placeholder="Username / Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
              👁️
            </span>
          </div>
  
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember me</label>
          </div>
  
          <p className="forgot-link">
  <Link to="/forgot-password">Forgot password?</Link>
</p>
  
          {error && <p className="error">{error}</p>}
  
          <button type="submit">Login</button>
        </form>
      </div>
      </div>
    );
  };

export default Login;
