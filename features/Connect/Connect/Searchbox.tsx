import { useRef, useState } from "react";
import { useSearchBox } from "react-instantsearch-core";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import TextInput from "@/forms/components/TextInput";

export default function Searchbox({
  style,
  onChange,
  containerStyle,
}: {
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}) {
  const { query, refine } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<any>(null);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  // We bypass the state update if the input is focused to avoid concurrent
  // updates when typing.
  if (query !== inputValue && !inputRef.current?.isFocused()) {
    setInputValue(query);
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        ref={inputRef}
        style={[styles.input, style]}
        value={inputValue}
        onChangeText={(text) => {
          setQuery(text);
          onChange();
        }}
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        autoComplete="off"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252b33",
    padding: 18,
  },
  input: {
    height: 48,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
