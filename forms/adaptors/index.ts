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
  first_name: string;
  last_name: string;
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
  firstName: postBody.first_name,
  lastName: postBody.last_name,
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
  job_title: string;
  company_name: string;
  job_level: (typeof jobLevels)[number];
  industry: string;
  goals: (typeof goals)[number][];
  user_biography: string;
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
  first_name: string;
  last_name: string;
  country: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
};

export type RegisterProfileOutput = {
  firstName: string;
  lastName: string;
  country: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
};

export const publicProfileAdaptor = (
  postBody: PublicProfileInput
): PublicProfileOutput => ({
  city: postBody.city,
  jobTitle: postBody.job_title,
  jobCompany: postBody.company_name,
  jobLevel: postBody.job_level,
  jobIndustry: postBody.industry,
  goals: postBody.goals,
  bio: postBody.user_biography,
});

export const registerProfileAdaptor = (
  postBody: RegisterProfileInput
): RegisterProfileOutput => ({
  firstName: postBody.first_name,
  lastName: postBody.last_name,
  country: postBody.country,
  termsAgreed: postBody.termsAgreed,
  marketingAgreed: postBody.marketingAgreed,
  thirdPartyAgreed: postBody.thirdPartyAgreed,
});

export const privateProfileAdaptor = (
  postBody: PrivateProfileInput
): PrivateProfileOutput => ({
  interests: postBody.interests,
  jobStatus: postBody.jobStatus,
  salary: postBody.salary,
  organisationSize: postBody.organisationSize,
  dateOfBirth: postBody.dateOfBirth,
  ethnicGroups: postBody.ethnicGroups,
});

export const profileGoalsAdapter = (
  postBody: ProfileGoalsInput
): ProfileGoalsOutput => ({
  careerGoals: allCareerGoals.filter((goal) =>
    postBody.careerGoals.includes(goal.id)
  ),
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
  ethnicGroups: (typeof ethnicGroups)[number][];
};
