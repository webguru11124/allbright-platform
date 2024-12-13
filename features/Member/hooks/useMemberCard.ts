import { BioField } from "@/features/Member/types";
import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const useMemberCard = ({ user, theme }: Props) => {
  const jobTitle = user?.jobTitle || "";
  const jobCompany = user?.jobCompany || "";
  const occupation = [jobTitle, jobCompany].filter((a) => a).join(" • ");

  const city = user?.city;
  const country = user?.country;
  const location = [city, country].filter((a) => a).join(", ");

  const id = user?.id;
  const name = user?.name;
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const imageSrc = user?.imageSrc;

  // @ts-ignore
  const interests = user?.interests?.join(" . ");
  const seeking = user?.goals?.join(" • ");

  const bioFields: BioField[] = [
    { title: "About Me", info: user?.bio, isLink: false },
    { title: "Interests", info: interests, isLink: false },
    { title: "Seeking", info: seeking, isLink: false },
    { title: "Job Level", info: user?.jobLevel, isLink: false },
    { title: "Industry", info: user?.jobIndustry, isLink: false },
    {
      title: "Instagram",
      info: user?.instagram,
      isLink: true,
    },
    {
      title: "Website",
      info: user?.website?.toLowerCase(),
      isLink: true,
    },
    {
      title: "LinkedIn",
      info: user?.linkedin?.toLowerCase(),
      isLink: true,
    },
  ];
  const lightBackground = theme.colors.lightBackground;

  return { id, name, firstName, lastName, imageSrc, occupation, location, bioFields, lightBackground };
};

export default useMemberCard;
