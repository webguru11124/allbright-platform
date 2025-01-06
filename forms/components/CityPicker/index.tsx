import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useMemo, useState } from "react";
import { Alert, Modal, Pressable, ScrollView, StyleSheet, TextInputProps, View } from "react-native";

import Space from "@/components/Space";
import { CM, CS } from "@/components/Typography";
import TextInput from "@/forms/components/TextInput";
import withTheme from "@/hocs/withTheme";
import OnboardingClient from "@/utils/client/user/OnboardingClient";
import { City } from "@/utils/data/cities";
import countries from "@/utils/data/countries";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: Function;
  error: string | undefined;
  onBlur: Function;
  theme: Theme;
  selectedCountry?: (typeof countries)[number]["Name"] | null;
  disabled?: boolean;
};

const CityPicker = ({ theme, onChangeText, placeholder, onBlur, error, selectedCountry, value, disabled }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const cities: City[] = useMemo(() => {
    return new OnboardingClient().getCities(selectedCountry);
  }, [selectedCountry]);

  const filteredCities = useMemo(
    () =>
      searchText !== undefined
        ? cities.filter((val) => val.key.toLowerCase().includes(searchText?.toLowerCase()))
        : cities,
    [cities, searchText]
  );

  const handleChangeText = (value: string) => {
    onChangeText(value);
    setModalVisible(false);
  };

  const displayValue = useMemo(
    () => (Boolean(value) ? cities.find((item) => item.value === value)?.label : undefined),
    [value, cities]
  );

  const isDisabled = useMemo(() => Boolean(selectedCountry) === false, [selectedCountry]);

  const onCloseButtonPress = () => {
    onBlur();
    setModalVisible(!modalVisible);
  };

  const onChangeSearchValue = (val: string) => {
    setSearchText(val);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.centeredView]}>
          <View style={[styles.modalView]}>
            <View style={[styles.titleContainer]}>
              <CM style={[styles.title]}>City</CM>
              <View style={[styles.textInputContainer]}>
                <TextInput
                  onChangeText={onChangeSearchValue}
                  value={searchText}
                  placeholder="Search..."
                  error={undefined}
                  onBlur={undefined}
                />
              </View>
              <Pressable
                style={[styles.closeButton]}
                onPress={onCloseButtonPress}
                disabled={disabled}>
                <MaterialIcons
                  name={"close"}
                  size={24}
                  color={"black"}
                />
              </Pressable>
            </View>
            <Space height={10} />
            <ScrollView style={[styles.itemContainer]}>
              {filteredCities.map((item) => (
                <Pressable
                  style={[styles.pressableItem]}
                  key={item.key}
                  onPress={() => handleChangeText(item.value)}>
                  <CM style={[styles.pressableLabel]}>{item.label}</CM>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[
          styles.styledPressable,
          {
            backgroundColor: theme.colors.inputs.background,
            borderColor: error ? "red" : "transparent",
            borderWidth: error ? 3 : 0,
          },
        ]}
        disabled={isDisabled}
        onPress={() => setModalVisible(true)}>
        <CM color={isDisabled ? "#ddd" : theme.colors.text}>{displayValue || placeholder}</CM>
        <MaterialIcons
          name={"arrow-drop-down"}
          size={24}
          color={"black"}
        />
      </Pressable>
      {error && <CS color="red">{error}</CS>}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  modalView: {
    height: "70%",
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#17171750",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    elevation: 2,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  pressableItem: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
    borderRadius: 5,
  },
  pressableLabel: {
    fontSize: 16,
  },
  closeButton: { elevation: 2 },
  styledPressable: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 15,
    borderRadius: 5,
  },
  textInputContainer: {
    minWidth: 200,
  },
});

export default withTheme(CityPicker);
