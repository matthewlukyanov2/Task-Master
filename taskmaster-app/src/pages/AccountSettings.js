import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css'; 
import { FaEdit } from 'react-icons/fa';

const AccountSettings = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [editingField, setEditingField] = useState(null); 

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


  return (
    <div className="settings-container">
      <div className="settings-wrapper">
        <div className="settings-header">
          <h1 className="logo">TaskMaster</h1>
          <button className="back-button" onClick={() => navigate('/settings')}>←</button>
        </div>

        <h2>Settings</h2>

        <div className="section">
          <h3>Profile Information</h3>
          <p>
            <strong>Username</strong> &nbsp; Matt &nbsp;
            <FaEdit className="edit-icon" />
          </p>
          <p>
            <strong>Email Address</strong> &nbsp; matt@gmail.com &nbsp;
            <FaEdit className="edit-icon" />
          </p>
          <p>
            <strong>Password</strong> &nbsp;
            <FaEdit className="edit-icon" />
          </p>
        </div>

        <div className="section">
          <h3>Account Management</h3>
          <p className="clickable">Log out</p>
          <p className="clickable">Delete Account</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
