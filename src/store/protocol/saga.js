import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import { messages } from 'constant';
import * as actions from './reducer';
import { handlerError } from '../app/saga';

export function* fetch() {
  try {
    const { data } = yield call(Service.fetchProtocol);
    yield put(actions.protocolFetchSuccess({ protocol: data }));
  } catch (error) {
    yield call(handlerError, error, actions.protocolFetchError);
  }
}

export function* save({ payload }) {
  try {
    const { data } = yield call(Service.saveProtocol, payload);
    yield put(actions.protocolSaveSuccess({ protocol: data }));
    toastNotify(messages.REGISTER_SUCCESS, 'success');
  } catch (error) {
    yield call(handlerError, error, actions.protocolSaveError);
  }
}

export default function* protocolSaga() {
  yield takeLatest(actions.protocolFetchRequest, fetch);
  yield takeLatest(actions.protocolSaveRequest, save);
}
