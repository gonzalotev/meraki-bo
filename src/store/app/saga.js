import { call, put, takeLatest } from 'redux-saga/effects';
import { AppService } from 'services';
import FileSaver from 'file-saver';
import createService from 'store/helper/createService';
import { handlerError } from 'store/helper/handlers';
import * as actions from './reducer';

export function* download({ payload }) {
  try {
    const appService = yield call(createService, AppService);
    const response = yield call(appService.downloadExcel, payload);
    yield call(FileSaver.saveAs, new window.Blob([response]), `${payload.fileName}.xlsx`);
    yield put(actions.downloadExcelSuccess());
  } catch (error) {
    yield call(handlerError, error, actions.downloadExcelError);
  }
}

export default function* saga() {
  yield takeLatest(actions.downloadExcelRequest, download);
}
