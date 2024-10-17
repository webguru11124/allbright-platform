import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import ProfilePhotoInput from "@/forms/components/ProfilePhotoInput";

describe("ProfilePhotoInput", () => {
  const mockPickProfileImage = jest.fn();

  it("renders camera icon when imageSrc is null", () => {
    const { getByTestId } = render(
      <ProfilePhotoInput
        imageSrc={null}
        pickProfileImage={mockPickProfileImage}
      />
    );

    expect(getByTestId("camera-icon")).toBeTruthy();
  });

  it("renders image when imageSrc is provided", () => {
    const imageSrc = "https://example.com/profile.jpg";
    const { getByTestId } = render(
      <ProfilePhotoInput
        imageSrc={imageSrc}
        pickProfileImage={mockPickProfileImage}
      />
    );

    const image = getByTestId("profile-photo");
    expect(image.props.source.uri).toBe(imageSrc);
  });

  it("calls pickProfileImage when pressed", () => {
    const { getByTestId } = render(
      <ProfilePhotoInput
        imageSrc={null}
        pickProfileImage={mockPickProfileImage}
      />
    );

    fireEvent.press(getByTestId("camera-icon"));
    expect(mockPickProfileImage).toHaveBeenCalled();
  });
});
