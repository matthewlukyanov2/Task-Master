import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from "../contexts/SettingsContext";
import '../styles/Settings.css'; 
import { FaEdit } from 'react-icons/fa';
import { getAuth, signOut, deleteUser } from "firebase/auth";

// AccountSettings component responsible for displaying and managing user account settings.
const AccountSettings = () => {
  const navigate = useNavigate();

// these are the states for storing respective values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [editingField, setEditingField] = useState(null); 

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { yellowMode, fontStyle } = useSettings();


  // Load saved data from localStorage 
  // this function is called when the component mounts and it retrieves the username and email from Firebase Auth
  useEffect(() => {
    const auth = getAuth();
  const currentUser = auth.currentUser;

  // Check if user is logged in
  // If logged in, set username and email from Firebase Auth
  if (currentUser) {
    setUsername(currentUser.displayName || currentUser.email.split('@')[0]);
    setEmail(currentUser.email);
  }
  }, []);

  // Save to localStorage on change
  // This function is called when the user presses enter or clicks outside the input field.
  const handleSave = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    setEditingField(null);
  };
  // This function is called when the user presses a key while editing the username or email field.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
  };

  // This function is called when the user clicks the logout button.
  // It clears the local storage and navigates back to the homepage.
  const handleLogout = () => {
    const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.clear();
      navigate('/');
    })
    .catch((error) => {
      console.error('Logout error:', error);
    });
  };

  // This function is called when the user clicks the delete account button.
  // It deletes the user account from Firebase Auth and clears the local storage.
  const handleDeleteAccount = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    // Check if user is logged in
    if (user) {
      try {
        await deleteUser(user);
        localStorage.clear();
        navigate('/'); // send back to homepage or login
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("Error deleting account: " + error.message);
      }
    }
  };
  
  // Contains the header, profile information, and account management sections.
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
          <p className="clickable" onClick={() => setShowDeletePopup(true)}>Delete Account</p>
        </div>
      </div>
      {showDeletePopup && (
  <div className="popup-overlay">
    <div className="popup">
      <h3>Are you sure you want to delete your account <span style={{ color: '#e74c3c' }}>{username}</span>?</h3>
      <label style={{ display: 'block', margin: '1rem 0' }}>
        <input
          type="checkbox"
          checked={confirmDelete}
          onChange={(e) => setConfirmDelete(e.target.checked)}
        />
        {" "}Yes, permanently delete my account.
      </label>

      <button
        disabled={!confirmDelete}
        onClick={handleDeleteAccount}
        style={{
          backgroundColor: confirmDelete ? '#e74c3c' : '#ccc',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: confirmDelete ? 'pointer' : 'not-allowed'
        }}
      >
        Delete Account
      </button>

      <p
        onClick={() => {
          setShowDeletePopup(false);
          setConfirmDelete(false);
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
