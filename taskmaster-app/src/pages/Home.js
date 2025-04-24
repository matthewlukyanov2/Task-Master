import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
  <div className="home-wrapper">
    <header className="home-header">
      <h1>TaskMaster</h1>
      
    </header>

    <main className="home-main">
      <h2>Welcome to the TaskMaster App!</h2>
      <p>Where your tasks are kept tidy and concise</p>

      <div className="home-buttons">
        <button onClick={() => navigate('/login')}>Log in ▶</button>
        <button onClick={() => navigate('/register')}>Register ▶</button>
      </div>
    </main>

    <footer className="home-footer">
      <h3>Task Master ✅</h3>
      <p>For queries or problems, email us at <a href="mailto:taskmaster@gmail.com">taskmaster@gmail.com</a> 😊</p>
    </footer>
  </div>
</div>

  );
}

export default Home;


