import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
  
    const navigate = useNavigate();
    const auth = getAuth();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
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
            <a href="/forgot-password">Forgot password?</a>
          </p>
  
          {error && <p className="error">{error}</p>}
  
          <button type="submit">Login</button>
        </form>
      </div>
      </div>
    );
  };

export default Login;
