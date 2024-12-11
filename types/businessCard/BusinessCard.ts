import Goal from "@/utils/data/goals";
import { InterestTitles } from "@/utils/data/interests";

export type BusinessCard = {
  displayName: string;
  businessCardColour: string;
  location?: string;
  job?: string;
  jobLevel?: string;
  jobIndustry?: string;
  jobCompany?: string;
  displayPhoto: boolean;
  id?: string;
  imageSrc?: string;
  goals?: (typeof Goal)[number][];
  interests?: InterestTitles;
};
