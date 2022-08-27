import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import protocol from './protocol/reducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    protocol,
  });
