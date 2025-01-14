import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import MemberCardDesktop from "@/features/Member/components/MemberCard_Desktop";
import MemberCardMobile from "@/features/Member/components/MemberCard_Mobile";
import MemberLoading from "@/features/Member/components/MemberLoading";
import useMemberCard from "@/features/Member/hooks/useMemberCard";
import withTheme from "@/hocs/withTheme";
import { useUserFetch } from "@/hooks/resources/useUserFetch";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { UserModel } from "@/types/user";

type Props = {
  showModal: boolean;
  userId: string;

  setShowModal: Function;
  theme: Theme;
};

const Member = ({ userId, showModal, setShowModal, theme }: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  const MemberCard = React.useMemo(
    () => (showCompactDisplay ? MemberCardMobile : MemberCardDesktop),
    [showCompactDisplay]
  );

  const { data, isLoading } = useUserFetch({ id: userId });

  const { id, name, initials, imageSrc, isMentor, occupation, location, bioFields, lightBackground } = useMemberCard({
    theme: theme,
    user: data as UserModel,
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}>
      <View style={[styles.root]}>
        <ScrollView style={[styles.main]}>
          <Pressable
            onPress={() => setShowModal(false)}
            style={[styles.iconContainer]}>
            <MaterialIcons
              name="close"
              size={24}
              color={theme.colors.txt.dark}
            />
          </Pressable>
          {isLoading ? (
            <MemberLoading />
          ) : (
            <MemberCard
              lightBackground={lightBackground}
              id={id}
              name={name}
              initials={initials}
              imageSrc={imageSrc}
              occupation={occupation}
              location={location}
              bioFields={bioFields}
              isMentor={isMentor}
              theme={theme}
            />
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  main: {
    backgroundColor: "transparent",
    maxWidth: 960,
    width: "100%",
    maxHeight: 500,
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
