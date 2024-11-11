import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import PublicProfileForm from "@/forms/PublicProfileForm/PublicProfileForm";
import Providers from "@/utils/providers";

describe("PublicProfileForm", () => {
  const props = {
    inputs: {
      industry: undefined,
      jobLevel: undefined,
      jobCompany: undefined,
      jobTitle: undefined,
      bio: undefined,
    },
    errors: {
      industry: undefined,
      jobLevel: undefined,
      jobCompany: undefined,
      jobTitle: undefined,
      bio: undefined,
    },
    blurFuncs: {
      industry: jest.fn(),
      jobLevel: jest.fn(),
      jobCompany: jest.fn(),
      jobTitle: jest.fn(),
      bio: jest.fn(),
      goals: jest.fn(),
    },
    changeTextFuncs: {
      industry: jest.fn(),
      jobLevel: jest.fn(),
      jobCompany: jest.fn(),
      jobTitle: jest.fn(),
      bio: jest.fn(),
      goals: jest.fn(),
      profile_image: jest.fn(),
    },
    isFormValid: false,
    isPending: false,
    onPress: jest.fn(),
  };

  describe("calls changeTextFuncs", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(<PublicProfileForm {...props} />, {
        wrapper: Providers,
      });
      jest.clearAllMocks();
    });

    it("when the jobTitle input is updated", () => {
      const expectedJobTitle = faker.person.jobTitle();
      const input = screen.getByTestId("PublicProfileForm:JobTitle");
      fireEvent.changeText(input, expectedJobTitle);
      expect(props.changeTextFuncs.jobTitle).toHaveBeenCalledWith(
        expectedJobTitle
      );
    });

    it("when the jobCompany input is updated", () => {
      const expectedjobCompany = faker.company.name();
      const input = screen.getByTestId("PublicProfileForm:CompanyName");
      fireEvent.changeText(input, expectedjobCompany);
      expect(props.changeTextFuncs.jobCompany).toHaveBeenCalledWith(
        expectedjobCompany
      );
    });
  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <PublicProfileForm {...props} />
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
          <PublicProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.jobTitle)).not.toBeNull();
    });
  });
});
