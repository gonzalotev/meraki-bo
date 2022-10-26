import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service, { storageService } from 'services';
import { push } from 'redux-first-history';
import {
  loginSuccess,
  loginError,
  loginRequest,
  logoutRequest,
  recoveryPasswordRequest,
  recoveryPasswordSuccess,
  recoveryPasswordError,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
  getSessionRequest,
  getSessionSuccess,
  getSessionError,
  registerRequest, registerSuccess, registerError,
} from './reducer';
import { parseErrorResponse } from '../helper/statusStateFactory';
import { handlerError } from '../app/saga';

export function* login({ payload }) {
  try {
    const { data } = yield call(Service.login, payload);
    yield call(storageService.setToken, data.token);
    yield put(loginSuccess({ user: data.user, token: data.token }));
    yield put(push('/'));
  } catch (error) {
    yield call(handlerError, error, loginError);
  }
}

export function* register({ payload }) {
  try {
    const { data } = yield call(Service.register, payload);
    yield call(storageService.setToken, data.token);
    yield put(registerSuccess());
    yield put(push('/'));
  } catch (error) {
    toastNotify(parseErrorResponse(error));
    yield put(registerError({ error }));
  }
}

export function* recoveryPassword({ payload }) {
  try {
    yield call(Service.recoveryPassword, payload.email, payload.answers);
    yield put(recoveryPasswordSuccess());
  } catch (error) {
    toastNotify('Usuario inexistente.');
    yield put(recoveryPasswordError({ error }));
  }
}

export function* resetPassword({ payload }) {
  try {
    yield call(Service.resetPassword, { password: payload.password, token: payload.token });
    yield put(resetPasswordSuccess());
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(resetPasswordError({ error }));
  }
}

export function* getSession() {
  try {
    const { data } = yield call(Service.getSessionUser);
    yield put(getSessionSuccess({ user: data.user, token: data.token }));
  } catch (error) {
    yield put(getSessionError({ error }));
  }
}

export function* logout() {
  yield call(storageService.removeToken);
  window.location = '/';
}

export default function* saga() {
  yield takeLatest(loginRequest, login);
  yield takeLatest(registerRequest, register);
  yield takeLatest(logoutRequest, logout);
  yield takeLatest(recoveryPasswordRequest, recoveryPassword);
  yield takeLatest(resetPasswordRequest, resetPassword);
  yield takeLatest(getSessionRequest, getSession);
}
