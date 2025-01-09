import * as React from "react";
import { StyleSheet, View } from "react-native";

import Collapse from "@/components/Collapse";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import BusinessCard from "@/features/BusinessCard";
import MemberListView from "@/features/Connect/components/MemberListView";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import useTheme from "@/hooks/useTheme";
import { UserModel } from "@/types/user";

interface Props {
  members: UserModel[];
  title: string;
  onLoadMembers: () => void;
  isLastPage: boolean;
}

export default function MembersCarousel({ members, title, onLoadMembers, isLastPage }: Props) {
  const theme = useTheme();

  const { maxWidth, currentWidth } = React.useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return (
    <View
      style={[
        styles.container,
        { borderBottomColor: theme.colors.overlay, marginHorizontal: showCompactDisplay ? 0 : 30 },
      ]}>
      <Collapse title={title}>
        <MemberListView
          items={members}
          renderComponent={({ item }) => <BusinessCard member={item} />}
          loadMore={onLoadMembers}
          isHorizontal
          isLastPage={isLastPage}
        />
      </Collapse>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    borderBottomWidth: 1,
  },
});
