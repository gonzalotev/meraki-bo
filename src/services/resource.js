import Http from './http';

class ResourceService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchResource = (typeId) => this.http.get(`public/resource/${typeId}`);

  saveImageResource = ({ type, values }) => {
    if (values.id) {
      return this.http.put(`resource/image/${values.id}`, { type, values });
    }
    return this.http.post('resource/image', { type, values });
  };

  removeResource = ({ imageId }) => this.http.delete(`resource/image/${imageId}`);
}

export default ResourceService;
