import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { MovieType } from "../Movie/utils/Movies.utils";
import { searchMovies } from "../../service/movie.service";
import { AppTextInput } from "../AppTextInput/AppTextInput";
import LoadingIndicator from "../LoadingIndicator";
import MovieCard from "../MovieCard";

type Props = {};

const SearchComponent = (props: Props) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    if (search.length) {
      try {
        const { data } = await searchMovies(search);
        setMovies(data?.results);
      } catch (error: any) {}
    } else {
      console.log("nothing");
    }
    setLoading(false);
  };

  const handelRefresh = () => {
    setRefresh(true);
    handleSearch();
    setRefresh(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
      testID="searchMovie"
    >
      <View
        style={{
          flex: 1,
          width: "90%",
          alignSelf: "center",
          marginVertical: 5,
          paddingBottom: 100,
        }}
        testID="input"
      >
        <AppTextInput
          value={search}
          handleSearch={handleSearch}
          onChangeText={setSearch}
        />

        {loading ? (
          <LoadingIndicator loading={loading} />
        ) : movies?.length ? (
          <>
            <FlatList
              data={movies}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              style={{
                flexGrow: 1,
              }}
              refreshing={refresh}
              onRefresh={handelRefresh}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              removeClippedSubviews={true}
              initialNumToRender={7}
              renderItem={({ item }) => (
                <MovieCard movies={item} type={"popular"} />
              )}
            />
          </>
        ) : (
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginVertical: 80,
              textAlign: "center",
            }}
          >
            No Movie Found
          </Text>
        )}
      </View>
    </View>
  );
};

export default SearchComponent;
