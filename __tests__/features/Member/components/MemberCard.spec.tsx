import { faker } from "@faker-js/faker/.";

import { mockUser } from "@/__mocks__/data/mock-users";
import { render, screen } from "@/__mocks__/test-utils";
import MemberCardDesktop from "@/features/Member/components/MemberCard_Desktop";
import { DefaultTheme } from "@/theme";

describe("MemberCardDesktop", () => {
  it("should render passed in props", () => {
    const occupation = faker.person.jobTitle();
    const location = faker.location.city();
    const bioTitle = faker.lorem.word();
    const bioInfo = faker.lorem.sentence();
    const initials = mockUser.firstName?.slice(0, 1) + mockUser.lastName?.slice(0, 1);

    render(
      <MemberCardDesktop
        lightBackground={"#ddd"}
        id={mockUser.id}
        name={mockUser.name}
        initials={initials}
        imageSrc={null}
        occupation={occupation}
        location={location}
        bioFields={[{ title: bioTitle, info: bioInfo, isLink: false }]}
        theme={DefaultTheme}
      />
    );

    expect(screen.getByText(mockUser.name)).not.toBeNull();
    expect(screen.getByText(occupation)).not.toBeNull();
    expect(screen.getByText(location)).not.toBeNull();
    expect(screen.getByText(bioTitle)).not.toBeNull();
    expect(screen.getByText(bioInfo)).not.toBeNull();
    expect(screen.getByText(initials)).not.toBeNull();
  });
});
