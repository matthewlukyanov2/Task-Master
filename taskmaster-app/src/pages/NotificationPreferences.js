import React, { useState } from 'react';
import '../styles/Settings.css'; 

const NotificationPreferences = () => {
  const [dailyNotifications, setDailyNotifications] = useState(true);
  const [taskDueAlerts, setTaskDueAlerts] = useState(true);
  const [taskComplete, setTaskComplete] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [reminderTime, setReminderTime] = useState("09:00");

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Notifications</h3>

        <div className="setting-row">
          <label>Daily Notifications</label>
          <input
            type="checkbox"
            checked={dailyNotifications}
            onChange={() => setDailyNotifications(!dailyNotifications)}
            className="switch"
          />
        </div>

        <div className="setting-row">
          <label>Task Due Alerts</label>
          <input
            type="checkbox"
            checked={taskDueAlerts}
            onChange={() => setTaskDueAlerts(!taskDueAlerts)}
            className="switch"
          />
        </div>

        <div className="setting-row">
          <label>Custom Reminder Time</label>
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="time-input"
          />
        </div>

        <div className="setting-row">
          <label>Task Complete</label>
          <input
            type="checkbox"
            checked={taskComplete}
            onChange={() => setTaskComplete(!taskComplete)}
            className="switch"
          />
        </div>

        <div className="setting-row">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="switch"
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
