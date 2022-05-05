import { BrowserRouter } from 'react-router-dom';
import Roots from './routes';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Roots />
  </BrowserRouter>
)
