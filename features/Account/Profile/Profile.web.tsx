import { ScrollView, StyleSheet, View } from "react-native";

import ColourSquares from "@/components/ColourSquares";
import Space from "@/components/Space";
import { H3 } from "@/components/Typography";
import BusinessCard from "@/features/BusinessCard";
import AccountProfileForm from "@/forms/AccountProfileForm/AccountProfileForm";
import TextInput from "@/forms/components/TextInput";
import { FormProps } from "@/forms/types/forms.types";
import withTheme from "@/hocs/withTheme";
import { UserModel } from "@/types/user";

type Props = {
  theme: Theme;
  user: Partial<UserModel> | undefined;
  formProps: FormProps;
};

const Profile = ({ theme, user, formProps }: Props) => {
  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.main}>
          <View style={styles.article}>
            <H3>{user?.name}</H3>
            <AccountProfileForm {...formProps} />
          </View>
          <View style={styles.aside}>
            <View style={styles.businessCardContainer}>
              <BusinessCard
                member={{ ...user, businessCardColour: formProps.inputs.businessCardColour } as UserModel}
              />
              <ColourSquares
                style={{ marginTop: 20 }}
                setValue={(val) => formProps.changeTextFuncs.businessCardColour(val)}
              />
              <View style={styles.inputsContainer}>
                <TextInput
                  placeholder={"Please enter your biography"}
                  label={"Biography*"}
                  placeholderTextColor={"#ddd"}
                  inputMode="text"
                  textContentType="none"
                  multiline
                  numberOfLines={10}
                  value={formProps.inputs.bio}
                  error={formProps.errors.bio}
                  onBlur={formProps.blurFuncs.bio}
                  onChangeText={formProps.changeTextFuncs.bio}
                  testID="Profile:UserBiography"
                />
                <Space height={10} />
                <TextInput
                  placeholder={"Website"}
                  label={"Website"}
                  placeholderTextColor={"#ddd"}
                  inputMode="text"
                  textContentType="URL"
                  value={formProps.inputs.website}
                  error={formProps.errors.website}
                  onBlur={formProps.blurFuncs.website}
                  onChangeText={formProps.changeTextFuncs.website}
                  testID="Profile:Website"
                />
                <Space height={10} />
                <TextInput
                  placeholder={"Instagram"}
                  label={"Instagram (@yourhandle)"}
                  placeholderTextColor={"#ddd"}
                  inputMode="text"
                  textContentType="URL"
                  value={formProps.inputs.instagram}
                  error={formProps.errors.instagram}
                  onBlur={formProps.blurFuncs.instagram}
                  onChangeText={formProps.changeTextFuncs.instagram}
                  testID="Profile:Instagram"
                />
                <Space height={10} />
                <TextInput
                  placeholder={"LinkedIn"}
                  label={"LinkedIn"}
                  placeholderTextColor={"#ddd"}
                  inputMode="text"
                  textContentType="URL"
                  value={formProps.inputs.linkedin}
                  error={formProps.errors.linkedin}
                  onBlur={formProps.blurFuncs.linkedin}
                  onChangeText={formProps.changeTextFuncs.linkedin}
                  testID="Profile:LinkedIn"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },
  scroll: {
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
  },
  main: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  article: { width: 660 },
  aside: {
    width: 300,
    marginLeft: 20,
  },
  businessCardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputsContainer: {
    marginTop: 20,
    gap: 10,
    width: "100%",
  },
});

export default withTheme(Profile);
