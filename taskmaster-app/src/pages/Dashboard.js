import React, { useState } from "react";
import "../styles/Dashboard.css";
import { useNavigate } from 'react-router-dom';
import { FaCog, FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([
        { id: 1, text: "Finish project report", completed: true },
        { id: 2, text: "Workout gym", completed: false },
        { id: 3, text: "Get groceries", completed: false },
        { id: 4, text: "Go for walk", completed: false },
      ]);
      

  // 2. Toggle completed status
  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <span className="logo">TaskMaster</span>
          <button
  className="settings-icon"
  onClick={() => navigate('/settings', { state: { from: '/dashboard' } })}
>
  ⚙️
</button>
        </div>

        <h2 style={{ marginTop: "1.5rem" }}>Welcome back, Matt! <span>⭐</span></h2>
        <p style={{ fontWeight: "bold" }}>Here are your tasks for today.</p>

        <div className="task-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              {task.completed ? (
                <FaCheckCircle style={{ color: "green", fontSize: "1.2rem" }} />
              ) : (
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid black",
                    borderRadius: "50%",
                  }}
                />
              )}
              {task.text}
            </div>
          ))}
        </div>

        <p style={{ marginTop: "1rem", color: "#0044cc", textDecoration: "underline", cursor: "pointer" }}>
          Select All
        </p>

        <div className="add-task-btn">+</div>
      </div>
    </div>
  );
};

export default Dashboard;
