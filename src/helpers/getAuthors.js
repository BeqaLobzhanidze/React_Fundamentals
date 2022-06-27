export const GetAuthors = (authors, mockedAuthorsList) => {
	let result = [];
	for (let auth of authors) {
		for (let authName of mockedAuthorsList) {
			if (auth === authName.id) {
				result.push(authName.name);
			}
		}
	}
	return result;
};
