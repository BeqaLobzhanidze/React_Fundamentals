export const GetAuthors = (authors, mockedAuthorsList) => {
  if (mockedAuthorsList[mockedAuthorsList.length - 1] == null)
    mockedAuthorsList = mockedAuthorsList.pop();
  const result = [];
  for (let auth of authors) {
    for (let authName of mockedAuthorsList) {
      if (auth === authName.id) {
        result.push(authName.name);
      }
    }
  }
  return result;
};
