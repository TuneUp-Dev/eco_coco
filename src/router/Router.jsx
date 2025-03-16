import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Router>
    </>
  );
};

export default Router;
