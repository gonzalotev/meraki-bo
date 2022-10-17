import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import * as actions from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchProtocol);
    yield put(actions.protocolFetchSuccess({ protocol: data }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(actions.protocolFetchError({ error }));
  }
}

export function* save({ payload }) {
  try {
    const { data } = yield call(Service.saveProtocol, payload);
    yield put(actions.protocolSaveSuccess({ protocol: data }));
    toastNotify('Se guardaron los cambios', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(actions.protocolSaveError({ error }));
  }
}

export default function* protocolSaga() {
  yield takeLatest(actions.protocolFetchRequest, fetch);
  yield takeLatest(actions.protocolSaveRequest, save);
}
