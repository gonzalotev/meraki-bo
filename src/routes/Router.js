import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Inscription = lazy(() => import('pages/Inscription'));
const Duty = lazy(() => import('pages/Duty'));
const DutyEditor = lazy(() => import('pages/Duty/Admin/DutyEditor'));
const EnrollmentEditor = lazy(() => import('pages/Duty/Admin/EnrollmentEditor'));
const OurSpace = lazy(() => import('pages/OurSpace'));
const Protocol = lazy(() => import('pages/Protocol'));
const TimeTable = lazy(() => import('pages/Timetable'));
const Login = lazy(() => import('pages/Login'));
const RecoveryPassword = lazy(() => import('pages/RecoveryPassword'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const Register = lazy(() => import('pages/Register'));
const ImageResourceEditor = lazy(() => import('components/Resource/ImageResourceEditor'));
const TimetableEditor = lazy(() => import('pages/Timetable/Admin/TimetableEditor'));
const DisciplineEditor = lazy(() => import('pages/Timetable/Admin/DisciplineEditor'));

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/duty/:id" element={<DutyEditor />} />
      <Route path="/timetable/:id" element={<TimetableEditor />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/duty" element={<Duty />} />
      <Route path="/duty/create" element={<DutyEditor />} />
      <Route path="/enrollment" element={<EnrollmentEditor />} />
      <Route path="/timetable/create" element={<TimetableEditor />} />
      <Route path="/spaces" element={<OurSpace />} />
      <Route path="/protocol" element={<Protocol />} />
      <Route path="/timetable" element={<TimeTable />} />
      <Route path="/discipline" element={<DisciplineEditor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password" element={<Login />} />
      <Route path="/recovery" element={<RecoveryPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resource" element={<ImageResourceEditor />} />
      <Route path="/resource/:id" element={<ImageResourceEditor />} />
    </Routes>
  </Suspense>
);

export default Router;
