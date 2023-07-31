import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState, useCallback, useMemo } from "react";

import {
  getPlayingMoviesService,
  getUpcomingMoviesService,
  getPopularMoviesService,
} from "../../service/movie.service";
import { MoviesState } from "./utils/Movies.utils";
import ListMovie from "../../components/ListMovie";

const MoviesComponent = () => {
  const handleChange = (data: keyof MoviesState, response: any) => {
    setMovies((prev) => ({
      ...prev,
      [data]: {
        ...prev.nowPlaying,
        movie: response.movie,
        loading: response.loading,
      },
    }));
  };

  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: { loading: false, movie: [] },
    upComingMovies: { loading: false, movie: [] },
    popularMovies: { loading: false, movie: [] },
  });
  const [error, setError] = useState({
    nowPlaying: "",
    upComingMovies: "",
    popularMovies: "",
  });

  useEffect(() => {
    getPlayingMovie();
    getUpcomingMovie();
    getPopularMovie();
  }, []);

  const clearError = () => {
    setError({
      nowPlaying: "",
      popularMovies: "",
      upComingMovies: "",
    });
  };

  const getPlayingMovie = useCallback(async () => {
    handleChange("nowPlaying", { loading: true });
    clearError();
    try {
      const { data } = await getPlayingMoviesService();
      handleChange("nowPlaying", { movie: data.results, loading: false });
    } catch (error) {
      handleChange("nowPlaying", { movie: [], loading: false });
      setError((prev) => ({
        ...prev,
        nowPlaying: "Error fetching now playing movies",
      }));
    }
  }, []);

  const getUpcomingMovie = useCallback(async () => {
    handleChange("popularMovies", { loading: true });
    clearError();
    try {
      const { data } = await getUpcomingMoviesService();
      handleChange("upComingMovies", { movie: data.results, loading: false });
    } catch (error) {
      handleChange("upComingMovies", { movie: [], loading: false });
      setError((prev) => ({
        ...prev,
        upComingMovies: "Error fetching upcoming movies",
      }));
    }
  }, []);

  const getPopularMovie = useCallback(async () => {
    handleChange("popularMovies", { loading: true });
    clearError();
    try {
      const { data } = await getPopularMoviesService();
      handleChange("popularMovies", { movie: data.results, loading: false });
    } catch (error) {
      handleChange("popularMovies", { movie: [], loading: false });
      setError((prev) => ({
        ...prev,
        popularMovies: "Error fetching popular movies",
      }));
    }
  }, []);

  const moviesList = useMemo(
    () => (
      <>
        <ListMovie
          movie={movies.nowPlaying.movie}
          error={error.nowPlaying}
          loading={movies.nowPlaying.loading}
          title="Now Playing"
          retry={getPlayingMovie}
        />
        <ListMovie
          movie={movies.popularMovies.movie}
          error={error.popularMovies}
          loading={movies.popularMovies.loading}
          title="Popular Movies"
          retry={getPopularMovie}
          type="popular"
        />
        <ListMovie
          movie={movies.upComingMovies.movie}
          error={error.upComingMovies}
          loading={movies.upComingMovies.loading}
          title="Upcoming Movies"
          retry={getUpcomingMovie}
          type="upcoming"
        />
      </>
    ),
    [movies, error, getPlayingMovie, getPopularMovie, getUpcomingMovie]
  );

  return <ScrollView style={styles.container}>{moviesList}</ScrollView>;
};

export default MoviesComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: { color: "white", margin: 2, fontWeight: "600", fontSize: 16 },
});
