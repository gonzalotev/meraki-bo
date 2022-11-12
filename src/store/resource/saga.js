import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { ResourceService } from 'services';
import { push } from 'redux-first-history';
import { messages } from 'constant';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* fetchResource({ payload }) {
  try {
    const resourceService = yield call(createService, ResourceService);
    const response = yield call(resourceService.fetchResource, payload);
    yield put(actions.fetchResourceSuccess({ data: response }));
  } catch (error) {
    yield call(handlerError, error, actions.fetchResourceError);
  }
}

export function* saveImageResource({ payload }) {
  try {
    const resourceService = yield call(createService, ResourceService);
    yield call(resourceService.saveImageResource, payload);
    yield put(actions.saveImageResourceSuccess());
    yield put(push(payload.origin || '/'));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.saveImageResourceError);
  }
}

export function* removeImageResource({ payload }) {
  try {
    const resourceService = yield call(createService, ResourceService);
    yield call(resourceService.removeResource, payload);
    yield put(actions.removeImageResourceSuccess(payload));
    toastNotify(messages.REMOVE_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.removeImageResourceError);
  }
}

export default function* saga() {
  yield takeLatest(actions.fetchResourceRequest, fetchResource);
  yield takeLatest(actions.saveImageResourceRequest, saveImageResource);
  yield takeLatest(actions.removeImageResourceRequest, removeImageResource);
}
