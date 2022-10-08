import protocolService from './protocol';
import sessionService from './session';
import storageService from './storage';
import TimetableService from './timetable';
import DutyService from './duty';
import StaticDataService from './staticData';
import InscriptionService from './inscription';
import HomeService from './home';

import { setupApi } from './http';

setupApi();

const api = {
  ...protocolService,
  ...sessionService,
  ...TimetableService,
  ...DutyService,
  ...StaticDataService,
  ...InscriptionService,
  ...HomeService,
};

export {
  storageService,
};

export default api;
