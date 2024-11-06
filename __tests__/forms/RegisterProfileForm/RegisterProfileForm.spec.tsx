import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import RegisterProfileForm from "@/forms/RegisterProfileForm/RegisterProfileForm";
import countries from "@/utils/data/countries";
import Providers from "@/utils/providers";

describe("RegisterProfileForm", () => {
  const props = {
    inputs: {
      first_name: undefined,
      last_name: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: undefined,
      marketingAgreed: undefined,
      thirdPartyAgreed: undefined,
    },
    errors: {
      first_name: undefined,
      last_name: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: undefined,
      marketingAgreed: undefined,
      thirdPartyAgreed: undefined,
    },
    blurFuncs: {
      first_name: jest.fn(),
      last_name: jest.fn(),
      city: jest.fn(),
      country: jest.fn(),
    },
    changeTextFuncs: {
      first_name: jest.fn(),
      last_name: jest.fn(),
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

  // FIXME: 51-platform-registration-flow - Test skipped as cannot have describe block with no tests
  describe("calls changeTextFuncs", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
    });

    it("when the first_name input is updated", () => {
      const expectedFirstName = faker.person.firstName();
      const firstNameInput = screen.getByText("First Name");
      fireEvent.changeText(firstNameInput, expectedFirstName);
      expect(props.changeTextFuncs.first_name).toHaveBeenCalledWith(
        expectedFirstName
      );
    });

    it("when the last_name input is updated", () => {
      const expectedLastName = faker.person.lastName();
      const lastNameInput = screen.getByText("Last Name");
      fireEvent.changeText(lastNameInput, expectedLastName);
      expect(props.changeTextFuncs.last_name).toHaveBeenCalledWith(
        expectedLastName
      );
    });

    it("when the city input is updated", () => {
      const expectedCity = faker.location.city();
      const cityInput = screen.getByText("City");
      fireEvent.changeText(cityInput, expectedCity);
      expect(props.changeTextFuncs.city).toHaveBeenCalledWith(expectedCity);
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

    it("when an first_name error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          first_name: "The first_name field is required",
        },
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.first_name)).not.toBeNull();
    });

    it("when last_name error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          last_name: "The last_name field is required",
        },
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.last_name)).not.toBeNull();
    });
  });

  describe("enables the submit button when isFormValid is true", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
    });

    it("when an email is focussed, then unfocussed", () => {
      const submit = screen.getByText("Next");

      fireEvent.press(submit);
      expect(props.onPress).not.toHaveBeenCalled();

      const updatedProps = {
        ...props,
        isFormValid: true,
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      fireEvent.press(submit);
      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
