export const organisationSize = [
  "Myself only",
  "2 - 10 employees",
  "11 - 50 employees",
  "51 - 200 employees",
  "201 - 500 employees",
  "501 - 1000 employees",
  "1000 - 5000 employees",
  "5001 - 10000 employees",
  "10001 employees +",
] as const;

export default organisationSize;

export const pickerAdaptor = organisationSize.map((item) => ({
  key: item,
  label: item,
  value: item,
}));
