import isBoolean from 'lodash/isBoolean';
import mapValues from 'lodash/mapValues';
import trim from 'lodash/trim';

const buildQueryString = params => {
  const searchParams = new URLSearchParams();
  mapValues(params, (value, key) => {
    if (value || isBoolean(value) || value === 0) {
      searchParams.set(key, key === 'term' ? encodeURIComponent(trim(value)) : value);
    }
  });
  return `?${searchParams.toString()}`;
};

export default buildQueryString;
