// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Your Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Students</h5>
              <p className="card-text">View and manage student records.</p>
              <a href="/students" className="btn btn-primary">Manage Students</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Teachers</h5>
              <p className="card-text">View and manage teacher records.</p>
              <a href="/teachers" className="btn btn-primary">Manage Teachers</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Attendance</h5>
              <p className="card-text">Track student attendance.</p>
              <a href="/attendance" className="btn btn-primary">Track Attendance</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
