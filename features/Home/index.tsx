import { ScrollView } from "react-native-gesture-handler";

import RecommendationsMasonryGrid from "@/components/recommendation_cards/RecommendationsMasonryGrid";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

function Home({ theme }: Props) {
  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <RecommendationsMasonryGrid />
    </ScrollView>
  );
}

export default withTheme(Home);
