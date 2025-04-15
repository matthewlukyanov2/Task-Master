import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Logged in:", userCredential.user);
          navigate('/dashboard');
        })
        .catch((err) => {
          console.error(err);
          setError("Login failed. Please check your credentials.");
        });
    };
  
    return (
      <div className="login-page">
        <h2>Login to Taskmaster</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
  );

}

export default Login;
