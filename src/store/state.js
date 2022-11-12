import { all, take, race } from 'redux-saga/effects';
import { cancel } from 'store/app/reducer';
import { reducer as appReducers, saga as appSaga } from './app';
import { reducer as disciplineReducers, saga as disciplineSaga } from './discipline';
import { reducer as dutyReducers, saga as dutySaga } from './duty';
import { reducer as inscriptionReducers, saga as inscriptionSaga } from './inscription';
import { reducer as protocolReducers, saga as protocolSaga } from './protocol';
import { reducer as resourceReducers, saga as resourceSaga } from './resource';
import { reducer as sessionReducers, saga as sessionSaga } from './session';
import { reducer as staticDataReducers, saga as staticDataSaga } from './staticData';
import { reducer as timetableReducers, saga as timetableSaga } from './timetable';

export function* rootSaga() {
  yield race([
    take(cancel),
    all([
      appSaga(),
      disciplineSaga(),
      dutySaga(),
      inscriptionSaga(),
      protocolSaga(),
      resourceSaga(),
      sessionSaga(),
      staticDataSaga(),
      timetableSaga(),
    ]),
  ]);
}

export const reducers = {
  app: appReducers,
  discipline: disciplineReducers,
  duty: dutyReducers,
  inscription: inscriptionReducers,
  protocol: protocolReducers,
  resource: resourceReducers,
  session: sessionReducers,
  staticData: staticDataReducers,
  timetable: timetableReducers,
};
