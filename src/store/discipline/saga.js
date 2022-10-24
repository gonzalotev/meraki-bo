import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { push } from 'redux-first-history';
import Service from 'services';
import {
  saveDisciplineRequest,
  saveDisciplineSuccess,
  saveDisciplineError,
} from './reducer';
import { fetchStaticDataRequest } from '../staticData/reducer';

export function* save({ payload }) {
  try {
    yield call(Service.saveStaticData, payload);
    yield put(saveDisciplineSuccess());
    yield put(fetchStaticDataRequest());
    yield put(push('/timetable'));
    toastNotify(`Se guardo la Disciplina: ${payload.name}`, 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveDisciplineError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(saveDisciplineRequest, save);
}
