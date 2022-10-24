import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { push } from 'redux-first-history';
import {
  fetchDutiesError,
  fetchDutiesSuccess,
  fetchDutiesRequest,
  fetchDutyRequest,
  fetchDutySuccess,
  fetchDutyError,
  saveDutyRequest,
  saveDutySuccess,
  saveDutyError, removeDutyRequest, removeDutySuccess, removeDutyError,
} from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchDuties);
    yield put(fetchDutiesSuccess({ duties: data.duties }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchDutiesError({ error }));
  }
}

export function* find({ payload }) {
  try {
    const { data } = yield call(Service.findDuty, payload.id);
    yield put(fetchDutySuccess({ duty: data.duty }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchDutyError({ error }));
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveDuty, payload);
    yield put(saveDutySuccess());
    yield put(push('/duty'));
    toastNotify('Se guardó el Arancel.', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveDutyError({ error }));
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.remove, payload);
    yield put(removeDutySuccess(payload));
    toastNotify('Se borro el arancel.', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(removeDutyError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchDutiesRequest, fetch);
  yield takeLatest(fetchDutyRequest, find);
  yield takeLatest(saveDutyRequest, save);
  yield takeLatest(removeDutyRequest, remove);
}
