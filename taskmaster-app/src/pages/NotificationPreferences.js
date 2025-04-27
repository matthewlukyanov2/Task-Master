import React, { useState, useEffect  } from "react";
import { useSettings } from "../contexts/SettingsContext";
import "../styles/Settings.css";

function NotificationPreferences() {
  const { yellowMode, fontStyle } = useSettings();

  // Initialize state from localStorage (before any useState)
  const getInitialSettings = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("notificationSettings"));
      return saved || {};
    } catch {
      return {};
    }
  };

  const settings = getInitialSettings();

  // Set initial state based on saved values
  const [dailyNotifications, setDailyNotifications] = useState(
    settings.dailyNotifications ?? true
  );
  const [taskDueAlerts, setTaskDueAlerts] = useState(
    settings.taskDueAlerts ?? true
  );
  const [reminderTime, setReminderTime] = useState(
    settings.reminderTime ?? "09:00"
  );
  const [taskComplete, setTaskComplete] = useState(
    settings.taskComplete ?? false
  );
  const [emailNotifications, setEmailNotifications] = useState(
    settings.emailNotifications ?? false
  );

  // Save to localStorage whenever settings change
  useEffect(() => {
    const settings = {
      dailyNotifications,
      taskDueAlerts,
      reminderTime,
      taskComplete,
      emailNotifications,
    };
    localStorage.setItem("notificationSettings", JSON.stringify(settings));
  }, [dailyNotifications, taskDueAlerts, reminderTime, taskComplete, emailNotifications]);

    
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
