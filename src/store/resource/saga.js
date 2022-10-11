import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { push } from 'redux-first-history';
import {
  fetchResourceRequest,
  fetchResourceSuccess,
  fetchResourceError,
  saveImageResourceRequest,
  saveImageResourceSuccess,
  saveImageResourceError,
  removeImageResourceRequest,
  removeImageResourceSuccess,
  removeImageResourceError,
} from './reducer';

export function* fetchResource({ payload }) {
  try {
    const { data } = yield call(Service.fetchResource, payload);
    yield put(fetchResourceSuccess({ data }));
  } catch (error) {
    yield put(fetchResourceError({ error }));
  }
}

export function* saveImageResource({ payload }) {
  try {
    yield call(Service.saveImageResource, payload);
    yield put(saveImageResourceSuccess());
    yield put(push(payload.origin || '/'));
    toastNotify(`Se guardo la foto: ${payload.values.name}`, 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(saveImageResourceError({ error }));
  }
}

export function* removeImageResource({ payload }) {
  try {
    yield call(Service.removeResource, payload);
    yield put(removeImageResourceSuccess(payload));
    toastNotify('Se borro la foto', 'success');
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(removeImageResourceError({ error }));
  }
}

export default function* saga() {
  yield takeLatest(fetchResourceRequest, fetchResource);
  yield takeLatest(saveImageResourceRequest, saveImageResource);
  yield takeLatest(removeImageResourceRequest, removeImageResource);
}
