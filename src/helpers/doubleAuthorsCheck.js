export const DoubleAuthorCheck = (prevAuthors, ActualAuthors) => {
	const result = [];
	let check = true;
	for (let actualAuthor of ActualAuthors) {
		for (let prevAuthor of prevAuthors) {
			if (prevAuthor.name === actualAuthor.name) {
				check = false;
				break;
			}
		}
		if (check) result.push(actualAuthor);
		check = true;
	}
	return result;
};
