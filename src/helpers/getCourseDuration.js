export const GetCourseDuration = (num) => {
  const minutes = num % 60;
  const hours = (num - minutes) / 60;
  const prefixH = hours < 10 ? '0' : '';
  const prefixM = minutes < 10 ? '0' : '';
  return prefixH + hours.toString() + ':' + prefixM + minutes.toString();
};
