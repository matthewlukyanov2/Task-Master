import React, { useState, useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext"; 
import "../styles/Settings.css";

// this function is used to create the settings page for the app
// it uses the useSettings hook to get the settings from the context
function Appearance() {
  const { yellowMode, setYellowMode, fontStyle, setFontStyle } = useSettings();
  // Add the profilePic state
  const [profilePic, setProfilePic] = useState(() => {
    return localStorage.getItem("profilePic") || null;
  });


  // Save settings when they change
  // this function is used to save the settings to local storage
  // it uses the useEffect hook to save the settings when they change
  useEffect(() => {
    const saveSettings = setTimeout(() => {
      localStorage.setItem('yellowMode', yellowMode);
      localStorage.setItem('fontStyle', fontStyle);
      if (profilePic) {
        localStorage.setItem('profilePic', profilePic);
      }
    }, 300); // waits 300ms before saving
  
    return () => clearTimeout(saveSettings); // cancel previous if user keeps changing
  }, [yellowMode, fontStyle, profilePic]);
  
 // this function is used to handle the image upload
  // it uses the FileReader API to read the image file and set the profilePic state
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  // returns the settings page with the respective settings
  return (
    <div className="settings-container">
      <div className="settings-wrapper"
      style={{
        backgroundColor: yellowMode ? "#fffacd" : "#add8e6", // Light yellow or light blue
        fontFamily: fontStyle,
      }}
      >
        <div className="settings-header">
          <h2 className="logo">TaskMaster</h2>
          <button className="back-button" onClick={() => window.history.back()}>
            ←
          </button>
        </div>

        <h2>Settings</h2>
        <div className="section">
          <h3>App Appearances</h3>

          <div className="setting-row">
            <label>Light mode</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={yellowMode}
                onChange={() => setYellowMode(!yellowMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-row">
            <label htmlFor="font-select">Font Style</label>
            <select
              id="font-select"
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
              className="font-dropdown"
            >
              <option value="Calibri">Calibri</option>
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>

          <div className="setting-row">
            <label>Profile Picture</label>
            <div>
              <input
                type="file"
                accept="image/*"
                id="profile-upload"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <label htmlFor="profile-upload" className="profile-upload-label">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile Preview"
                    className="profile-preview"
                  />
                ) : (
                  <span role="img" aria-label="user-icon" className="profile-icon">
                    👤
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appearance;

