import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Form from 'pages/Inscription';
import Duty from 'pages/Duty';
import OurSpace from 'pages/OurSpace';
import Protocol from 'pages/Protocol';
import TimeTable from 'pages/Timetable';
import Login from 'pages/Login';
import React from 'react';

const WithSession = () => (
  <Routes>
    <Route path="/InscriptionForm" element={<Form />} />
    <Route path="/Duty" element={<Duty />} />
    <Route path="/OurSpace" element={<OurSpace />} />
    <Route path="/Protocol" element={<Protocol />} />
    <Route path="/TimeTable" element={<TimeTable />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/ChangePassword" element={<Login />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default WithSession;
