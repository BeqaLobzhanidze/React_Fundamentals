export const SearchByNameOrId = (List, searchKeyword) => {
  const keywordLowerCase = searchKeyword.toLowerCase();
  return List.filter((course) => {
    const titleLower = course.title.toLowerCase();
    const idLower = course.id.toLowerCase();

    return (
      titleLower.includes(keywordLowerCase) ||
      idLower.includes(keywordLowerCase)
    );
  });
};
