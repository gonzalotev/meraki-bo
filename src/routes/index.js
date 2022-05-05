import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Form from "../pages/form";

const Roots = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Form" element={<Form/>} />
    </Routes>
    )

}

export default Roots;