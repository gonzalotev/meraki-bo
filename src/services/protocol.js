import Http from './http';

class ProtocolService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchProtocol = () => this.http.get('public/protocol');

  saveProtocol = (protocol) => this.http.put('protocol', protocol);
}

export default ProtocolService;
