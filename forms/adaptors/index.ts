import { cities } from "@/utils/data/cities";
import goals from "@/utils/data/goals";
import { jobLevels } from "@/utils/data/jobLevels";
import { ProfileImage } from "../hooks/useProfilePhotoUploadSection";

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
