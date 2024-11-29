export const jobStatus = ["Employed", "Self Employed", "Part Time", "Career Break"] as const;

export const pickerAdaptor = jobStatus.map((item) => ({
  key: item,
  label: item,
  value: item,
}));
