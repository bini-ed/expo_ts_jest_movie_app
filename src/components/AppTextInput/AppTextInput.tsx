import { TextInput, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type TextInputType = {
  value: string;
  handleSearch: Function;
  onChangeText: Function;
};

export const AppTextInput: FC<TextInputType> = ({
  value,
  onChangeText,
  handleSearch,
}) => {
  return (
    <View style={styles.container} testID="AppTextInput">
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholderTextColor="whitesmoke"
        placeholder="Search Movies"
        testID="inputField"
      ></TextInput>

      <TouchableOpacity
        testID="searchBtn"
        style={styles.searchBtn}
        onPress={() => handleSearch()}
      >
        <MaterialIcons name="search" color={"white"} size={25}></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
};
