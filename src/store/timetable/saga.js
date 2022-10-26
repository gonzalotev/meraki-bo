import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { push } from 'redux-first-history';
import { messages } from 'constant';
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
import { handlerError } from '../app/saga';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchTimetable);
    yield put(fetchTimetablesSuccess({ timetables: data.timetables }));
  } catch (error) {
    yield call(handlerError, error, fetchTimetablesError);
  }
}
export function* find({ payload }) {
  try {
    const { data } = yield call(Service.findTimetable, payload.id);
    yield put(fetchTimetableSuccess({ timetable: data.timetable }));
  } catch (error) {
    yield call(handlerError, error, fetchTimetableError);
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveTimetable, payload);
    yield put(saveTimetableSuccess());
    yield put(push('/timetable'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, saveTimetableError);
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.removeTimetable, payload);
    yield put(removeTimetableSuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, removeTimetableError);
  }
}

export default function* timetableSaga() {
  yield takeLatest(fetchTimetablesRequest, fetch);
  yield takeLatest(fetchTimetableRequest, find);
  yield takeLatest(saveTimetableRequest, save);
  yield takeLatest(removeTimetableRequest, remove);
}
