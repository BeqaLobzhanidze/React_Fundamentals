export const SearchByNameOrId = (List, searchKeyword) => {
	console.log('search' + searchKeyword);
	let keywordLowerCase = searchKeyword.toLowerCase();
	return List.filter((course) => {
		let titleLower = course.title.toLowerCase();
		let idLower = course.id.toLowerCase();

		return (
			titleLower.includes(keywordLowerCase) ||
			idLower.includes(keywordLowerCase)
		);
	});
};
