import axios from 'axios';

const ProtocolService = {
  fetchProtocol: () => axios.get('/api/protocol'),
};

export default ProtocolService;
