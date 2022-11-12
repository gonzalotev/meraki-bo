import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import { ProtocolService } from 'services';
import { messages } from 'constant';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* fetch() {
  try {
    const protocolService = yield call(createService, ProtocolService);
    const { protocol } = yield call(protocolService.fetchProtocol);
    yield put(actions.protocolFetchSuccess({ protocol }));
  } catch (error) {
    yield call(handlerError, error, actions.protocolFetchError);
  }
}

export function* save({ payload }) {
  try {
    const protocolService = yield call(createService, ProtocolService);
    const { data } = yield call(protocolService.saveProtocol, payload);
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
