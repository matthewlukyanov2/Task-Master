import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered:", userCredential.user);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error(err);
        setError("Registration failed: " + err.message);
      });
  };

  return (
    <div className="register-page">
      <h2>Create a Taskmaster Account</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="email" 
          placeholder="Email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input 
          type="password" 
          placeholder="Password (min 6 characters)" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;
