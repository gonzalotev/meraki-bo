import { all } from 'redux-saga/effects';
import { reducer as protocolReducers, saga as protocolSaga } from './protocol';
import { reducer as sessionReducers, saga as sessionSaga } from './session';
import { reducer as timetableReducers, saga as timetableSaga } from './timetable';
import { reducer as dutyReducers, saga as dutySaga } from './duty';
import { reducer as staticDataReducers, saga as staticDataSaga } from './staticData';
import { reducer as homeReducers, saga as homeSaga } from './home';
import { reducer as inscriptionReducers, saga as inscriptionSaga } from './inscription';

export function* rootSaga() {
  yield all([
    protocolSaga(),
    sessionSaga(),
    timetableSaga(),
    dutySaga(),
    staticDataSaga(),
    homeSaga(),
    inscriptionSaga()]);
}

export const reducers = {
  protocol: protocolReducers,
  session: sessionReducers,
  timetable: timetableReducers,
  duty: dutyReducers,
  staticData: staticDataReducers,
  home: homeReducers,
  inscription: inscriptionReducers,
};
