export const errorHandler = (error: any): string => {
  const { data } = error.response;

  if (Array.isArray(data)) {
    return data[0].message;
  }

  return data.message;
};
