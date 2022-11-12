import { put, call } from 'redux-saga/effects';
import { logout } from 'store/session/saga';
import { toastNotify } from 'utils';
import { cancel } from 'store/app/reducer';
import { parseErrorResponse } from './statusStateFactory';

export function* handlerError(error, action) {
  if (error.status === 401) {
    yield call(logout);
  } else {
    const message = parseErrorResponse(error);
    yield call(toastNotify, message);
    yield put(action(message));
  }
  if (error.message === 'Failed to fetch' || error?.response?.message === 'Too many connections') {
    yield put(cancel());
  }
}
