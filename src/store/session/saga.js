import { call, put, takeLatest } from 'redux-saga/effects';
import { SessionService, StorageService } from 'services';
import { push } from 'redux-first-history';
import { handlerError } from 'store/helper/handlers';
import createService from 'store/helper/createService';
import * as actions from './reducer';

export function* login({ payload }) {
  try {
    const sessionService = yield call(createService, SessionService);
    const { user, token } = yield call(sessionService.login, payload);
    yield call(StorageService.setToken, token);
    yield put(actions.loginSuccess({ user, token }));
    yield put(push('/'));
  } catch (error) {
    yield call(handlerError, error, actions.loginError);
  }
}

export function* register({ payload }) {
  try {
    const sessionService = yield call(createService, SessionService);
    const { token } = yield call(sessionService.register, payload);
    yield call(StorageService.setToken, token);
    yield put(actions.registerSuccess());
    yield put(push('/'));
  } catch (error) {
    yield call(handlerError, error, actions.registerError);
  }
}

export function* recoveryPassword({ payload }) {
  try {
    const sessionService = yield call(createService, SessionService);
    yield call(sessionService.recoveryPassword, payload.email, payload.answers);
    yield put(actions.recoveryPasswordSuccess());
  } catch (error) {
    yield call(handlerError, error, actions.recoveryPasswordError);
  }
}

export function* resetPassword({ payload }) {
  try {
    const sessionService = yield call(createService, SessionService);
    yield call(sessionService.resetPassword, { password: payload.password, token: payload.token });
    yield put(actions.resetPasswordSuccess());
  } catch (error) {
    yield call(handlerError, error, actions.resetPasswordError);
  }
}

export function* getSession() {
  try {
    const sessionService = yield call(createService, SessionService);
    const { user, token } = yield call(sessionService.getSessionUser);
    yield put(actions.getSessionSuccess({ user, token }));
  } catch (error) {
    yield put(actions.getSessionError({ error }));
  }
}

export function* logout() {
  yield call(StorageService.removeToken);
  window.location = '/';
}

export default function* saga() {
  yield takeLatest(actions.loginRequest, login);
  yield takeLatest(actions.registerRequest, register);
  yield takeLatest(actions.logoutRequest, logout);
  yield takeLatest(actions.recoveryPasswordRequest, recoveryPassword);
  yield takeLatest(actions.resetPasswordRequest, resetPassword);
  yield takeLatest(actions.getSessionRequest, getSession);
}
