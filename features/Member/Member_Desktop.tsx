import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Link } from "expo-router";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";

import BackButton from "@/components/BackButton";
import Column from "@/components/Column";
import ImageOrInitials from "@/components/ImageOrInitials";
import Row from "@/components/Row";
import { CL, CS, H4, H6 } from "@/components/Typography";
import { UserModel } from "@/types/user";

type Props = {
  user: UserModel;
  theme: Theme;
};

const MemberDesktop = ({ theme, user }: Props) => {
  const jobTitle = user?.jobTitle || "";
  const jobCompany = user?.jobCompany || "";
  const occupation = [jobTitle, jobCompany].filter((a) => a).join(" • ");

  const city = user?.city;
  const country = user?.country;
  const location = [city, country].filter((a) => a).join(", ");

  // @ts-ignore
  const interests = user?.interests?.join(" . ");
  const seeking = user?.goals?.join(" • ");

  const bioFields = [
    { title: "About Me", info: user?.bio, isLink: false },
    { title: "Interests", info: interests, isLink: false },
    { title: "Seeking", info: seeking, isLink: false },
    { title: "Job Level", info: user?.jobLevel, isLink: false },
    { title: "Industry", info: user?.jobIndustry, isLink: false },
    {
      title: "Instagram",
      info: user?.instagram,
      isLink: true,
    },
    {
      title: "Website",
      info: user?.website?.toLowerCase(),
      isLink: true,
    },
    {
      title: "LinkedIn",
      info: user?.linkedin?.toLowerCase(),
      isLink: true,
    },
  ];

  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={[styles.main]}>
        <BackButton />
        <View style={[styles.card, { backgroundColor: theme.colors.lightBackground }]}>
          <Column style={[{ width: "45%" }]}>
            <H4>{user?.name}</H4>
            <View style={styles.imageOrInitialsContainer}>
              <ImageOrInitials
                theme={theme}
                imageSrc={user?.imageSrc}
                initials={(user?.firstName?.slice(0, 1) || "A") + (user?.lastName?.slice(0, 1) || "B")}
                height={150}
                width={150}
              />
            </View>
            <CL style={{ fontWeight: 500 }}>{occupation}</CL>
            <Row>
              <MaterialIcons
                size={28}
                name="location-on"
                color={theme.colors.txt.dark}
              />
              <CL style={{ fontWeight: 500 }}>{location}</CL>
            </Row>
          </Column>
          <Column style={[{ width: "55%" }]}>
            <ImageBackground
              source={require("../../assets/images/allbright-a.png")}
              style={styles.imageBackground}>
              {
                <View style={[styles.bio]}>
                  {bioFields
                    .filter((field) => field.info)
                    .map((field, index) => (
                      <BioRow
                        {...field}
                        index={index}
                        key={field.title}
                        oddRowColour={theme.colors.background}
                        evenRowColour={theme.colors.lightBackground}
                      />
                    ))}
                </View>
              }
            </ImageBackground>
          </Column>
        </View>
      </ScrollView>
    </View>
  );
};

type BioRowProps = {
  index: number;
  info: any;
  evenRowColour: string;
  oddRowColour: string;
  title: string;
  isLink: boolean;
};

function BioRow({ index, info, evenRowColour, oddRowColour, title, isLink }: BioRowProps) {
  if (!info) return null;

  return (
    <View style={[styles.bioRow]}>
      <View style={[styles.rowColour, { backgroundColor: index % 2 === 0 ? evenRowColour : oddRowColour }]} />
      <View style={[styles.rowText]}>
        <H6>{title}</H6>
        {isLink ? (
          <View>
            <Link
              href={getMaybeLink()}
              target="_blank">
              <CS style={{ textDecorationLine: "underline" }}>{info}</CS>
            </Link>
          </View>
        ) : (
          <CL>{info}</CL>
        )}
      </View>
    </View>
  );

  function getMaybeLink() {
    if (info?.startsWith("http")) return info;
    if (title === "Instagram") return ["https://www.instagram.com/", info?.split("@")[1] || info].join("");

    return `http://${info}`;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  main: {
    width: 1000,
    padding: 20,
  },
  card: {
    flexDirection: "row",
    marginTop: 40,
    padding: 40,
    borderRadius: 5,
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  imageOrInitialsContainer: {
    marginVertical: 20,
  },
  imageBackground: {
    marginRight: 50,
  },
  bio: {
    position: "relative",
    flexDirection: "column",
    flex: 3,
    padding: 0,
    overflow: "hidden",
  },
  bioRow: {
    position: "relative",
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  rowColour: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
  },
  rowText: {
    position: "relative",
    zIndex: 2,
  },
  loader: {
    justifyContent: "center",
    marginTop: 40,
  },
});

export default MemberDesktop;
