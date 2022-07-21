export const getAuthorsWithId = (authors, mockedAuthorsList) => {
  if (mockedAuthorsList[mockedAuthorsList.length - 1] == null)
    mockedAuthorsList = mockedAuthorsList.pop();
  const result = [];
  for (let auth of authors) {
    for (let authName of mockedAuthorsList) {
      if (auth === authName.id) {
        result.push({ name: authName.name, id: authName.id });
      }
    }
  }
  return result;
};
