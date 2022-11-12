import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import theme from 'theme';
import Routes from './routes';
import { history, store } from './store';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ToastContainer />
      <Router history={history}>
        <Routes />
      </Router>
    </ChakraProvider>
  </Provider>,
);
