import React, { useState } from "react";
import "../Pagestyles/Attendence.css";

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [formData, setFormData] = useState({
    attendanceId: "",
    studentId: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttendanceData([...attendanceData, formData]);
    setFormData({ attendanceId: "", studentId: "", date: "" });
  };

  const handleDelete = (index) => {
    const updatedData = attendanceData.filter((_, i) => i !== index);
    setAttendanceData(updatedData);
  };

  return (
    <div className="container mt-5">
      <h1>Attendance Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Attendance ID</label>
          <input
            type="text"
            className="form-control"
            name="attendanceId"
            value={formData.attendanceId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Student ID</label>
          <input
            type="text"
            className="form-control"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Attendance ID</th>
            <th>Student ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data, index) => (
            <tr key={index}>
              <td>{data.attendanceId}</td>
              <td>{data.studentId}</td>
              <td>{data.date}</td>
              <td>Present</td>
              <td>
                <button className="btn btn-warning mr-2">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
