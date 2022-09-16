import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Form from '../pages/form';
import Duty from '../pages/duty';
import OurSpace from '../pages/ourSpace';
import Protocol from '../pages/protocol';
import TimeTable from '../pages/timetable';
import Login from '../pages/login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Content } from './styled';
import { getToken } from '../services/storage';

const Roots = () => {
  const token = getToken();

  return (
    <Container id="body">
      <Header />
      <Content id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormularioDeInscripcion" element={<Form />} />
          <Route path="/Aranceles" element={<Duty />} />
          <Route path="/NuestroEspacio" element={<OurSpace />} />
          <Route path="/Protocolo" element={<Protocol />} />
          <Route path="/Horarios" element={<TimeTable />} />
          <Route path="/Ingresar" element={<Login />} />
          <Route path="/CambiarPassword" element={<Login />} />
          {!token && <Route path="/Recuperar" element={<RecoveryPassword />} />}
        </Routes>
      </Content>
      <Footer />
    </Container>
  );
};

export default Roots;
