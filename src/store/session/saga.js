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
} from './reducer';
import { parseErrorResponse } from '../helper/statusStateFactory';

export function* login({ payload }) {
  try {
    const { data } = yield call(Service.login, payload);
    yield call(storageService.setToken, data.token);
    yield put(loginSuccess({ user: data.user, token: data.token }));
    yield put(push('/'));
  } catch (error) {
    toastNotify(parseErrorResponse(error));
    yield put(loginError({ error }));
  }
}

export function* recoveryPassword({ payload }) {
  try {
    const { data } = yield call(Service.recoveryPassword, payload.email, payload.answers);
    yield put(recoveryPasswordSuccess({ user: data.user, recoveryToken: data.recoveryToken }));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(recoveryPasswordError({ error }));
  }
}

export function* resetPassword({ payload }) {
  try {
    yield call(Service.resetPassword, { password: payload.password, recoveryToken: payload.recoveryToken });
    yield put(resetPasswordSuccess());
    yield put(push('/Ingresar'));
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(resetPasswordError({ error }));
  }
}

export function* logout() {
  yield call(storageService.removeToken);
  window.location = '/';
}

export default function* saga() {
  yield takeLatest(loginRequest, login);
  yield takeLatest(logoutRequest, logout);
  yield takeLatest(recoveryPasswordRequest, recoveryPassword);
  yield takeLatest(resetPasswordRequest, resetPassword);
}
