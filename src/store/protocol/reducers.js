import { createReducer } from 'reduxsauce';
import { protocolTypes } from './actions';
import { initialState } from './initial-state';

const fetchRequest = (state) => ({
  ...state,
  error: null,
  isFetching: true,
});

const fetchSuccess = (state, { protocol }) => ({
  ...state,
  protocol,
  error: null,
  isFetching: false,
});

const fetchError = () => ({
  error: true,
});

const reducer = createReducer(initialState, {
  [protocolTypes.PROTOCOL_FETCH_REQUEST]: fetchRequest,
  [protocolTypes.PROTOCOL_FETCH_SUCCESS]: fetchSuccess,
  [protocolTypes.PROTOCOL_FETCH_ERROR]: fetchError,
});

export default reducer;
