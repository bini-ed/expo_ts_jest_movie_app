import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import SearchComponent from "../../src/screen/Search/Search.component";
type Props = {};

const Search = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerTitle: "Search" }}></Stack.Screen>
      <SearchComponent />
    </View>
  );
};

export default Search;
