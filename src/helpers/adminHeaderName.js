export const adminHeader = (name) => {
  if (name === 'null') {
    return JSON.parse(name) ? name : 'admin';
  } else {
    return name ? name : 'admin';
  }
};
