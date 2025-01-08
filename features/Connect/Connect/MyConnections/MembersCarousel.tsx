import * as React from "react";
import { StyleSheet, View } from "react-native";

import Collapse from "@/components/Collapse";
import BusinessCard from "@/features/BusinessCard";
import MemberListView from "@/features/Connect/components/MemberListView";
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
  return (
    <View style={[styles.container, { borderBottomColor: theme.colors.overlay }]}>
      <Collapse title={title}>
        <MemberListView
          items={members}
          renderComponent={({ item }) => (
            <BusinessCard
              member={item}
              isStatic
            />
          )}
          loadMore={onLoadMembers}
          isLastPage={isLastPage}
        />
      </Collapse>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginHorizontal: 0,
    borderBottomWidth: 1,
  },
});
