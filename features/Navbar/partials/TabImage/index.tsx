import { router } from "expo-router";

import withTheme from "@/hocs/withTheme";

import TabImage from "./TabImage";

type Props = {
  theme: Theme;
  imageSrc: string | null | undefined;
  initials: string;
};

const TabImageContainer = ({ theme, imageSrc, initials }: Props) => {
  const onPress = () => router.navigate("/account");

  return (
    <TabImage
      theme={theme}
      imageSrc={imageSrc}
      initials={initials}
      onPress={onPress}
    />
  );
};

export default withTheme(TabImageContainer);
