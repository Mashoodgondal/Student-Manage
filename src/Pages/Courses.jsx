import React, { useState } from "react";
import "../Pagestyles/Course.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoursesPage = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [formData, setFormData] = useState({
    courseId: "",
    courseName: "",
    courseTitle: "",
    courseDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoursesData([...coursesData, formData]);
    setFormData({
      courseId: "",
      courseName: "",
      courseTitle: "",
      courseDescription: "",
    });

    Notification("Course added successfully!"); // <-- Added this line to show notification
  };

  const handleDelete = (index) => {
    const updatedData = coursesData.filter((_, i) => i !== index);
    setCoursesData(updatedData);
  };

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course ID</label>
          <input
            type="text"
            className="form-control"
            name="courseId"
            value={formData.courseId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Course Title</label>
          <input
            type="text"
            className="form-control"
            name="courseTitle"
            value={formData.courseTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Course Description</label>
          <textarea
            className="form-control"
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Course Title</th>
              <th>Course Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((data, index) => (
              <tr key={index}>
                <td>{data.courseId}</td>
                <td>{data.courseName}</td>
                <td>{data.courseTitle}</td>
                <td>{data.courseDescription}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    Add
                    edit
                    functionality
                    here
                  >
                    Edit
                  </button>
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
    </div>
  );
};

export default CoursesPage;
