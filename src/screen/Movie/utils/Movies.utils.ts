export type MovieType = {
  id: string | number;
  poster_path: string;
  title: string;
};

type MovieLoadingType = {
  movie: MovieType[];
  loading: boolean;
};

export interface MoviesState {
  nowPlaying: MovieLoadingType;
  upComingMovies: MovieLoadingType;
  popularMovies: MovieLoadingType;
}
