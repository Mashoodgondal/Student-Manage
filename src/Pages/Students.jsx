import React, { useState } from "react";
import "../Pagestyles/Student.css";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ id: "", name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ id: "", name: "", email: "" });
  };

  const handleEditStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index] = newStudent;
    setStudents(updatedStudents);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Student Records</h1>

      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Student ID
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={newStudent.id}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={newStudent.email}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddStudent}
      >
        Add Student
      </button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleEditStudent(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => handleDeleteStudent(index)}
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

export default Student;
