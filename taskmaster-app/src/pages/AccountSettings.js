import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css'; 
import { FaEdit } from 'react-icons/fa';

const AccountSettings = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [editingField, setEditingField] = useState(null); 

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  // Load saved data from localStorage 
  useEffect(() => {
    const savedUsername = localStorage.getItem('username') || 'Matt';
    const savedEmail = localStorage.getItem('email') || 'matt@gmail.com';
    setUsername(savedUsername);
    setEmail(savedEmail);
  }, []);

  // Save to localStorage on change
  const handleSave = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    setEditingField(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="settings-container">
      <div className="settings-wrapper">
        <div className="settings-header">
          <h1 className="logo">TaskMaster</h1>
          <button className="back-button" onClick={() => navigate(-1)}>←</button>
        </div>

        <h2>Settings</h2>

        <div className="section">
          <h3>Profile Information</h3>
          <p>
            <strong>Username</strong> &nbsp;
            {editingField === 'username' ? (
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <>
                {username} &nbsp;
                <FaEdit className="edit-icon" onClick={() => setEditingField('username')} />
              </>
            )}
          </p>
          <p>
            <strong>Email Address</strong> &nbsp;
            {editingField === 'email' ? (
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <>
                {email} &nbsp;
                <FaEdit className="edit-icon" onClick={() => setEditingField('email')} />
              </>
            )}
          </p>
          <p>
            <strong>Password</strong> &nbsp;
            <FaEdit className="edit-icon" />
          </p>
        </div>

        <div className="section">
          <h3>Account Management</h3>
          <p className="clickable" onClick={() => setShowLogoutPopup(true)}>Log out</p>
          <p className="clickable">Delete Account</p>
        </div>
      </div>
      {showLogoutPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>You would like to log out from <span style={{ color: '#8e44ad' }}>{username}</span>?</h3>
            <label style={{ display: 'block', margin: '1rem 0' }}>
              <input
                type="checkbox"
                checked={confirmLogout}
                onChange={(e) => setConfirmLogout(e.target.checked)}
              />
              {" "}Yes, I want to log out.
            </label>

            <button
              disabled={!confirmLogout}
              onClick={handleLogout}
              style={{
                backgroundColor: confirmLogout ? '#e74c3c' : '#ccc',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '5px',
                cursor: confirmLogout ? 'pointer' : 'not-allowed'
              }}
            >
              Log out
            </button>

            <p
              onClick={() => {
                setShowLogoutPopup(false);
                setConfirmLogout(false);
              }}
              style={{
                marginTop: '1rem',
                color: '#888',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Cancel
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;
