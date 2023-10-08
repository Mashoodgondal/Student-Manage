import React from "react";

const Dashboard = () => {
  // Assuming you have some data to display
  const studentCount = 10; // Replace with actual data
  const courseCount = 5; // Replace with actual data

  return (
    <div className="container mt-5 bg-primary">
      <h1 className="mb-5 mx-5 ">Dashboard</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Total number of Students</h5>
          <p className="card-text">{studentCount}</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title"> Total number of Courses </h5>
          <p className="card-text">{courseCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//
