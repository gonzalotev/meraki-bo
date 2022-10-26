import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { push } from 'redux-first-history';
import { messages } from 'constant';
import {
  fetchDutiesError,
  fetchDutiesSuccess,
  fetchDutiesRequest,
  fetchDutyRequest,
  fetchDutySuccess,
  fetchDutyError,
  saveDutyRequest,
  saveDutySuccess,
  saveDutyError,
  saveEnrollmentRequest,
  saveEnrollmentSuccess,
  saveEnrollmentError,
  removeDutyRequest,
  removeDutySuccess,
  removeDutyError,
} from './reducer';
import { handlerError } from '../app/saga';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchDuties);
    const { data: enrollment } = yield call(Service.fetchEnrollment);
    yield put(fetchDutiesSuccess({ duties: data.duties, enrollment }));
  } catch (error) {
    yield call(handlerError, error, fetchDutiesError);
  }
}

export function* find({ payload }) {
  try {
    const { data } = yield call(Service.findDuty, payload.id);
    yield put(fetchDutySuccess({ duty: data.duty }));
  } catch (error) {
    yield call(handlerError, error, fetchDutyError);
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveDuty, payload);
    yield put(saveDutySuccess());
    yield put(push('/duty'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, saveEnrollmentError);
  }
}

export function* saveEnrollment({ payload }) {
  try {
    yield call(Service.saveEnrollment, payload);
    yield put(saveEnrollmentSuccess());
    yield put(push('/duty'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, saveDutyError);
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.remove, payload);
    yield put(removeDutySuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, removeDutyError);
  }
}

export default function* saga() {
  yield takeLatest(fetchDutiesRequest, fetch);
  yield takeLatest(fetchDutyRequest, find);
  yield takeLatest(saveDutyRequest, save);
  yield takeLatest(saveEnrollmentRequest, saveEnrollment);
  yield takeLatest(removeDutyRequest, remove);
}
