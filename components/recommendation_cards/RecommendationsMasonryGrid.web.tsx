// import MasonryList from "@react-native-seoul/masonry-list";
// import { useWindowDimensions, StyleSheet } from "react-native";

// import { DUMMY_RECS } from "@/constants/DummyRecommendations";
// import RecommendationCard from "@/components/recommendation_cards/index";

const RecommendationsMasonryGrid = () => {
  // const window = useWindowDimensions();

  // const calculateColumns = (width: number) => {
  //   if (width < 768) {
  //     return 2;
  //   } else if (width < 1024) {
  //     return 3;
  //   } else if (width < 1280) {
  //     return 4;
  //   } else {
  //     return 5;
  //   }
  // };

  // const styles = StyleSheet.create({
  //   masonry: {
  //     paddingLeft: 10,
  //     maxWidth: 1440,
  //   },
  // });

  return (
    // <MasonryList
    //   data={[...DUMMY_RECS, ...DUMMY_RECS]}
    //   keyExtractor={(item): string => item.id}
    //   numColumns={calculateColumns(window.width)}
    //   renderItem={({ item }) => <RecommendationCard {...item} />}
    //   contentContainerStyle={styles.masonry}
    //   showsVerticalScrollIndicator={true}
    // />
    <></>
  );
};

export default RecommendationsMasonryGrid;
