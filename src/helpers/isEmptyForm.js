export const isEmptyForm = (title, description, list, duration) => {
  return (
    title.length < 2 ||
    description.length < 2 ||
    list.length === 0 ||
    duration <= 0
  );
};
