import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page" style={{ padding: "1rem", backgroundColor: "#add8e6", minHeight: "100vh" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'cursive' }}>TaskMaster</h1>
        <FaCog onClick={() => navigate('/settings')} style={{ cursor: 'pointer' }} />
      </div>
      
      <h2>Welcome to the TaskMaster App!</h2>
      <p>Where your tasks are kept tidy and concise</p>

      <button onClick={() => navigate('/login')}>Log in ➤</button>
      <br /><br />
      <button onClick={() => navigate('/register')}>Register ➤</button>

      <footer style={{ marginTop: "3rem" }}>
        <h3>Task Master ✅</h3>
        <p>For queries or problems, email us at <a href="mailto:taskmaster@gmail.com">taskmaster@gmail.com</a> 😊</p>
      </footer>
    </div>
  );
}

export default Home;
