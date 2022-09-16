import { call, put, takeLatest } from 'redux-saga/effects';
import { dutyFetchSuccess, dutyFetchError, dutyFetchRequest } from './reducer';
import { toastNotify } from '../../utils';
import Service from '../../services';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchDuty);
    yield put(dutyFetchSuccess({ duty: data }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(dutyFetchError({ error }));
  }
}

export default function* dutySaga() {
  yield takeLatest(dutyFetchRequest, fetch);
}
