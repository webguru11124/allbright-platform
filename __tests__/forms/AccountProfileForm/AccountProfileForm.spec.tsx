import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import AccountProfileForm from "@/forms/AccountProfileForm/AccountProfileForm";
import countries from "@/utils/data/countries";
import { interests } from "@/utils/data/interests";
import Providers from "@/utils/providers";

describe("AccountProfileForm", () => {
  const props = {
    inputs: {
      country: undefined,
      city: undefined,
      industry: undefined,
      jobLevel: undefined,
      jobCompany: undefined,
      jobTitle: undefined,
      bio: undefined,
      interests: undefined,
      instagram: undefined,
      website: undefined,
      linkedin: undefined,
    },
    errors: {
      country: undefined,
      city: undefined,
      industry: undefined,
      jobLevel: undefined,
      jobCompany: undefined,
      jobTitle: undefined,
      bio: undefined,
      interests: undefined,
      instagram: undefined,
      website: undefined,
      linkedin: undefined,
    },
    blurFuncs: {
      country: jest.fn(),
      city: jest.fn(),
      industry: jest.fn(),
      jobLevel: jest.fn(),
      jobCompany: jest.fn(),
      jobTitle: jest.fn(),
      bio: jest.fn(),
      goals: jest.fn(),
      interests: jest.fn(),
      instagram: jest.fn(),
      website: jest.fn(),
      linkedin: jest.fn(),
    },
    changeTextFuncs: {
      country: jest.fn(),
      city: jest.fn(),
      industry: jest.fn(),
      jobLevel: jest.fn(),
      jobCompany: jest.fn(),
      jobTitle: jest.fn(),
      bio: jest.fn(),
      goals: jest.fn(),
      profile_image: jest.fn(),
      interests: jest.fn(),
      instagram: jest.fn(),
      website: jest.fn(),
      linkedin: jest.fn(),
    },
    isFormValid: false,
    isPending: false,
    onPress: jest.fn(),
  };

  describe("calls changeTextFuncs", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(<AccountProfileForm {...props} />, {
        wrapper: Providers,
      });
      jest.clearAllMocks();
    });

    it("when the jobTitle input is updated", () => {
      const expectedJobTitle = faker.person.jobTitle();
      const input = screen.getByTestId("AccountProfileForm:JobTitle");
      fireEvent.changeText(input, expectedJobTitle);
      expect(props.changeTextFuncs.jobTitle).toHaveBeenCalledWith(expectedJobTitle);
    });

    it("when the jobCompany input is updated", () => {
      const expectedjobCompany = faker.company.name();
      const input = screen.getByTestId("AccountProfileForm:CompanyName");
      fireEvent.changeText(input, expectedjobCompany);
      expect(props.changeTextFuncs.jobCompany).toHaveBeenCalledWith(expectedjobCompany);
    });

    it("when the country input is updated", () => {
      const expectedCountry = faker.helpers.arrayElement(countries).Code;
      const input = screen.getByText("Country");
      fireEvent.changeText(input, expectedCountry);
      expect(props.changeTextFuncs.country).toHaveBeenCalledWith(expectedCountry);
    });

    it("when the interests input is updated", () => {
      const randomInterests = faker.helpers.arrayElements(interests);
      function selectInterest(interest: string) {
        const interestElement = screen.getByTestId(`interests-checkbox-${interest}`);
        fireEvent.press(interestElement);
      }
      randomInterests.forEach((interest) => selectInterest(interest as string));
      expect(props.changeTextFuncs.interests).toHaveBeenCalledWith(randomInterests);
    });

    it("when the instagram input is updated", () => {
      const expectedInstagram = "@" + faker.lorem.word();
      const input = screen.getByText("Instagram (@yourhandle)");
      fireEvent.changeText(input, expectedInstagram);
      expect(props.changeTextFuncs.instagram).toHaveBeenCalledWith(expectedInstagram);
    });

    it("when the website input is updated", () => {
      const expectedWebsite = faker.internet.url();
      const input = screen.getByText("Website");
      fireEvent.changeText(input, expectedWebsite);
      expect(props.changeTextFuncs.website).toHaveBeenCalledWith(expectedWebsite);
    });

    it("when the linkedin input is updated", () => {
      const expectedLinkedIn = faker.internet.url();
      const input = screen.getByText("LinkedIn");
      fireEvent.changeText(input, expectedLinkedIn);
      expect(props.changeTextFuncs.linkedin).toHaveBeenCalledWith(expectedLinkedIn);
    });
  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <AccountProfileForm {...props} />
        </Providers>
      );
    });

    it("when jobTitle error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          jobTitle: "The job title field is required",
        },
      };

      screen.rerender(
        <Providers>
          <AccountProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.jobTitle)).not.toBeNull();
    });
  });
});
