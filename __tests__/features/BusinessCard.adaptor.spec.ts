import { faker } from "@faker-js/faker/.";

import { mockUser } from "@/__mocks__/data/mock-users";
import { businessCardAdaptor } from "@/features/BusinessCard/adaptors";
import { jobLevels } from "@/utils/data/jobLevels";

describe.each([
  {
    input: {
      ...mockUser,
      jobTitle: faker.person.jobTitle(),
      jobCompany: faker.company.name(),
      jobLevel: faker.helpers.arrayElement(jobLevels),
      location: faker.location.city(),
    },
    output: {
      businessCardColour: "#FFFFFF",
      displayName: mockUser.name,
      displayPhoto: true,
      goals: undefined,
      id: mockUser.id,
      imageSrc: undefined,
      interests: undefined,
      job: undefined,
      jobCompany: undefined,
      jobIndustry: undefined,
      jobLevel: undefined,
      location: undefined,
    },
  },
])("businessCardAdaptor", ({ input, output }) => {
  it("should convert a user object to a business card", () => {
    const result = businessCardAdaptor(input);
    expect(result).toStrictEqual({
      ...output,
      job: input.jobTitle,
      jobCompany: input.jobCompany,
      jobLevel: input.jobLevel,
      location: input.location,
    });
  });
});
