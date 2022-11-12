import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { TimetableService } from 'services';
import { push } from 'redux-first-history';
import { messages } from 'constant';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* fetch() {
  try {
    const timetableService = yield call(createService, TimetableService);
    const { timetables } = yield call(timetableService.fetchTimetable);
    yield put(actions.fetchTimetablesSuccess({ timetables }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchTimetablesError);
  }
}
export function* find({ payload }) {
  try {
    const timetableService = yield call(createService, TimetableService);
    const { timetable } = yield call(timetableService.findTimetable, payload.id);
    yield put(actions.fetchTimetableSuccess({ timetable }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchTimetableError);
  }
}

export function* save({ payload }) {
  try {
    const timetableService = yield call(createService, TimetableService);
    yield call(timetableService.saveTimetable, payload);
    yield put(actions.saveTimetableSuccess());
    yield put(push('/timetable'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.saveTimetableError);
  }
}

export function* remove({ payload }) {
  try {
    const timetableService = yield call(createService, TimetableService);
    yield call(timetableService.removeTimetable, payload);
    yield put(actions.removeTimetableSuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.removeTimetableError);
  }
}

export default function* timetableSaga() {
  yield takeLatest(actions.fetchTimetablesRequest, fetch);
  yield takeLatest(actions.fetchTimetableRequest, find);
  yield takeLatest(actions.saveTimetableRequest, save);
  yield takeLatest(actions.removeTimetableRequest, remove);
}
