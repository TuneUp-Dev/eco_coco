import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UseAnalytics from "../pages/UseAnalytics.jsx";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<UseAnalytics />} />
      </Routes>
    </>
  );
};

export default Router;
