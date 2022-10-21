import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { push } from 'redux-first-history';
import Service from 'services';
import {
  fetchStaticDataRequest,
  fetchStaticDataSuccess,
  fetchStaticDataError,
  saveStaticDataRequest,
  saveStaticDataSuccess,
  saveStaticDataError,
} from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchStaticData);
    yield put(fetchStaticDataSuccess({ topics: data.topics, roles: data.roles }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchStaticDataError({ error }));
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveStaticData, payload);
    yield put(saveStaticDataSuccess());
    yield put(push('/timetable'));
    toastNotify(`Se guardo la Disciplina: ${payload.name}`, 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveStaticDataError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchStaticDataRequest, fetch);
  yield takeLatest(saveStaticDataRequest, save);
}
