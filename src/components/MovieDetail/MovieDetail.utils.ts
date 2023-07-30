export type MovieDetailType = {
  poster_path: string;
  id: string | number;
  original_title: string;
  runtime: string;
  title: string;
  genres: any[];
  overview: string;
  spoken_languages: any[];
  production_companies: any[];
  profile_path: string;
};
export type MovieCastType = {
  id: string;
  profile_path: string;
  name: string;
};
