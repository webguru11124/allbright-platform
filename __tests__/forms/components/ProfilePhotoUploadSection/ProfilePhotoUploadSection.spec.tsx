import { render } from "@/__mocks__/test-utils";
import ProfilePhotoUploadSection from "@/forms/components/ProfilePhotoUploadSection/ProfilePhotoUploadSection";
import { LocalImageType } from "@/types/files/localImage";
import { fireEvent, screen } from "expo-router/testing-library";

describe("ProfilePhotoUploadSection", () => {
  const mockPickProfileImage = jest.fn();
  const mockHandleProfileWantedToggle = jest.fn();

  beforeEach(() => {
    render(
      <ProfilePhotoUploadSection
        profileImage={{ state: LocalImageType.FILE_UNSET, file: null }}
        handleProfileWantedToggle={mockHandleProfileWantedToggle}
        pickProfileImage={mockPickProfileImage}
      />
    );
    jest.clearAllMocks();
  });

  it("renders correctly and allows user to select an image", () => {
    const arrowButton = screen.getByTestId(
      "ProfilePhotoUploadSection:ArrowButton"
    );
    fireEvent.press(arrowButton);
    expect(mockPickProfileImage).toHaveBeenCalled();
  });

  it("handles tick box state change", () => {
    const tickBox = screen.getByTestId(
      "ProfilePhotoUploadSection:ProfileWantedToggle"
    );
    fireEvent.press(tickBox);
    expect(mockHandleProfileWantedToggle).toHaveBeenCalledWith(true);
  });
});
