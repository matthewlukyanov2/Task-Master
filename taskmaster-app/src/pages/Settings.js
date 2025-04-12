function Settings() {
    return (
      <div className="settings-page">
        <h2>Settings</h2>
  
        <section>
          <h3>👤 Account Settings</h3>
          <p>Change email / password</p>
        </section>

        <section>
        <h3>🔔 Notification Preferences</h3>
        <label>
          <input type="checkbox" /> Email Reminders
        </label><br />
        <label>
          <input type="checkbox" /> Push Notifications
        </label>
      </section>

      </div>
    );
  }
  