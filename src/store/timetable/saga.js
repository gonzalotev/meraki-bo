import { call, put, takeLatest } from 'redux-saga/effects';
import { timetableFetchSuccess, timetableFetchError, timetableFetchRequest } from './reducer';
import { toastNotify } from '../../utils';
import Service from '../../services';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchTimetable);
    yield put(timetableFetchSuccess({ timetable: data }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(timetableFetchError({ error }));
  }
}

export default function* timetableSaga() {
  yield takeLatest(timetableFetchRequest, fetch);
}
