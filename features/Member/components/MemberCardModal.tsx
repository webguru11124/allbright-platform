import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import MemberCardDesktop from "@/features/Member/components/MemberCard_Desktop";
import MemberCardMobile from "@/features/Member/components/MemberCard_Mobile";
import useMemberCard from "@/features/Member/hooks/useMemberCard";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { UserModel } from "@/types/user";

type Props = {
  user: Partial<UserModel> | undefined;
  showModal: boolean;
  setShowModal: Function;
  theme: Theme;
};

const Member = ({ user, showModal, setShowModal, theme }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  const MemberCard = React.useMemo(
    () => (showCompactDisplay ? MemberCardMobile : MemberCardDesktop),
    [showCompactDisplay]
  );

  const { name, firstName, lastName, imageSrc, occupation, location, bioFields, lightBackground } = useMemberCard({
    theme: theme,
    user: user as UserModel,
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}>
      <View style={[styles.root]}>
        <View style={[styles.main]}>
          <Pressable
            onPress={() => setShowModal(false)}
            style={[styles.iconContainer]}>
            <MaterialIcons
              name="close"
              size={24}
              color={theme.colors.txt.dark}
            />
          </Pressable>
          <MemberCard
            lightBackground={lightBackground}
            name={name}
            firstName={firstName}
            lastName={lastName}
            imageSrc={imageSrc}
            occupation={occupation}
            location={location}
            bioFields={bioFields}
            theme={theme}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 100,
    flex: 1,
    backgroundColor: "#00000025",
  },
  main: {
    backgroundColor: "transparent",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 50,
    width: 40,
    height: 40,
    zIndex: 2,
  },
});

export default withTheme(Member);
