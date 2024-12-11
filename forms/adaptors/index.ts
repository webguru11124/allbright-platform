import { ProfileImage } from "@/forms/hooks/useProfilePhotoUploadSection";
import allCareerGoals, { CareerGoalType } from "@/utils/data/careerGoals";
import { cities } from "@/utils/data/cities";
import { ethnicGroups } from "@/utils/data/ethnicGroups";
import goals from "@/utils/data/goals";
import { InterestTitles } from "@/utils/data/interests";
import { jobLevels } from "@/utils/data/jobLevels";
import { jobStatus } from "@/utils/data/jobStatus";
import organisationSize from "@/utils/data/organisationSize";

export type RegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  password: string;
  password_confirmation: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
};

export type RegisterOutput = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  password: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
};

export const registrationAdaptor = (postBody: RegisterInput) => ({
  firstName: postBody.firstName,
  lastName: postBody.lastName,
  email: postBody.email,
  city: postBody.city,
  country: postBody.country,
  password: postBody.password,
  termsAgreed: postBody.termsAgreed,
  marketingAgreed: postBody.marketingAgreed,
  thirdPartyAgreed: postBody.thirdPartyAgreed,
});

export type PrivateProfileInput = {
  interests: InterestTitles;
  jobStatus: (typeof jobStatus)[number] | null;
  salary: string;
  organisationSize: (typeof organisationSize)[number] | null;
  dateOfBirth: Date;
  ethnicGroups: (typeof ethnicGroups)[number][];
};

export type PublicProfileInput = {
  city: (typeof cities)[number]["city"];
  jobTitle: string;
  jobCompany: string;
  jobLevel: (typeof jobLevels)[number];
  jobIndustry: string;
  goals: (typeof goals)[number][];
  bio: string;
  profile_image: ProfileImage;
};

export type PublicProfileOutput = {
  city: (typeof cities)[number]["city"];
  jobTitle: string;
  jobCompany: string;
  jobLevel?: (typeof jobLevels)[number];
  jobIndustry: string;
  goals: (typeof goals)[number][];
  bio: string;
  imageSrc?: string | null;
};

export type RegisterProfileInput = {
  firstName: string;
  lastName: string;
  country: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
  city?: (typeof cities)[number]["city"];
};

export type RegisterProfileOutput = {
  firstName: string;
  lastName: string;
  country: string;
  city?: (typeof cities)[number]["city"];
};

export type AccountProfileInput = {
  profile_image: ProfileImage;
  country: string;
  city: (typeof cities)[number]["city"];
  jobTitle: string;
  jobCompany: string;
  jobLevel: (typeof jobLevels)[number];
  jobIndustry: string;
  goals: (typeof goals)[number][];
  interests: InterestTitles;
  businessCardColour: string;
  bio: string;
  website: string;
  instagram: string;
  linkedin: string;
};

export type AccountProfileOutput = {
  imageSrc?: string | null;
  country: string;
  city: (typeof cities)[number]["city"];
  jobTitle: string;
  jobCompany: string;
  jobLevel?: (typeof jobLevels)[number];
  jobIndustry: string;
  goals: (typeof goals)[number][];
  interests: InterestTitles;
  businessCardColour: string;
  bio: string;
  website: string;
  instagram: string;
  linkedin: string;
};

export const publicProfileAdaptor = (postBody: PublicProfileInput): PublicProfileOutput => ({
  city: postBody.city,
  jobTitle: postBody.jobTitle,
  jobCompany: postBody.jobCompany,
  jobLevel: postBody.jobLevel,
  jobIndustry: postBody.jobIndustry,
  goals: postBody.goals,
  bio: postBody.bio,
});

export const registerProfileAdaptor = (postBody: RegisterProfileInput): RegisterProfileOutput => ({
  firstName: postBody.firstName,
  lastName: postBody.lastName,
  country: postBody.country,
  city: postBody.city,
});

export const privateProfileAdaptor = (postBody: PrivateProfileInput): PrivateProfileOutput => ({
  interests: postBody.interests,
  jobStatus: postBody.jobStatus,
  salary: postBody.salary,
  organisationSize: postBody.organisationSize,
  dateOfBirth: postBody.dateOfBirth,
  ethnicGroups: postBody.ethnicGroups.map((e) => e.value),
});

export const accountProfileAdaptor = (postBody: AccountProfileInput): AccountProfileOutput => ({
  city: postBody.city,
  country: postBody.country,
  jobTitle: postBody.jobTitle,
  jobCompany: postBody.jobCompany,
  jobLevel: postBody.jobLevel,
  jobIndustry: postBody.jobIndustry,
  goals: postBody.goals,
  interests: postBody.interests,
  businessCardColour: postBody.businessCardColour,
  bio: postBody.bio,
  website: postBody.website,
  instagram: postBody.instagram,
  linkedin: postBody.linkedin,
});

export const profileGoalsAdapter = (postBody: ProfileGoalsInput): ProfileGoalsOutput => ({
  careerGoals: allCareerGoals.filter((goal) => postBody.careerGoals.includes(goal.id)),
});

export const pledgeAdapter = (postBody: PledgeInput) => ({
  agreedToPledge: postBody.agreedToPledge,
});

export type PledgeInput = {
  agreedToPledge: boolean;
};

export type ProfileGoalsOutput = {
  careerGoals: CareerGoalType[];
};

export type ProfileGoalsInput = {
  careerGoals: CareerGoalType["id"][];
};

export type PrivateProfileOutput = {
  interests: InterestTitles;
  jobStatus: (typeof jobStatus)[number] | null;
  salary: string;
  organisationSize: (typeof organisationSize)[number] | null;
  dateOfBirth: Date;
  ethnicGroups: string[];
};

export const ethnicGroupsAdapter = (ethnics: string[]): (typeof ethnicGroups)[number][] => {
  const ethnicGroupsData: (typeof ethnicGroups)[number][] = [];
  for (const ethnic of ethnics) {
    if (ethnic === "Prefer not to say") {
      ethnicGroupsData.push(ethnicGroups[0]);
    } else {
      const ethicGroup = ethnicGroups.find((e) => e.title === ethnic);
      if (!ethicGroup)
        ethnicGroupsData.push({
          title: "Other",
          value: ethnic as any,
          id: "ca4564ca-55fd-11ee-8c99-0242ac120002",
        });
      else ethnicGroupsData.push(ethicGroup);
    }
  }
  return ethnicGroupsData;
};
