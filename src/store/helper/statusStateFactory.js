const UNKNOWN_ERROR_MESSAGE = 'An unknown error occurred.';

export const parseErrorResponse = error => {
  if (!error) {
    return UNKNOWN_ERROR_MESSAGE;
  }
  if (!error.response) {
    return error.message || UNKNOWN_ERROR_MESSAGE;
  }
  if (typeof error.response === 'string') {
    return error.response;
  }
  const err = error.response.errors;
  if (err && typeof err === 'object') {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in err) {
      // eslint-disable-next-line no-prototype-builtins
      if (err.hasOwnProperty(key) && err[key].length) {
        return err[key][0];
      }
    }
  }

  return UNKNOWN_ERROR_MESSAGE;
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

export const getErrorStatus = error => Object.freeze({
  timestamp: new Date().toISOString(),
  isFetched: false,
  isFetching: false,
  isError: true,
  errorMessage: parseErrorResponse(error),
  error,
});
