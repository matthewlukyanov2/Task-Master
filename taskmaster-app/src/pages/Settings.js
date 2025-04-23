import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Settings.css';

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <div className="settings-container">
      <div className="settings-wrapper">
        <div className="settings-header">
          <h1 className="logo">TaskMaster</h1>
          <button className="back-button" onClick={() => navigate(from)}>←</button>
        </div>

        <h2>Settings</h2>
        <ul className="settings-list">
        <li onClick={() => navigate('/settings/account')}>Account settings</li>
        <li onClick={() => navigate('/settings/notifications')}>Notification preferences</li>
       <li onClick={() => navigate('/settings/appearance')}>Appearances</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;

  