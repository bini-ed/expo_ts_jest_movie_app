import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="screen"
        options={{
          headerTitle: "Movies",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _layout;
