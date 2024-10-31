import MasonryList from "@react-native-seoul/masonry-list";
import { StyleSheet, useWindowDimensions } from "react-native";

import RecommendationCard from "@/components/recommendation_cards/index";
import { Breakpoints } from "@/constants/DeviceBreakpoints";
import { DUMMY_RECS } from "@/constants/DummyRecommendations";
import { RecommendationModel } from "@/types/Recommendations";

const RecommendationsMasonryGrid = () => {
  const window = useWindowDimensions();

  const calculateColumns = (width: number) => {
    if (width < Breakpoints.tablet) {
      return 2;
    } else if (width < Breakpoints.laptop) {
      return 3;
    } else if (width < Breakpoints.desktop) {
      return 4;
    } else {
      return 5;
    }
  };

  const styles = StyleSheet.create({
    masonry: {
      paddingLeft: 10,
      // TODO: Max width breakpoint should be applied to layout site-wide, after which can be removed from this component
      maxWidth: Breakpoints.max,
    },
  });

  return (
    <MasonryList
      data={DUMMY_RECS}
      keyExtractor={(item): string => item.id}
      numColumns={calculateColumns(window.width)}
      renderItem={({ item }) => (
        <RecommendationCard {...(item as RecommendationModel)} />
      )}
      contentContainerStyle={styles.masonry}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default RecommendationsMasonryGrid;
