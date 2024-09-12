// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // State variables to hold the data
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState(0);

  // Simulate fetching data when the component mounts
  useEffect(() => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      // Set simulated data
      setTotalStudents(500);  // Replace with actual API call
      setTotalTeachers(50);   // Replace with actual API call
      setUpcomingEvents(3);   // Replace with actual API call
    }, 1000);  // Simulate a 1-second API call
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">School Management Dashboard</h2>
      
      <div className="row">
        {/* Card 1: Total Students */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text">{totalStudents}</p> {/* Display dynamic data */}
              <Link to="/students" className="btn btn-primary">Manage Students</Link>
            </div>
          </div>
        </div>

        {/* Card 2: Total Teachers */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Teachers</h5>
              <p className="card-text">{totalTeachers}</p> {/* Display dynamic data */}
              <Link to="/teachers" className="btn btn-primary">Manage Teachers</Link>
            </div>
          </div>
        </div>

        {/* Card 3: School Events */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Upcoming Events</h5>
              <p className="card-text">{upcomingEvents}</p> {/* Display dynamic data */}
              <Link to="/events" className="btn btn-primary">View Events</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
