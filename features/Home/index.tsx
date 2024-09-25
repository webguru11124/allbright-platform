import Link from "@/components/Link";
import MasonryGrid from "@/components/MasonryGrid";
import RecommendationCard from "@/components/recommendation_cards/RecommendationCard";
import { DUMMY_RECS } from "@/constants/DummyRecommendations";
import { View } from "react-native";

export default function Home() {
  return (
    <View>
      <MasonryGrid>
        {DUMMY_RECS.map((item) => (
          <RecommendationCard {...item} />
        ))}
      </MasonryGrid>
      <Link href="/">Go Back</Link>
    </View>
  );
}
