import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
};

export default AppRouter;
