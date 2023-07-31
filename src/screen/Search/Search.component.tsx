import { View, Keyboard } from "react-native";
import React, { useState, useCallback, useMemo } from "react";
import { MovieType } from "../Movie/utils/Movies.utils";
import { searchMovies } from "../../service/movie.service";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import ListMovie from "../../components/ListMovie";
import { styles } from "./styles";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = useCallback(async () => {
    Keyboard.dismiss();
    setLoading(true);
    if (search.length) {
      try {
        const { data } = await searchMovies(search);
        setMovies(data?.results);
      } catch (error: any) {
        setError("Error occurred, Please try again");
      }
    }
    setLoading(false);
  }, [search]);

  const handelRefresh = () => {
    setRefresh(true);
    handleSearch();
    setRefresh(false);
  };

  const SearchMovie = useMemo(
    () => (
      <ListMovie
        error={error}
        loading={loading}
        movie={movies}
        title=""
        numColumns={2}
        type="search"
        refreshing={refresh}
        onRefresh={handelRefresh}
      />
    ),
    [movies, loading, refresh, handelRefresh, error]
  );

  return (
    <View style={styles.container} testID="searchMovie">
      <View style={styles.search} testID="input">
        <AppTextInput
          value={search}
          handleSearch={handleSearch}
          onChangeText={setSearch}
        />

        {SearchMovie}
      </View>
    </View>
  );
};

export default SearchComponent;
