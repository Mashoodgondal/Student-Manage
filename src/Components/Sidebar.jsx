import React from "react";
import "../Components/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <a href="#" className="logo">
          <i className="bx bx-code-alt"></i>
          <div className="logo-name">
            <div className="student">Student</div>
            Management
          </div>
        </a>
        <ul className="side-menu">
          <Link to="/">
            <i className="bx bxs-dashboard"></i>Dashboard
          </Link>
          <Link to="/students">
            <i className="bx bx-store-alt"></i>Students
          </Link>
          <Link to="/courses" className="active">
            <i className="bx bx-analyse"></i>Courses
          </Link>
          <Link to="/attendance">
            <i className="bx bx-message-square-dots"></i>Attendence
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
