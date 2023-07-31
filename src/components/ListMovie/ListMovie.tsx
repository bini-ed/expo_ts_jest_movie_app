import { FlatList, View } from "react-native";
import React, { FC } from "react";
import Error from "../Error/Error";
import MovieCard from "../MovieCard";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { styles } from "./styles";
import AppText from "../AppText/AppText";
import {
  ColumnWrapperStyleType,
  ListMoviePropType,
} from "./utils/ListMovies.utils";

const ListMovie: FC<ListMoviePropType> = ({
  error,
  movie,
  title,
  loading,
  numColumns,
  onRefresh,
  refreshing,
  retry,
  type,
}) => {
  let style: ColumnWrapperStyleType = {
    columnWrapperStyle: {},
  };
  numColumns
    ? (style.columnWrapperStyle = {
        justifyContent: "space-between",
      })
    : delete style.columnWrapperStyle;

  return (
    <View
      style={[
        styles.container,
        { marginBottom: type == "upcoming" ? 50 : null },
      ]}
    >
      <AppText text={title}></AppText>
      <View style={styles.flatList}>
        {error ? (
          <Error retry={retry} message={error} />
        ) : loading ? (
          <LoadingIndicator loading={loading} />
        ) : movie.length ? (
          <>
            <FlatList
              bounces={numColumns ? true : false}
              data={movie}
              horizontal={numColumns ? false : true}
              numColumns={numColumns ? numColumns : 1}
              {...style}
              refreshing={refreshing ? refreshing : false}
              onRefresh={onRefresh ? () => onRefresh() : () => {}}
              onEndReachedThreshold={0.8}
              renderItem={({ item }) => <MovieCard type={type} movies={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        ) : (
          <Error message="No movie found in this category" />
        )}
      </View>
    </View>
  );
};

export default ListMovie;
