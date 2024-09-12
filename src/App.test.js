// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentInfo from './pages/StudentInfo';  // Import the StudentInfo component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentInfo />} />  {/* Add route for student info */}
        {/* Add routes for adding and editing students */}
        <Route path="/add-student" element={<div>Add Student Page</div>} />
        <Route path="/edit-student/:id" element={<div>Edit Student Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
