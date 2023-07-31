import { View } from "react-native";
import React from "react";
import { useGlobalSearchParams, Stack } from "expo-router";

import MovieDetailComponent from "../../src/screen/MovieDetail/MovieDetail";

const MovieDetail = () => {
  const { id } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerTitle: "Detail" }}></Stack.Screen>
      <MovieDetailComponent id={id} />
    </View>
  );
};

export default MovieDetail;
