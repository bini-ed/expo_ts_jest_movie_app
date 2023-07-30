import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <View>
      <Redirect href={"/screen"} />
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
