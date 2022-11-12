import { select } from 'redux-saga/effects';
import { StorageService } from 'services';
import { selectToken } from '../session/selector';

function* createService(Service) {
  let token = yield select(selectToken);
  if (!token) {
    token = StorageService.getToken();
  }
  return new Service(token);
}

export default createService;
