import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import ImageOrInitials from "@/components/ImageOrInitials";
import Row from "@/components/Row";
import { CL, CS, H4, H6 } from "@/components/Typography";
import { BioRowProps, MemberCardProps } from "@/features/Member/types";

const MemberCardMobile = ({
  lightBackground,
  id,
  name,
  theme,
  imageSrc,
  initials,
  occupation,
  location,
  bioFields,
}: MemberCardProps) => {
  return (
    <View style={[styles.card, { backgroundColor: lightBackground }]}>
      <Link href={`/member/${id}`}>
        <H4 style={{ textDecorationLine: "underline" }}>{name}</H4>
      </Link>
      <View style={styles.imageOrInitialsContainer}>
        <ImageOrInitials
          theme={theme}
          imageSrc={imageSrc}
          initials={initials as string}
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
      {
        <Row>
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
        </Row>
      }
    </View>
  );
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
  card: {
    minWidth: 380,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  imageOrInitialsContainer: {
    marginVertical: 20,
  },
  bio: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  bioRow: {
    position: "relative",
    minWidth: 380,
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

export default MemberCardMobile;
