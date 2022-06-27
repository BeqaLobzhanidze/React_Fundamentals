export const GetCourseDuration = (num) => {
	let minutes = num % 60;
	let hours = (num - minutes) / 60;
	let prefixH = hours < 10 ? '0' : '';
	let prefixM = minutes < 10 ? '0' : '';
	return prefixH + hours.toString() + ':' + prefixM + minutes.toString();
};
