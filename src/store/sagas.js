import { all } from 'redux-saga/effects';
import { protocolSaga } from './protocol/saga';

export default function* rootSaga() {
  yield all([protocolSaga()]);
}
