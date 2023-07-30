import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";

import AppColor from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  textInput: {
    // backgroundColor: '#CCFFFF',
    backgroundColor: AppColor.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: "whitesmoke",
    flex: 0.8,
    height: 35,
    padding: 5,
  },
  searchBtn: {
    // backgroundColor: 'lightblue',
    backgroundColor: "grey",
    height: 35,
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
