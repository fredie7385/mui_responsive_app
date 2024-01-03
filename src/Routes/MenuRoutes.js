import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact } from "../pages/Pages.js";
import { Main } from "../Components/Components.jsx";

export const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Route>
    </Routes>
  );
};
