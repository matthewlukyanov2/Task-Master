import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css'; 
import { FaEdit } from 'react-icons/fa';

const AccountSettings = () => {
  const navigate = useNavigate();

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
