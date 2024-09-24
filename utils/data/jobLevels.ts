export const jobLevels = [
  "Training",
  "Entry",
  "Junior",
  "Mid",
  "Senior",
  "Manager",
  "Department Head",
  "Director",
  "VP",
  "CXO",
  "Owner",
  "Partner",
] as const;

export const pickerAdaptor = jobLevels.map((item) => ({
  key: item,
  label: item,
  value: item,
}));
