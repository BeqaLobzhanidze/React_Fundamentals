export const CorrectAuthorsFormat = (list) => {
	let result = [];
	for (let author of list) {
		result.push(author.id);
	}
	return result;
};
