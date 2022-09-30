import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import {
  fetchDutiesError,
  fetchDutiesSuccess,
  fetchDutiesRequest,
  findDutyRequest,
  findDutySuccess,
  findDutyError,
  cleanValues,
  saveDutyRequest,
  saveDutySuccess,
  saveDutyError,
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

export function* find({ values }) {
  try {
    const { data } = yield call(Service.findDuty, values);
    yield put(findDutySuccess({ duty: data.duty }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(findDutyError({ error }));
  }
}

export function* save({ values }) {
  try {
    const { duty } = yield call(Service.saveDuty, values);
    if (duty) {
      yield put(saveDutySuccess(duty));
      toastNotify(`Se guardo el Arancel: ${duty.name}`);
    }
    yield put(cleanValues());
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveDutyError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchDutiesRequest, fetch);
  yield takeLatest(findDutyRequest, find);
  yield takeLatest(saveDutyRequest, save);
}
