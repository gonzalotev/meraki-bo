import { call, put, throttle, takeLatest } from 'redux-saga/effects';
import actionCreator, { protocolTypes } from './actions';
import { toastNotify } from 'utils';
import { fetchAll } from '../../services/protocol';

export function* fetch() {
  try {
    const protocol = yield call(fetchAll);
    if (protocol) {
      console.log('if');
      yield put(actionCreator.protocolFetchSuccess(protocol));
    } else {
      console.log('else');
      toastNotify('Se produjo un error.');
      yield put(actionCreator.protocolFetchError('error'));
    }
  } catch (error) {
    console.log('catch');
    toastNotify('Error en cliente.');
    yield put(actionCreator.protocolFetchError(error));
  }
}

export function* protocolSaga() {
  yield takeLatest(protocolTypes.PROTOCOL_FETCH_REQUEST, fetch);
}
