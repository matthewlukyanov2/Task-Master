import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from "./contexts/SettingsContext";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import AccountSettings from './pages/AccountSettings';
import NotificationPreferences from './pages/NotificationPreferences';
import Appearance from './pages/Appearance';
import ResetPassword from './pages/ResetPassword';

// this function is the main entry point of the application It uses React Router to define the routes for the application.
function App() {
  return (
    <SettingsProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/account" element={<AccountSettings />} />
        <Route path="/settings/appearance" element={<Appearance />} />
        <Route path="/settings/notifications" element={<NotificationPreferences />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
      </Routes>
    </Router>
    </SettingsProvider>
  );
}

export default App;