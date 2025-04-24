import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import AccountSettings from './pages/AccountSettings';
import NotificationPreferences from './pages/NotificationPreferences';
import Appearance from './pages/Appearance';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
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
  );
}

export default App;