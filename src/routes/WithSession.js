import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Form from 'pages/Inscription';
import Duty from 'pages/Duty';
import OurSpace from 'pages/OurSpace';
import Protocol from 'pages/Protocol';
import TimeTable from 'pages/Timetable';
import Login from 'pages/Login';

const WithSession = () => (
  <Routes>
    <Route path="/FormularioDeInscripcion" element={<Form />} />
    <Route path="/Aranceles" element={<Duty />} />
    <Route path="/NuestroEspacio" element={<OurSpace />} />
    <Route path="/Protocolo" element={<Protocol />} />
    <Route path="/Horarios" element={<TimeTable />} />
    <Route path="/Ingresar" element={<Login />} />
    <Route path="/CambiarPassword" element={<Login />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default WithSession;
