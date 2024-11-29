import MasonryList from "@react-native-seoul/masonry-list";
import React, { Suspense, useMemo } from "react";
import { Dimensions, StyleSheet } from "react-native";

import RecommendationCard from "@/components/recommendation_cards/index";
import { Breakpoints } from "@/constants/DeviceBreakpoints";
import { DUMMY_RECS } from "@/constants/DummyRecommendations";
import { RecommendationModel } from "@/types/Recommendations";

const RecommendationsMasonryGrid = () => {
  const { width } = Dimensions.get("window");

  const numColumns: number | undefined = useMemo(() => {
    switch (true) {
      case width === 0:
        return undefined;
      case width < Breakpoints.tablet:
        return 2;
      case width < Breakpoints.laptop:
        return 3;
      case width < Breakpoints.desktop:
        return 4;
      default:
        return 5;
    }
  }, [width]);

  const styles = StyleSheet.create({
    masonry: {
      paddingLeft: 10,
      // TODO: Max width breakpoint should be applied to layout site-wide, after which can be removed from this component
      maxWidth: Breakpoints.max,
    },
  });

  return (
    numColumns && (
      <MasonryList
        data={DUMMY_RECS}
        keyExtractor={(item): string => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <Suspense fallback={null}>
            <RecommendationCard {...(item as RecommendationModel)} />
          </Suspense>
        )}
        contentContainerStyle={styles.masonry}
        showsVerticalScrollIndicator={true}
      />
    )
  );
};

export default RecommendationsMasonryGrid;
