import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import UseAnalytics from "../pages/UseAnalytics.jsx";

const Router = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<UseAnalytics />} />
      </Router>
    </>
  );
};

export default Router;
