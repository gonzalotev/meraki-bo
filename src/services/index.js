import AppService from './app';
import DisciplineService from './discipline';
import DutyService from './duty';
import EnrollmentService from './enrollment';
import InscriptionService from './inscription';
import protocolService from './protocol';
import ResourceService from './resource';
import sessionService from './session';
import StaticDataService from './staticData';
import storageService from './storage';
import TimetableService from './timetable';
import { setupApi } from './http';

setupApi();

const api = {
  ...AppService,
  ...DisciplineService,
  ...DutyService,
  ...EnrollmentService,
  ...InscriptionService,
  ...protocolService,
  ...ResourceService,
  ...sessionService,
  ...StaticDataService,
  ...TimetableService,
};

export { storageService };

export default api;
