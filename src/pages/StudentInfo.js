// src/pages/StudentInfo.js
import React from 'react';
import { Link } from 'react-router-dom';

const StudentInfo = () => {
  // Simulated student data
  const students = [
    { id: 1, name: 'John Doe', class: '10th Grade', attendance: '95%', grade: 'A' },
    { id: 2, name: 'Jane Smith', class: '9th Grade', attendance: '89%', grade: 'B' },
    { id: 3, name: 'Emily Johnson', class: '10th Grade', attendance: '92%', grade: 'A-' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Information</h2>

      <Link to="/add-student" className="btn btn-primary mb-3">Add New Student</Link>
      
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Attendance</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.attendance}</td>
                <td>{student.grade}</td>
                <td>
                  <Link to={`/edit-student/${student.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentInfo;
