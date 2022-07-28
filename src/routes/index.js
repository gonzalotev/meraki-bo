import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Form from "../pages/form";
import About from "../pages/about";
import Duty from "../pages/duty";
import OurSpace from "../pages/our-space";
import Protocol from "../pages/protocol";
import TimeTable from "../pages/timetable";

const Roots = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/FormularioDeInscripcion" element={<Form/>} />
      <Route path="/Contacto" element={<About/>} />
      <Route path="/Aranceles" element={<Duty/>} />
      <Route path="/NuestroEspacio" element={<OurSpace/>} />
      <Route path="/Protocolo" element={<Protocol/>} />
      <Route path="/Horarios" element={<TimeTable/>} />
    </Routes>
    )

}

export default Roots;