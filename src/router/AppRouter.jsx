import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../companents/nav/Navbar";
import RastMobil from "../pages/RastMobil";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RastMobil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
