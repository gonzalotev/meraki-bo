import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { protocolFetchSuccess, protocolFetchError, protocolFetchRequest } from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchProtocol);
    yield put(protocolFetchSuccess({ protocol: data }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(protocolFetchError({ error }));
  }
}

export default function* protocolSaga() {
  yield takeLatest(protocolFetchRequest, fetch);
}
