import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Form from 'pages/Inscription';
import Duty from 'pages/Duty';
import OurSpace from 'pages/OurSpace';
import Protocol from 'pages/Protocol';
import TimeTable from 'pages/Timetable';
import Login from 'pages/Login';
import RecoveryPassword from 'pages/RecoveryPassword';
import ResetPassword from 'pages/ResetPassword';

const WithoutSession = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/FormularioDeInscripcion" element={<Form />} />
    <Route path="/Aranceles" element={<Duty />} />
    <Route path="/NuestroEspacio" element={<OurSpace />} />
    <Route path="/Protocolo" element={<Protocol />} />
    <Route path="/Horarios" element={<TimeTable />} />
    <Route path="/Ingresar" element={<Login />} />
    <Route path="/CambiarPassword" element={<Login />} />
    <Route path="/Recuperar" element={<RecoveryPassword />} />
    <Route path="/Reset" element={<ResetPassword />} />
  </Routes>
);

export default WithoutSession;
