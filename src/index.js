import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import { history, store } from './store';
import { GlobalStyle } from './styled';
import 'utils/yupMethods';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
        <ToastContainer />
      </Router>
    </ChakraProvider>
  </Provider>,
);
