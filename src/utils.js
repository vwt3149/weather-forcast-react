export const convertDateToString = (timestamp) => {
  const [dayString, monthString, dayNum] = new Date(date * 1000)
    .toDateString()
    .split(' ');

  return { dayString, monthString, dayNum };
};
