import { addMethod, array, object } from 'yup';

export function unique(message, mapper = a => a) {
  return this.test('unique', message, (list = []) => list.length === new Set(list.map(mapper)).size);
}

export function uniqueProperty(propertyName, message) {
  // eslint-disable-next-line func-names
  return this.test('uniqueProperty', message, function (value) {
    if (!value || !value[propertyName]) {
      return true;
    }

    if (
      this.parent
        .filter(parent => parent !== value)
        .some(parent => parent[propertyName] === value[propertyName])
    ) {
      throw this.createError({
        path: `${this.path}.${propertyName}`,
      });
    }

    return true;
  });
}

addMethod(array, 'unique', unique);

addMethod(object, 'uniqueProperty', uniqueProperty);
