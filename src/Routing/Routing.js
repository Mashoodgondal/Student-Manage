import React from "react";
import Attendance from "../Pages/Attendance";
import Courses from "../Pages/Courses";
import Dashboard from "../Pages/Dashboard";
import Students from "../Pages/Students";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
const Routing = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
