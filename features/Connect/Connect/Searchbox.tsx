import { useState } from "react";
import { useSearchBox } from "react-instantsearch-core";
import { StyleProp, View, ViewStyle } from "react-native";

import TextInput from "@/forms/components/TextInput";

export default function Searchbox({
  style,
  containerStyle,
}: {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}) {
  const { query, refine } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  return (
    <View style={[containerStyle]}>
      <TextInput
        style={[style]}
        value={inputValue}
        onChangeText={(text) => {
          setQuery(text);
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
