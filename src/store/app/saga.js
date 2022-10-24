import { call, put, takeLatest } from 'redux-saga/effects';
import { toastNotify } from 'utils';
import Service from 'services';
import FileSaver from 'file-saver';

import {
  downloadExcelRequest,
  downloadExcelSuccess,
  downloadExcelError,
} from './reducer';

export function* download({ payload }) {
  try {
    const { data } = yield call(Service.downloadExcel, payload);
    yield call(FileSaver.saveAs, new window.Blob([data]), `${payload.fileName}.xlsx`);
    yield put(downloadExcelSuccess());
  } catch (error) {
    toastNotify('Error en cliente.');
    yield put(downloadExcelError({ error }));
  }
}

export function* handlerError(error, action) {
  const message = error.response?.data?.message || error.message || 'Error en cliente.';
  if (action) {
    yield put(action(error));
  }
  yield call(toastNotify, message);
}

export default function* saga() {
  yield takeLatest(downloadExcelRequest, download);
}
