export type InterestTitles = (typeof interestObjects)[number]["title"];

export const interestObjects = [
  { title: "Technology", imgSrc: null },
  { title: "Law", imgSrc: null },
  { title: "Finance", imgSrc: null },
  { title: "Sports", imgSrc: null },
  { title: "The Arts", imgSrc: null },
  { title: "PR", imgSrc: null },
  { title: "Digital", imgSrc: null },
  { title: "Freelance", imgSrc: null },
  { title: "Marketing", imgSrc: null },
  { title: "Business", imgSrc: null },
  { title: "Creative", imgSrc: null },
  { title: "Investing", imgSrc: null },
  { title: "Motherhood", imgSrc: null },
  { title: "Media", imgSrc: null },
  { title: "HR", imgSrc: null },
  { title: "Fashion, accessories & Retail", imgSrc: null },
  { title: "Beauty & Wellness", imgSrc: null },
  { title: "New technologies, AI & web3", imgSrc: null },
  { title: "Travel", imgSrc: null },
  { title: "Auto", imgSrc: null },
  { title: "Food & Beverage", imgSrc: null },
  { title: "Business services", imgSrc: null },
] as const;

// TODO: Viktor - please fix!
export const interests: any = interestObjects.reduce(
  (acc: string[], interest) => {
    acc.push(interest.title as unknown as InterestTitles);
    return acc;
  },
  []
);
