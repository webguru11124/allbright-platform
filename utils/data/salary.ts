const UKSalaries = [
  "Prefer Not To Say",
  "Less than £30k",
  "£30 - £50k",
  "£50 - £70k",
  "£70 - £90k",
  "£90 - £120k",
  "£120 - £200k",
  "£200 - £300k",
  "£300+",
] as const;

const USASalaries = [
  "Prefer Not To Say",
  "Less than $30k",
  "$30 - $50k",
  "$50 - $70k",
  "$70 - $90k",
  "$90 - $120k",
  "$120 - $200k",
  "$200 - $300k",
  "$300k+",
] as const;

export const getSalariesByCountry = (country?: string) => {
  if (country === "United States") {
    return USASalaries;
  }

  return UKSalaries;
};

export default UKSalaries;
