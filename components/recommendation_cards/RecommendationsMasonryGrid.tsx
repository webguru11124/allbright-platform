import MasonryList from "@react-native-seoul/masonry-list";
import { StyleSheet } from "react-native";

import RecommendationCard from "@/components/recommendation_cards/index";
import { DUMMY_RECS } from "@/constants/DummyRecommendations";

import { RecommendationModel } from "@/types/Recommendations";

const RecommendationsMasonryGrid = () => {
  const styles = StyleSheet.create({
    masonry: {
      paddingLeft: 10,
    },
  });

  return (
    <MasonryList
      data={[...DUMMY_RECS, ...DUMMY_RECS]}
      keyExtractor={(item): string => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <RecommendationCard {...(item as RecommendationModel)} />
      )}
      contentContainerStyle={styles.masonry}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default RecommendationsMasonryGrid;
