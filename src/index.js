import { BrowserRouter } from 'react-router-dom';
import Roots from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Header />
    <Roots />
    <Footer />
  </BrowserRouter>,
);
