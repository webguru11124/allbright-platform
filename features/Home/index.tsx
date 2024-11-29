import { ScrollView } from "react-native-gesture-handler";

import RecommendationsMasonryGrid from "@/components/recommendation_cards/RecommendationsMasonryGrid";

export default function Home() {
  return (
    <ScrollView>
      <RecommendationsMasonryGrid />
    </ScrollView>
  );
}
