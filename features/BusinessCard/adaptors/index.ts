import { BusinessCard } from "@/types/businessCard/BusinessCard";
import { UserModel } from "@/types/user";

export const businessCardAdaptor = (user: UserModel): BusinessCard => {
  return {
    id: user.id || user.uid,
    displayName: user.name || `${user.firstName} ${user.lastName}`,
    imageSrc: user.imageSrc || user.profileImageUrl,
    businessCardColour: user?.businessCardColour || "#FFFFFF",
    location: `${[user.city, user.country].filter(Boolean).join(", ")}` || user.location,
    job: user.jobTitle,
    jobLevel: user.jobLevel,
    jobIndustry: user.jobIndustry,
    jobCompany: user.jobCompany,
    displayPhoto: user.displayPhoto !== false,
    goals: user.goals,
    interests: user.interests,
  };
};
