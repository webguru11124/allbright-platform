import { ScrollView } from "react-native-gesture-handler";

import Link from "@/components/Link";
import RecommendationsMasonryGrid from "@/components/recommendation_cards/RecommendationsMasonryGrid";

export default function Home() {
  return (
    <ScrollView>
      <RecommendationsMasonryGrid />
      <Link href="/">Go Back</Link>
    </ScrollView>
  );
}
