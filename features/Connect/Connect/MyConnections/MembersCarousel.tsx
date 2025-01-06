import * as React from "react";
import { NativeScrollEvent, ScrollView, StyleSheet, View } from "react-native";

import { CL, CXXL, H2 } from "@/components/Typography";
import BusinessCard from "@/features/BusinessCard";
import { UserModel } from "@/types/user";

interface Props {
  members: UserModel[];
  title: string;
  datacy: string;
  onLoadMembers: () => void;
}

export default function MembersCarousel({ members, title, datacy, onLoadMembers }: Props) {
  function isCloseToBottom(nativeEvent: NativeScrollEvent) {
    const paddingToBottom = 20;
    return (
      nativeEvent.layoutMeasurement.width + nativeEvent.contentOffset.x >=
      nativeEvent.contentSize.width - paddingToBottom
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CL>{title}</CL>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            onLoadMembers();
          }
        }}
        style={styles.membersContainer}
        data-cy={datacy}>
        {members.map((member) => (
          <BusinessCard
            key={member.id}
            isStatic
            member={member}
          />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    padding: 30,
  },
  header: {
    marginBottom: 10,
  },
  membersContainer: {
    flexDirection: "row",
    gap: 20,
    rowGap: 20,
  },
});
