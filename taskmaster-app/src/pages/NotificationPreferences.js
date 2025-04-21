import React, { useState } from "react";
import "../styles/Settings.css";

function NotificationPreferences() {
  const [dailyNotifications, setDailyNotifications] = useState(true);
  const [taskDueAlerts, setTaskDueAlerts] = useState(true);
  const [reminderTime, setReminderTime] = useState("09:00");
  const [taskComplete, setTaskComplete] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  return (
    <div className="settings-container">
      <div className="settings-wrapper">
        <div className="settings-header">
          <h2 className="logo">TaskMaster</h2>
          <button className="back-button" onClick={() => window.history.back()}>
            ←
          </button>
        </div>

        <h2>Settings</h2>
        <div className="section">
          <h3>Notifications</h3>

          <div className="setting-row">
            <label>Daily Notifications</label>
            <input
              type="checkbox"
              checked={dailyNotifications}
              onChange={() => setDailyNotifications(!dailyNotifications)}
            />
          </div>

          <div className="setting-row">
            <label>Task Due Alerts</label>
            <input
              type="checkbox"
              checked={taskDueAlerts}
              onChange={() => setTaskDueAlerts(!taskDueAlerts)}
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
            />
          </div>

          <div className="setting-row">
            <label>Email Notifications</label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPreferences;
