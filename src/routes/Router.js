import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Inscription from 'pages/Inscription';
import Duty from 'pages/Duty';
import DutyEditor from 'pages/Duty/Admin/DutyEditor';
import OurSpace from 'pages/OurSpace';
import Protocol from 'pages/Protocol';
import TimeTable from 'pages/Timetable';
import Login from 'pages/Login';
import RecoveryPassword from 'pages/RecoveryPassword';
import ResetPassword from 'pages/ResetPassword';
import Register from 'pages/Register';

const Router = ({ withSession }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/duty/:id" element={<DutyEditor />} />
    <Route path="/inscription" element={<Inscription />} />
    <Route path="/duty" element={<Duty />} />
    <Route path="/duty/create" element={<DutyEditor />} />
    <Route path="/spaces" element={<OurSpace />} />
    <Route path="/protocol" element={<Protocol />} />
    <Route path="/timetable" element={<TimeTable />} />
    <Route path="/login" element={<Login />} />
    <Route path="/password" element={<Login />} />
    <Route path="/recovery" element={<RecoveryPassword />} />
    <Route path="/reset" element={<ResetPassword />} />
    {!withSession && <Route path="/register" element={<Register />} />}
  </Routes>
);

export default Router;
