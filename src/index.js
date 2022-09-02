import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import Routes from './routes';
import { history, store } from './store';
import { GlobalStyle } from './styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
);
