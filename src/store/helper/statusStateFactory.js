import { messages } from 'constant';

export const parseErrorResponse = error => {
  if (!error) {
    return messages.UNKNOWN_ERROR_MESSAGE;
  }
  if (!error.response) {
    if (error?.message === 'Failed to fetch') {
      return messages.UNKNOWN_ERROR_MESSAGE;
    }
    return error.message || messages.UNKNOWN_ERROR_MESSAGE;
  }
  if (typeof error.response === 'string') {
    return error.response;
  }
  const errorResponse = error.response.message || error.message;
  const err = errorResponse.errors;
  if (err && typeof err === 'object') {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in err) {
      // eslint-disable-next-line no-prototype-builtins
      if (err.hasOwnProperty(key) && err[key].length) {
        return err[key][0];
      }
    }
  }
  if (errorResponse && typeof errorResponse === 'string' && errorResponse !== 'Too many connections') {
    return errorResponse;
  }
  return messages.UNKNOWN_ERROR_MESSAGE;
};

export const getDefaultStatus = () => Object.freeze({
  isFetching: false,
  isError: false,
  errorMessage: null,
  error: null,
});

export const getStartStatus = () => Object.freeze({
  isFetched: false,
  isFetching: true,
  isError: false,
  errorMessage: null,
  error: null,
});

export const getSuccessStatus = metaData => Object.freeze({
  timestamp: new Date().toISOString(),
  success: true,
  isFetched: true,
  isFetching: false,
  isError: false,
  errorMessage: null,
  error: null,
  metaData,
});

export const getErrorStatus = errorMessage => Object.freeze({
  timestamp: new Date().toISOString(),
  isFetched: false,
  isFetching: false,
  isError: true,
  errorMessage,
});
