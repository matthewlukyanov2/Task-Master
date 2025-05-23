# TaskMaster 
A simple task management web application built with React.js and Firebase.

# Project Overview
TaskMaster allows users to create, manage, and customize their tasks in a simple, responsive interface. It also provides customization features like changing font styles, toggling light mode, and updating the profile picture.
Built as part of an academic project, TaskMaster focuses on clean UI, persistent user settings, and a smooth user experience.

# Technologies Used
React.js – Frontend Framework
Firebase – Authentication & Database
HTML5/CSS3 – Styling and Structure
JavaScript – Application Logic
LocalStorage – Persisting User Preferences

# Key Features
User Authentication (Login / Register / Logout) with Firebase
Create, edit, and delete tasks
Personalize the app with:
-Light Mode toggle
-Custom Font selection
-Upload and save a Profile Picture
-Persist settings across sessions using LocalStorage
-Account settings page, including Delete Account functionality
-Responsive design for mobile and desktop

# System Architecture
TaskMaster is developed as a Single Page Application (SPA) using React.js, ensuring smooth transitions between views without full page reloads. Firebase handles the backend services including authentication and real-time data storage.

# Home page
![image](https://github.com/user-attachments/assets/8bc673a3-15d1-498e-b1dc-7097f4519cb8)

# Challenges Faced & Solutions
Persisting user settings: Used LocalStorage to save appearance settings across sessions.

Handling Profile Picture uploads: Converted images to Base64 strings to store them easily.

Secure Authentication: Integrated Firebase Authentication securely and managed session state with React hooks.

# How to Run the Project
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/TaskMaster.git
Install dependencies

bash
Copy
Edit
npm install
Start the application

bash
Copy
Edit
npm start
Make sure your Firebase project credentials are correctly configured.

License
This project is licensed for academic purposes only.

Thank you for checking out TaskMaster!
