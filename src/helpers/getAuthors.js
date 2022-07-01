export const GetAuthors = (authors, mockedAuthorsList) => {
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
