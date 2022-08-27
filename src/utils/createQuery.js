import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';

const createQuery = (queryBuilder) => {
  if (isEmpty(queryBuilder)) {
    return null;
  }
  const query = new URLSearchParams();
  map(queryBuilder, (value, key) => {
    if (value && isObject(value)) {
      query.set(key, encodeURIComponent(JSON.stringify(value)));
    } else if (value) {
      query.set(key, encodeURIComponent(value));
    }
  });
  return query.toString();
};

export default createQuery;
