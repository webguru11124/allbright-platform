import * as React from "react";
import { StyleSheet, View } from "react-native";

import Collapse from "@/components/Collapse";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import BusinessCard from "@/features/BusinessCard";
import MemberListView from "@/features/Connect/components/MemberListView";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import { UserModel } from "@/types/user";

interface Props {
  members: UserModel[];
  title: string;
  onLoadMembers: () => void;
  isLastPage: boolean;
  showCompact: boolean;
  theme: Theme;
}

function MembersCarousel({ members, title, onLoadMembers, isLastPage, showCompact, theme }: Props) {
  const { maxWidth, currentWidth } = React.useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: theme.colors.overlay,
          marginHorizontal: showCompactDisplay ? 10 : 30,
        },
      ]}>
      <Collapse title={title}>
        <MemberListView
          items={members}
          renderComponent={({ item }: { item: any }) => <BusinessCard member={item} />}
          loadMore={onLoadMembers}
          isHorizontal
          isLastPage={isLastPage}
          showCompact={showCompact}
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
export default withTheme(MembersCarousel);
