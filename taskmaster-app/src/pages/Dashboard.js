function Dashboard() {
    return (
      <div className="dashboard">
        <h2>Today's Tasks</h2>
        {/* Later: map tasks here */}
        <ul>
          <li><input type="checkbox" /> Finish UI prototype</li>
          <li><input type="checkbox" /> Record voiceover</li>
          <li><input type="checkbox" /> Upload PDF to Moodle</li>
        </ul>
      </div>
    );
  }

  export default Dashboard;