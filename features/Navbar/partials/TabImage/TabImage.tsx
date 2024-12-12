import { Pressable } from "react-native";

import ImageOrInitials from "@/components/ImageOrInitials";
import { Metrics } from "@/constants/Metrics";

type Props = {
  theme: Theme;
  imageSrc: string | null | undefined;
  initials: string;
  onPress: GestureEvent;
};

const TabImage = ({ theme, imageSrc, initials, onPress }: Props) => (
  <Pressable onPress={onPress}>
    <ImageOrInitials
      theme={theme}
      imageSrc={imageSrc}
      initials={initials}
      height={Metrics.navbar.userImageHeight}
      width={Metrics.navbar.userImageHeight}
    />
  </Pressable>
);

export default TabImage;
