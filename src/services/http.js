const DOMAIN = process.env.REACT_APP_ENDPOINT;
const JSON_MIME_TYPE = 'application/json';
const PDF_MIME_TYPE = 'application/pdf';

class Http {
  constructor(idToken, endpoint) {
    this.idToken = idToken;
    this.endpoint = !endpoint?.startsWith('http') ? `${DOMAIN}/${endpoint}` : endpoint;
  }

  getUrl = url => (url ? `${this.endpoint}/${url}` : this.endpoint);

  /**
   * Get the session token.
   * @returns {string} Returns the current session token.
   */
  getIdToken = () => this.idToken;

  /**
   * Check if a token session is present.
   * @returns {boolean} Returns True when a token is present.
   */
  hasSession = () => !!this.idToken;

  /**
   * Get a Bearer Auth Header for make HTTP requests.
   * @returns {any} An authorization header.
   */
  getAuthHeader = () => (this.hasSession() ? { Authorization: `Bearer ${this.idToken}` } : undefined);

  getSearchParams = params => {
    if (!params) {
      return '';
    }
    const searchParams = new URLSearchParams();
    Object.entries(params)
      .filter(([key, value]) => key && value !== undefined && value !== null)
      .forEach(([key, value]) => searchParams.append(key, value));
    return `?${searchParams.toString()}`;
  };

  processResponse = async response => {
    if (response.ok) {
      return response.json();
    }
    const error = new Error(response.message);
    error.status = response.status;
    error.response = await response?.json();
    throw error;
  };

  get = async (url, params) => {
    const response = await fetch(`${this.getUrl(url)}${this.getSearchParams(params)}`, {
      headers: {
        ...this.getAuthHeader(),
        Accept: JSON_MIME_TYPE,
      },
    });
    return this.processResponse(response);
  };

  post = async (url, data) => {
    const response = await fetch(this.getUrl(url), {
      method: 'POST',
      headers: {
        ...this.getAuthHeader(),
        'Content-Type': JSON_MIME_TYPE,
      },
      body: JSON.stringify(data),
    });
    return this.processResponse(response);
  };

  getFile = async (url, data) => {
    const response = await fetch(this.getUrl(url), {
      method: 'GET',
      headers: {
        ...this.getAuthHeader(),
        'Content-Type': PDF_MIME_TYPE,
      },
      body: JSON.stringify(data),
    });
    return response.blob();
  };

  patch = async (url, data) => {
    const response = await fetch(this.getUrl(url), {
      method: 'PATCH',
      headers: {
        ...this.getAuthHeader(),
        'Content-Type': JSON_MIME_TYPE,
      },
      body: JSON.stringify(data),
    });
    return this.processResponse(response);
  };

  put = async (url, data) => {
    const response = await fetch(this.getUrl(url), {
      method: 'PUT',
      headers: {
        ...this.getAuthHeader(),
        'Content-Type': JSON_MIME_TYPE,
      },
      body: JSON.stringify(data),
    });
    return this.processResponse(response);
  };

  delete = async (url, data) => {
    const response = await fetch(this.getUrl(url), {
      method: 'DELETE',
      headers: {
        ...this.getAuthHeader(),
        'Content-Type': JSON_MIME_TYPE,
      },
      body: JSON.stringify(data),
    });
    return this.processResponse(response);
  };
}

export default Http;
