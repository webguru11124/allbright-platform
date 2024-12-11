import { faker } from "@faker-js/faker/.";

import { UserModel } from "@/types/user";

const uuid = faker.string.uuid();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const name = `${firstName} ${lastName}`;

export const mockUser: UserModel = {
  id: uuid,
  uid: uuid,
  firstName: firstName,
  lastName: lastName,
  name: name,
  displayName: name,
  email: faker.internet.email(),
  stripeCustomerId: faker.string.uuid(),
  dotDigitalId: faker.helpers.rangeToNumber({ min: 1, max: 1000 }),
  notificationsEmail: {
    thirdParty: false,
    acceptedConnectRequests: true,
    directMessages: false,
    connectRequests: true,
    groupDirectMessages: false,
    marketing: true,
  },
  lastActiveAt: new Date().getUTCDate(),
  isPaid: true,
  isClub: faker.helpers.arrayElement([true, false]),
  updatedAt: new Date().getUTCDate(),
  createdAt: new Date().getUTCDate(),
  businessCardColour: "",
  roles: [],
  salary: "",
  jobStatus: null,
  dateOfBirth: null,
  organisationSize: null,
  careerGoals: null,
  agreedToPledge: true,
  recommendedMentors: [],
  notificationsPush: {
    receiveAll: undefined,
    acceptedConnectRequests: undefined,
    directMessages: undefined,
    connectRequests: undefined,
    groupDirectMessages: undefined,
  },
  courses: [],
};
