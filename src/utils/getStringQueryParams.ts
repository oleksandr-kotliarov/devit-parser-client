export const getStringQueryParams = (params: object) => {
  let stringParams = '';

  for (const key in params) {
    if (params[key as keyof typeof params] !== undefined) {
      stringParams +=
        (stringParams.length > 0 ? '&' : '?') +
        key +
        '=' +
        params[key as keyof typeof params];
    }
  }

  return stringParams;
};
