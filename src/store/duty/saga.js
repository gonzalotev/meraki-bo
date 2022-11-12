import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { DutyService, EnrollmentService } from 'services';
import { push } from 'redux-first-history';
import { messages } from 'constant';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* fetch() {
  try {
    const dutyService = yield call(createService, DutyService);
    const { duties } = yield call(dutyService.fetchDuties);
    const enrollmentService = yield call(createService, EnrollmentService);
    const { enrollment } = yield call(enrollmentService.fetchEnrollment);
    yield put(actions.fetchDutiesSuccess({ duties, enrollment }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchDutiesError);
  }
}

export function* find({ payload }) {
  try {
    const dutyService = yield call(createService, DutyService);
    const { duty } = yield call(dutyService.findDuty, payload.id);
    yield put(actions.fetchDutySuccess({ duty }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchDutyError);
  }
}

export function* save({ payload }) {
  try {
    const dutyService = yield call(createService, DutyService);
    yield call(dutyService.saveDuty, payload);
    yield put(actions.saveDutySuccess());
    yield put(push('/duty'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.saveEnrollmentError);
  }
}

export function* saveEnrollment({ payload }) {
  try {
    const enrollmentService = yield call(createService, EnrollmentService);
    yield call(enrollmentService.saveEnrollment, payload);
    yield put(actions.saveEnrollmentSuccess());
    yield put(push('/duty'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.saveDutyError);
  }
}

export function* remove({ payload }) {
  try {
    const dutyService = yield call(createService, DutyService);
    yield call(dutyService.remove, payload);
    yield put(actions.removeDutySuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.removeDutyError);
  }
}

export default function* saga() {
  yield takeLatest(actions.fetchDutiesRequest, fetch);
  yield takeLatest(actions.fetchDutyRequest, find);
  yield takeLatest(actions.saveDutyRequest, save);
  yield takeLatest(actions.saveEnrollmentRequest, saveEnrollment);
  yield takeLatest(actions.removeDutyRequest, remove);
}
