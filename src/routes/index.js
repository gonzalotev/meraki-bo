import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Form from '../pages/form';
import About from '../pages/about';
import Duty from '../pages/duty';
import OurSpace from '../pages/ourSpace';
import Protocol from '../pages/protocol';
import TimeTable from '../pages/timetable';
import Login from '../pages/login';
import ResetPassword from '../pages/Reset-password';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Content } from './styled';

const Roots = () => (
  <Container id="body">
    <Header />
    <Content id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FormularioDeInscripcion" element={<Form />} />
        <Route path="/Contacto" element={<About />} />
        <Route path="/Aranceles" element={<Duty />} />
        <Route path="/NuestroEspacio" element={<OurSpace />} />
        <Route path="/Protocolo" element={<Protocol />} />
        <Route path="/Horarios" element={<TimeTable />} />
        <Route path="/Ingresar" element={<Login />} />
        <Route path="/Recuperar-Contraseña" element={<ResetPassword />} />
      </Routes>
    </Content>
    <Footer />
  </Container>
);

export default Roots;
