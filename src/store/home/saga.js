import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import {
  fetchHomesRequest,
  fetchHomesSuccess,
  fetchHomesError,
  fetchHomeRequest,
  fetchHomeSuccess,
  fetchHomeError,
  saveHomeRequest,
  saveHomeSuccess,
  saveHomeError,
  removeHomeRequest,
  removeHomeSuccess,
  removeHomeError,
} from './reducer';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchHome);
    yield put(fetchHomesSuccess({ homes: data.homes }));
    console.log({ data });
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchHomesError({ error }));
  }
}

export function* find({ payload }) {
  try {
    const { data } = yield call(Service.findHome, payload.id);
    console.log({ data });
    yield put(fetchHomeSuccess({ home: data.home }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(fetchHomeError({ error }));
  }
}

export function* save({ payload }) {
  try {
    yield call(Service.saveHome, payload);
    yield put(saveHomeSuccess());
    toastNotify(`Se guardo la foto: ${payload.name}`, 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveHomeError({ error }));
  }
}

export function* remove({ payload }) {
  try {
    yield call(Service.removeHome, payload);
    yield put(removeHomeSuccess(payload));
    toastNotify('Se borro la foto', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(removeHomeError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchHomesRequest, fetch);
  yield takeLatest(fetchHomeRequest, find);
  yield takeLatest(saveHomeRequest, save);
  yield takeLatest(removeHomeRequest, remove);
}
