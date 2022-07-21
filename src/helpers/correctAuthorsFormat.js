export const correctAuthorsFormat = (list) => {
  const result = [];
  for (let author of list) {
    result.push(author.id);
  }
  return result;
};
