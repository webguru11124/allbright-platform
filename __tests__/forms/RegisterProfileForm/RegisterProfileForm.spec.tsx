import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import RegisterProfileForm from "@/forms/RegisterProfileForm/RegisterProfileForm";
import Providers from "@/utils/providers";

describe("RegisterProfileForm", () => {
  const props = {
    inputs: {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      password_confirmation: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: "false",
      marketingAgreed: "false",
      thirdPartyAgreed: "false",
    },
    errors: {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      password_confirmation: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: undefined,
      marketingAgreed: undefined,
      thirdPartyAgreed: undefined,
    },
    blurFuncs: {
      first_name: jest.fn(),
      last_name: jest.fn(),
      email: jest.fn(),
      password: jest.fn(),
      password_confirmation: jest.fn(),
      city: jest.fn(),
      country: jest.fn(),
    },
    changeTextFuncs: {
      first_name: jest.fn(),
      last_name: jest.fn(),
      email: jest.fn(),
      password: jest.fn(),
      password_confirmation: jest.fn(),
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
  // describe("calls changeTextFuncs", () => {
  //   let screen: any;

  //   beforeEach(() => {
  //     screen = render(
  //       <Providers>
  //         <RegisterProfileForm {...props} />
  //       </Providers>
  //     );
  //     jest.clearAllMocks();
  //   });
  // });

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
      const submit = screen.getByText("Submit");

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
