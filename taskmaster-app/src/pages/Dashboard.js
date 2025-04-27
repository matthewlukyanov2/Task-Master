import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import { useNavigate } from 'react-router-dom';
import { FaCog, FaCheckCircle } from "react-icons/fa";
import { getAuth } from "firebase/auth"; 
import { useSettings } from "../contexts/SettingsContext";

// Dashboard component responsible for displaying the dashboard of the application, where users can manage their tasks.
const Dashboard = () => {
    const navigate = useNavigate();
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [message, setMessage] = useState(""); 
    const [fadeOut, setFadeOut] = useState(false);
    const [username, setUsername] = useState('');
    const { yellowMode, fontStyle } = useSettings();

    // Load saved data from localStorage or set default tasks
  const getInitialTasks = () => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Finish project report", completed: true },
      { id: 2, text: "Workout gym", completed: false },
      { id: 3, text: "Get groceries", completed: false },
      { id: 4, text: "Go for walk", completed: false },
    ];
  };

  // Set initial state based on saved values
  const [tasks, setTasks] = useState(getInitialTasks);
  const [newTaskText, setNewTaskText] = useState("");

  // Load username from Firebase Auth
  useEffect(() => {
    const auth = getAuth();
  const currentUser = auth.currentUser;
  if (currentUser) {
    setUsername(currentUser.displayName || currentUser.email.split('@')[0]);
  }
  }, []);
  

  //Save to localStorage whenever tasks change
  useEffect(() => {
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (message) {
      // Start fading after 2.5s
      const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
  
      // Clear message after fade finishes
      const clearTimer = setTimeout(() => {
        setMessage("");
        setFadeOut(false);
      }, 3000);
  
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [message]);
  

  // toggleTask function to mark tasks as completed or not
  // called when a task is clicked
  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // togglePriority function to mark tasks as priority or not
  // toggles the priority state of a task when the star button is clicked
  const togglePriority = (id) => {
    const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, priority: !task.priority } : task
    );
    setTasks(updatedTasks);
};

  // toggleAllTasks function to mark all tasks as completed or not    
  // checks if all tasks are completed and toggles their state
  const toggleAllTasks = () => {
    const allCompleted = tasks.every(task => task.completed);
    const updatedTasks = tasks.map(task => ({
      ...task,
      completed: !allCompleted
    }));
    setTasks(updatedTasks);
  };

  // Check if all tasks are completed 
  // this is used to prevent adding new tasks if all existing tasks are completed
  const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);

  // addTask function to add a new task to the list
  // it checks if the task limit is reached and if the input is not empty
  const addTask = () => {
        if (tasks.length >= 6 || newTaskText.trim() === "") return;
      
        const newTask = {
          id: Date.now(),
          text: newTaskText.trim(),
          completed: false,
          priority: false,
        };
      
        setTasks([...tasks, newTask]);
        setNewTaskText(""); // Clear input after adding
      };
      
  
 // render the dashboard component
  return (
    <div className="dashboard-container">
      <div
    className="dashboard-wrapper"
    style={{
      backgroundColor: yellowMode ? "#fffacd" : "#add8e6",
      fontFamily: fontStyle,
    }}
  >
        <div className="dashboard-header">
          <span className="logo">TaskMaster</span>
          <button
  className="settings-icon"
  onClick={() => navigate('/settings', { state: { from: '/dashboard' } })}
>
  ⚙️
</button>
        </div>

        <h2 style={{ marginTop: "1.5rem" }}>Welcome back, {username}! <span>⭐</span></h2>

        

        <input
  type="text"
  className="task-input"
  placeholder="Enter a new task..."
  value={newTaskText}
  onChange={(e) => setNewTaskText(e.target.value)}
  disabled={tasks.length >= 6}
/>

{tasks.length >= 6 && (
  <p style={{ color: "red", fontWeight: "bold", marginTop: "0.5rem" }}>
    Sorry, 6 tasks max
  </p>
)}

<p style={{ fontWeight: "bold" }}>Here are your tasks for today.</p>


        <div className="task-list">
        {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => {
                if (isDeleteMode) {
                  const updated = tasks.filter(t => t.id !== task.id);
                  setTasks(updated);
                  setMessage("Task has been removed!");
                } else {
                  toggleTask(task.id);
                }
              }}
              onMouseEnter={(e) => {
                if (isDeleteMode) e.currentTarget.style.backgroundColor = "#ffcccc";
              }}
              onMouseLeave={(e) => {
                if (isDeleteMode) e.currentTarget.style.backgroundColor = "white";
              }}
              className={`task-item ${task.completed ? "completed" : ""}`}
              style={{ cursor: isDeleteMode ? "pointer" : "default" }}
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
              {/* Priority star button */}
              <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    togglePriority(task.id);
                                }}
                                style={{
                                  marginLeft: "auto",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem", 
    padding: 0,
    display: "inline-flex", 
    alignItems: "center",
    justifyContent: "center",
    height: "auto", 
    width: "auto",  
    lineHeight: 1,  
    flexShrink: 0,
                                }}
                            >
                                {task.priority ? "⭐" : "☆"}
                            </button>
            </div>
          ))}
        </div>

        <p
  onClick={toggleAllTasks}
  style={{ marginTop: "1rem", color: "#0044cc", textDecoration: "underline", cursor: "pointer" }}
>
  {allTasksCompleted ? "Deselect All" : "Select All"}
</p>

{isDeleteMode ? (
  <p
    onClick={() => {
        setIsDeleteMode(false);
        setFadeOut(false);
        setMessage("");
    }}
    style={{ color: "red", textDecoration: "underline", cursor: "pointer" }}
  >
    Leave task deletion
  </p>
) : (
  <p
    onClick={() => setIsDeleteMode(true)}
    style={{ color: "red", textDecoration: "underline", cursor: "pointer" }}
  >
    Delete Task
  </p>
)}



<div className="add-task-btn" onClick={addTask}>+</div>
{message && (
  <p
    className={`message ${fadeOut ? "fade-out" : ""}`}
    style={{ marginTop: "1rem", color: "#444", fontWeight: "bold" }}
  >
    {message}
  </p>
)}

      </div>
    </div>
  );
};

export default Dashboard;
