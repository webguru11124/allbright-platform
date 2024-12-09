import { faker } from "@faker-js/faker/.";

import { BusinessCard } from "@/types/businessCard/BusinessCard";
import industries from "@/utils/data/industries";
import { interests } from "@/utils/data/interests";
import { jobLevels } from "@/utils/data/jobLevels";

export const mockBusinessCard: BusinessCard = {
  displayName: faker.person.fullName(),
  businessCardColor: faker.color.rgb(),
  location: faker.location.city(),
  job: faker.person.jobTitle(),
  jobLevel: faker.helpers.arrayElement(jobLevels),
  jobIndustry: faker.helpers.arrayElement(industries),
  jobCompany: faker.company.name(),
  displayPhoto: faker.helpers.arrayElement([true, false]),
  id: faker.string.uuid(),
  imageSrc: faker.image.url(),
  goals: undefined,
  interests: faker.helpers.arrayElement(interests),
};
