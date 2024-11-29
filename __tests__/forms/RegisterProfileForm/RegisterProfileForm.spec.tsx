import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import RegisterProfileForm from "@/forms/RegisterProfileForm/RegisterProfileForm";
import countries from "@/utils/data/countries";
import Providers from "@/utils/providers";

describe("RegisterProfileForm", () => {
  const props = {
    inputs: {
      firstName: undefined,
      lastName: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: undefined,
      marketingAgreed: undefined,
      thirdPartyAgreed: undefined,
    },
    errors: {
      firstName: undefined,
      lastName: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: undefined,
      marketingAgreed: undefined,
      thirdPartyAgreed: undefined,
    },
    blurFuncs: {
      firstName: jest.fn(),
      lastName: jest.fn(),
      city: jest.fn(),
      country: jest.fn(),
    },
    changeTextFuncs: {
      firstName: jest.fn(),
      lastName: jest.fn(),
      city: jest.fn(),
      country: jest.fn(),
      termsAgreed: jest.fn(),
      marketingAgreed: jest.fn(),
      thirdPartyAgreed: jest.fn(),
    },
    isFormValid: false,
    isPending: false,
    onPress: jest.fn(),
  };

  describe("calls changeTextFuncs", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
      jest.clearAllMocks();
    });

    it("when the firstName input is updated", () => {
      const expectedFirstName = faker.person.firstName();
      const firstNameInput = screen.getByText("First Name");
      fireEvent.changeText(firstNameInput, expectedFirstName);
      expect(props.changeTextFuncs.firstName).toHaveBeenCalledWith(
        expectedFirstName
      );
    });

    it("when the lastName input is updated", () => {
      const expectedLastName = faker.person.lastName();
      const lastNameInput = screen.getByText("Last Name");
      fireEvent.changeText(lastNameInput, expectedLastName);
      expect(props.changeTextFuncs.lastName).toHaveBeenCalledWith(
        expectedLastName
      );
    });

    it("when the country input is updated", () => {
      const expectedCountry = faker.helpers.arrayElement(countries).Name;
      const countryInput = screen.getByText("Country");
      fireEvent.changeText(countryInput, expectedCountry);
      expect(props.changeTextFuncs.country).toHaveBeenCalledWith(
        expectedCountry
      );
    });

    it("marks the termsAgreed checkbox as true when pressed", () => {
      const termsAgreedCheckbox = screen.getByTestId(
        "RegisterProfileForm:TermsAgreed"
      );
      fireEvent.press(termsAgreedCheckbox);
      expect(props.changeTextFuncs.termsAgreed).toHaveBeenCalledWith(true);
    });

    it("marks the marketingAgreed checkbox as true when pressed", () => {
      const marketingAgreedCheckbox = screen.getByTestId(
        "RegisterProfileForm:MarketingAgreed"
      );
      fireEvent.press(marketingAgreedCheckbox);
      expect(props.changeTextFuncs.marketingAgreed).toHaveBeenCalledWith(true);
    });

    it("marks the thirdPartyAgreed checkbox as true when pressed", () => {
      const thirdPartyAgreedCheckbox = screen.getByTestId(
        "RegisterProfileForm:ThirdPartyAgreed"
      );
      fireEvent.press(thirdPartyAgreedCheckbox);
      expect(props.changeTextFuncs.thirdPartyAgreed).toHaveBeenCalledWith(true);
    });
  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
    });

    it("when an firstName error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          firstName: "The firstName field is required",
        },
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.firstName)).not.toBeNull();
    });

    it("when lastName error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          lastName: "The lastName field is required",
        },
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.lastName)).not.toBeNull();
    });
  });
});
