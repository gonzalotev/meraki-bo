import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { push } from 'redux-first-history';
import {
  fetchTimetablesRequest,
  fetchTimetablesSuccess,
  fetchTimetablesError,
  fetchTimetableRequest,
  fetchTimetableSuccess,
  fetchTimetableError,
  saveTimetableRequest,
  saveTimetableSuccess,
  saveTimetableError,
  removeTimetableRequest,
  removeTimetableSuccess,
  removeTimetableError,
} from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchTimetable);
    yield put(fetchTimetablesSuccess({ timetables: data.timetables }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchTimetablesError({ error }));
  }
}
export function* find({ payload }) {
  try {
    const { data } = yield call(Service.findTimetable, payload.id);
    yield put(fetchTimetableSuccess({ timetable: data.timetable }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchTimetableError({ error }));
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveTimetable, payload);
    yield put(saveTimetableSuccess());
    yield put(push('/timetable'));
    toastNotify(`Se guardo el Horario: ${payload.day} a ${payload.schedule}`, 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveTimetableError({ error }));
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.removeTimetable, payload);
    yield put(removeTimetableSuccess(payload));
    toastNotify('Se borro el horario', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(removeTimetableError({ error }));
  }
}

export default function* timetableSaga() {
  yield takeLatest(fetchTimetablesRequest, fetch);
  yield takeLatest(fetchTimetableRequest, find);
  yield takeLatest(saveTimetableRequest, save);
  yield takeLatest(removeTimetableRequest, remove);
}
