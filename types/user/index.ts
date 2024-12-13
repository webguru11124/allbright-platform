import { CareerGoalType } from "@/utils/data/careerGoals";
import { cities } from "@/utils/data/cities";
import { ethnicGroups } from "@/utils/data/ethnicGroups";
import goals from "@/utils/data/goals";
import industries from "@/utils/data/industries";
import { InterestTitles } from "@/utils/data/interests";
import { jobLevels } from "@/utils/data/jobLevels";
import { jobStatus } from "@/utils/data/jobStatus";
import organisationSize from "@/utils/data/organisationSize";

export const Roles = ["Free", "Plus", "Alliance", "Administrator"] as const;

export type UserModel = {
  id: string | undefined;
  firstName: string;
  lastName: string;
  name: string;
  displayName?: string;
  email: string;
  stripeCustomerId: string;
  lastActiveAt: number;
  businessCardColour: string;
  displayPhoto?: boolean;
  roles: (typeof Roles)[number][];
  updatedAt?: number;
  createdAt: number;
  salary: string;
  jobStatus: (typeof jobStatus)[number] | null;
  dateOfBirth: Date | null;
  organisationSize: (typeof organisationSize)[number] | null;
  ethnicGroups: (typeof ethnicGroups)[number][];
  careerGoals: CareerGoalType[] | null;
  agreedToPledge: boolean;
  savedCourses?: string[];
  articles?: string[];
  // menteeSkills?: (typeof listAllSkills)[number][];
  isMentee?: boolean;
  isMentor?: boolean;
  recommendedMentors: string[];
  communityRulesAgreed?: boolean;
  mentorBio?: string;
  // mentorSkills?: (typeof listAllSkills)[number][];
  // profileQuestions: ProfileQuestionAnswer[];
  // traits: TraitAnswer[];
  disabled?: boolean;
  // registrationType?: (typeof userRegistrationType)[number];
  bio?: string;
  dotDigitalId?: number;
  instagram?: string;
  linkedin?: string;
  profileImageUrl?: string;
  goals?: (typeof goals)[number][];
  phoneNumber?: string;
  imageSrc?: string | null;
  location?: string;
  events?: string[];
  groups?: string[];
  aboutMe?: string;
  pushTokens?: { data: string; type: "ios" }[];
  notificationsEmail: {
    thirdParty?: boolean;
    acceptedConnectRequests?: boolean;
    directMessages?: boolean;
    connectRequests?: boolean;
    groupDirectMessages?: boolean;
    marketing?: boolean;
  };
  notificationsPush: {
    receiveAll?: boolean;
    acceptedConnectRequests?: boolean;
    directMessages?: boolean;
    connectRequests?: boolean;
    groupDirectMessages?: boolean;
  };
  version?: string;
  courses: { id: string; completedLessons: string[] }[];
  isAmbassador?: boolean;
  isClub?: boolean;
  isPaid?: boolean;
  membershipType?: { id?: string };
  watch?: boolean;
  dev?: boolean;

  // deprecated below
  uid?: string;
  locationId?: number;
  viewedOnboardingProfileStep?: boolean;
  jobTitle?: string;
  jobIndustry?: (typeof industries)[number];
  addressLine1?: string;
  addressLine2?: string;
  address?: string;
  proposedMember?: string;
  talkToMeAbout?: string;
  viewedOnboardingPaymentStep?: boolean;
  workStatus?: string;
  website?: string;
  jobCompany?: string;
  salesforceId?: string;
  agreedToTermsAt?: number;
  jobLevel?: (typeof jobLevels)[number];
  discoveryMethod?: string;
  hasUpdatedProfile?: boolean;
  pg?: number;
  importSource?: string;
  registerForMarketingEmails?: boolean;
  interests?: InterestTitles;
  region?: ["UK", "US", "AUS", "HK"];
  viewedOnboardingIntroStep?: boolean;
  country?: string;
  registrationIntentType?: null | "DIGITAL" | "CLUB";
  city?: (typeof cities)[number]["city"];
  timezone?: string;
  talkAbout?: string;
  ddFieldsUpdated?: number;
  dob?: number;
  postcode?: string;
  registrationSource?: ["web", "admin", "ios"];
  reference?: string;
  proposedBy?: string;
  todos?: { watch: boolean };
  authors?: string[];
  upgradeFromDigital?: boolean;
  communityRuleAgree?: boolean;
  authorId?: string;
  accountDeletedReason?: string;
  accountDeletedDetails?: string;
  accountDeleted?: number;
  clubId?: "LONDON_MAYFAIR";
  nftInfo?: string;
  isNFT?: boolean;
  applicationStatus?: "STARTED" | "PENDING" | "APPROVED";
  topics?: string[];
  registerMarketing?: boolean;
  salesforceAccountId?: string;
  title?: string;
  isPaidClub?: boolean;
  subId?: string;
  objectID?: string;
};
