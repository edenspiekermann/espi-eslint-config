export const validate = (input) => {
  if (typeof input === 'string') {
    return true;
  }

  return false;
};
