import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

const LoadingIndicator: FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <ActivityIndicator
      animating={loading}
      color={"orange"}
      size={25}
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></ActivityIndicator>
  );
};

export default LoadingIndicator;
