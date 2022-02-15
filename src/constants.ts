export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const next50Years = [...Array(50).keys()].map(
  (key) => Number(new Date().getFullYear()) + key
);
