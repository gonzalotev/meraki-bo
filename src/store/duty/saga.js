import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { fetchDutiesError, fetchDutiesSuccess, fetchDutiesRequest } from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchDuties);
    yield put(fetchDutiesSuccess({ duties: data.duties }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchDutiesError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchDutiesRequest, fetch);
}
