import React from 'react';
import { useSettings } from "../contexts/SettingsContext";
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Settings.css';

// Uses the useSettings context to get the current settings and applies them to the component's style.
const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { yellowMode, fontStyle } = useSettings();
  const from = location.state?.from || '/';

  return (
    <div className="settings-container">
      <div
    className="settings-wrapper"
    style={{
      backgroundColor: yellowMode ? "#fffacd" : "#add8e6",
      fontFamily: fontStyle
    }}
  >
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

  