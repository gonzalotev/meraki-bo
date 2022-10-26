import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { push } from 'redux-first-history';
import { messages } from 'constant';
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
import { handlerError } from '../app/saga';

export function* fetchResource({ payload }) {
  try {
    const { data } = yield call(Service.fetchResource, payload);
    yield put(fetchResourceSuccess({ data }));
  } catch (error) {
    yield call(handlerError, error, fetchResourceError);
  }
}

export function* saveImageResource({ payload }) {
  try {
    yield call(Service.saveImageResource, payload);
    yield put(saveImageResourceSuccess());
    yield put(push(payload.origin || '/'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, saveImageResourceError);
  }
}

export function* removeImageResource({ payload }) {
  try {
    yield call(Service.removeResource, payload);
    yield put(removeImageResourceSuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, removeImageResourceError);
  }
}

export default function* saga() {
  yield takeLatest(fetchResourceRequest, fetchResource);
  yield takeLatest(saveImageResourceRequest, saveImageResource);
  yield takeLatest(removeImageResourceRequest, removeImageResource);
}
