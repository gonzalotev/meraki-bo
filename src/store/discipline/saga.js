import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { push } from 'redux-first-history';
import Service from 'services';
import { messages } from 'constant';
import {
  saveDisciplineRequest,
  saveDisciplineSuccess,
  saveDisciplineError,
} from './reducer';
import { fetchStaticDataRequest } from '../staticData/reducer';
import { handlerError } from '../app/saga';

export function* save({ payload }) {
  try {
    yield call(Service.saveStaticData, payload);
    yield put(saveDisciplineSuccess());
    yield put(fetchStaticDataRequest());
    yield put(push('/timetable'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, saveDisciplineError);
  }
}

export default function* saga() {
  yield takeLatest(saveDisciplineRequest, save);
}
