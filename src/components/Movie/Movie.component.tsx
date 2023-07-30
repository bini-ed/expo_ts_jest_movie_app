import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, FC } from "react";
import {
  getImage,
  getPlayingMoviesService,
  getUpcomingMoviesService,
  getPopularMoviesService,
} from "../../service/movie.service";
import { FlatList } from "react-native";
import MovieCard from "../MovieCard";
import { ScrollView } from "react-native";
import { MovieType } from "./utils/Movies.utils";
import LoadingIndicator from "../LoadingIndicator";

const MoviesComponent = () => {
  const [playingMovies, setPlayingMovies] = useState<MovieType[]>([]);
  const [pmLoading, setPMLoading] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>([]);
  const [umLoading, setUMLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [poLoading, setPOLoading] = useState(false);

  useEffect(() => {
    getPlayingMovie();
    getUpcomingMovie();
    getPopularMovie();
  }, []);

  const getPlayingMovie = async () => {
    setPMLoading(true);
    try {
      const { data } = await getPlayingMoviesService();
      setPlayingMovies(data.results);
    } catch (error) {
      console.log(error);
    }
    setPMLoading(false);
  };
  const getUpcomingMovie = async () => {
    setUMLoading(true);
    try {
      const { data } = await getUpcomingMoviesService();
      setUpcomingMovies(data.results);
    } catch (error) {
      console.log(error);
    }
    setUMLoading(false);
  };
  const getPopularMovie = async () => {
    setPOLoading(true);
    try {
      const { data } = await getPopularMoviesService();
      setPopularMovies(data.results);
    } catch (error) {
      console.log(error);
    }
    setPOLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      {playingMovies ? (
        <FlatList
          data={playingMovies}
          horizontal
          style={{
            flexGrow: 1,
          }}
          ListHeaderComponentStyle={{ zIndex: 1, backgroundColor: "red" }}
          onEndReachedThreshold={0.8}
          renderItem={({ item }) => <MovieCard movies={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <LoadingIndicator loading={pmLoading} />
      )}

      <Text style={styles.title}>Popular Movies</Text>

      {popularMovies ? (
        <FlatList
          data={popularMovies}
          horizontal
          style={{
            flexGrow: 1,
          }}
          ListHeaderComponentStyle={{ zIndex: 1, backgroundColor: "red" }}
          onEndReachedThreshold={0.8}
          renderItem={({ item }) => <MovieCard type="popular" movies={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <LoadingIndicator loading={poLoading} />
      )}

      <Text style={styles.title}>Upcoming Movies</Text>

      {upcomingMovies ? (
        <FlatList
          contentContainerStyle={{ marginBottom: 100 }}
          data={upcomingMovies}
          horizontal
          style={{
            flexGrow: 1,
          }}
          ListHeaderComponentStyle={{ zIndex: 1, backgroundColor: "red" }}
          onEndReachedThreshold={0.8}
          renderItem={({ item }) => <MovieCard type="popular" movies={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <LoadingIndicator loading={umLoading} />
      )}
    </ScrollView>
  );
};

export default MoviesComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: { color: "white", margin: 2, fontWeight: "600", fontSize: 16 },
});
