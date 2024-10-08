import { fireEvent, render } from "@testing-library/react-native";

import PublicProfileForm from "@/forms/PublicProfileForm/PublicProfileForm";
import Providers from "@/utils/providers";
import { faker } from "@faker-js/faker";

describe("PublicProfileForm", () => {
  const props = {
    inputs: {
      city: undefined,
      industry: undefined,
      job_level: undefined,
      company_name: undefined,
      job_title: undefined,
      user_biography: undefined,
    },
    errors: {
      city: undefined,
      industry: undefined,
      job_level: undefined,
      company_name: undefined,
      job_title: undefined,
      user_biography: undefined,
    },
    blurFuncs: {
      city: jest.fn(),
      industry: jest.fn(),
      job_level: jest.fn(),
      company_name: jest.fn(),
      job_title: jest.fn(),
      user_biography: jest.fn(),
      goals: jest.fn(),
    },
    changeTextFuncs: {
      city: jest.fn(),
      industry: jest.fn(),
      job_level: jest.fn(),
      company_name: jest.fn(),
      job_title: jest.fn(),
      user_biography: jest.fn(),
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
      const emailInput = screen.getByTestId("PublicProfileForm:JobTitle");
      fireEvent.changeText(emailInput, expectedJobTitle);
      expect(props.changeTextFuncs.job_title).toHaveBeenCalledWith(
        expectedJobTitle
      );
    });

    it("when the companyName input is updated", () => {
      const expectedCompanyName = faker.company.name();
      const passwordInput = screen.getByTestId("PublicProfileForm:CompanyName");
      fireEvent.changeText(passwordInput, expectedCompanyName);
      expect(props.changeTextFuncs.company_name).toHaveBeenCalledWith(
        expectedCompanyName
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

    it("when an city error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          city: "The City field is required",
        },
      };

      screen.rerender(
        <Providers>
          <PublicProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.city)).not.toBeNull();
    });

    it("when jobTitle error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          job_title: "The job title field is required",
        },
      };

      screen.rerender(
        <Providers>
          <PublicProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.job_title)).not.toBeNull();
    });
  });

  describe.skip("enables the submit button when isFormValid is true", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <PublicProfileForm {...props} />
        </Providers>
      );
    });

    it("onPress calling when form is submitted", () => {
      const submit = screen.getByTestId("PublicProfileForm:Submit");

      fireEvent.press(submit);
      expect(props.onPress).not.toHaveBeenCalled();

      const updatedProps = {
        ...props,
        isFormValid: true,
      };

      screen.rerender(
        <Providers>
          <PublicProfileForm {...updatedProps} />
        </Providers>
      );

      fireEvent.press(submit);
      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
