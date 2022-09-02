import { call, put, takeLatest } from 'redux-saga/effects';
import { protocolFetchSuccess, protocolFetchError, protocolFetchRequest } from './reducer';
import { toastNotify } from '../../utils';
import Service from '../../services';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchProtocol);
    console.log(data);
    yield put(protocolFetchSuccess({ protocol: data }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(protocolFetchError({ error }));
  }
}

export default function* protocolSaga() {
  yield takeLatest(protocolFetchRequest, fetch);
}
