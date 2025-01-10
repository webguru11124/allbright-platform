import { mockUser } from "@/__mocks__/data/mock-users";
import useMemberCard from "@/features/Member/hooks/useMemberCard";
import { DefaultTheme } from "@/theme";
import { UserModel } from "@/types/user";

describe("useMemberCard", () => {
  it("should return all attributes correctly", () => {
    const user: UserModel = {
      ...mockUser,
      id: "123",
      firstName: "John",
      lastName: "Doe",
      name: "John Doe",
      city: "New York",
      country: "USA",
      jobTitle: "Software Engineer",
      jobIndustry: "Tech",
      instagram: "johndoe",
      imageSrc: "https://johndoe.com/profile.jpg",
      website: "https://johndoe.com",
      linkedin: "https://linkedin.com/in/johndoe",
      isMentor: true,
    };
    const { id, name, initials, imageSrc, occupation, location, bioFields, lightBackground, isMentor } = useMemberCard({
      user,
      theme: DefaultTheme,
    });

    expect(id).toBe("123");
    expect(name).toBe("John Doe");
    expect(initials).toBe("JD");
    expect(imageSrc).toBe(user.imageSrc);
    expect(occupation).toBe("Software Engineer");
    expect(location).toBe("New York, USA");
    expect(bioFields).toEqual([
      { title: "About Me", info: undefined, isLink: false },
      { title: "Interests", info: undefined, isLink: false },
      { title: "Seeking", info: undefined, isLink: false },
      { title: "Job Level", info: undefined, isLink: false },
      { title: "Industry", info: "Tech", isLink: false },
      { title: "Instagram", info: "johndoe", isLink: true },
      { title: "Website", info: "https://johndoe.com", isLink: true },
      { title: "LinkedIn", info: "https://linkedin.com/in/johndoe", isLink: true },
    ]);
    expect(lightBackground).toBe(DefaultTheme.colors.lightBackground);
    expect(isMentor).toBe(true);
  });
});
