import { all } from 'redux-saga/effects';
import { reducer as protocolReducers, saga as protocolSaga } from './protocol';

export function* rootSaga() {
  yield all([protocolSaga()]);
}

export const reducers = {
  protocol: protocolReducers,
};
