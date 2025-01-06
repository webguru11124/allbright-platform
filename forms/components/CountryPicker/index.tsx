import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useMemo, useState } from "react";
import { Alert, Modal, Platform, Pressable, ScrollView, StyleSheet, TextInputProps, View } from "react-native";

import Space from "@/components/Space";
import { CM, CS } from "@/components/Typography";
import TextInput from "@/forms/components/TextInput";
import withTheme from "@/hocs/withTheme";
import { pickerAdaptor as countries } from "@/utils/data/countries";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: Function;
  error: string | undefined;
  onBlur: Function;
  theme: Theme;
};

const CountryPicker = ({ theme, onChangeText, placeholder, onBlur, error, value }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState<string | undefined>(undefined);

  const filteredCountries = useMemo(
    () =>
      searchText !== undefined
        ? countries.filter((val) => val.label.toLowerCase().includes(searchText?.toLowerCase()))
        : countries,
    [searchText]
  );

  const handleChangeText = (value: string) => {
    onChangeText(value);
    setModalVisible(false);
  };

  const displayValue = useMemo(
    () => (Boolean(value) ? countries.find((item) => item.value === value)?.label : undefined),
    [value]
  );

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
              <CM style={[styles.title]}>Country</CM>
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
                onPress={onCloseButtonPress}>
                <MaterialIcons
                  name={"close"}
                  size={24}
                  color={"black"}
                />
              </Pressable>
            </View>
            <Space height={10} />
            <ScrollView style={[styles.itemContainer]}>
              {filteredCountries.map((item) => (
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
        onPress={() => setModalVisible(true)}>
        <CM style={[{ color: theme.colors.text }]}>{displayValue || placeholder}</CM>
        <MaterialIcons
          name={"arrow-drop-down"}
          size={24}
          color={"black"}
        />
      </Pressable>
      {error && <CS style={[styles.error]}>{error}</CS>}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    height: "70%",
    width: "100%",
    backgroundColor: "#eee",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    ...Platform.select({
      android: {
        elevation: 2,
        borderColor: "#00000025",
        borderWidth: 1,
      },
      ios: {
        shadowColor: "#17171750",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 15,
        shadowOpacity: 1,
      },
    }),
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
    width: "20%",
  },
  textInputContainer: {
    width: "70%",
  },
  closeButton: { width: 20, elevation: 2 },
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
  error: {
    color: "red",
  },
});

export default withTheme(CountryPicker);
