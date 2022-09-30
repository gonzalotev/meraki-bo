import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Form from 'pages/Inscription';
import Duty from 'pages/Duty';
import DutyForm from 'pages/Duty/AdminDuty/DutyForm';
import OurSpace from 'pages/OurSpace';
import Protocol from 'pages/Protocol';
import TimeTable from 'pages/Timetable';
import Login from 'pages/Login';
import RecoveryPassword from 'pages/RecoveryPassword';
import ResetPassword from 'pages/ResetPassword';
import React from 'react';

const WithoutSession = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/InscriptionForm" element={<Form />} />
    <Route path="/Duty" element={<Duty />} />
    <Route path="/Duty/create" element={<DutyForm />} />
    <Route path="/OurSpace" element={<OurSpace />} />
    <Route path="/Protocol" element={<Protocol />} />
    <Route path="/TimeTable" element={<TimeTable />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/ChangePassword" element={<Login />} />
    <Route path="/Recovery" element={<RecoveryPassword />} />
    <Route path="/Reset" element={<ResetPassword />} />
  </Routes>
);

export default WithoutSession;
