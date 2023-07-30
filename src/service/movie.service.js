import axios from "axios";

const apikey = "bc02578236dafcc882d17ce0fe357cf3";
const API_URL = "https://api.themoviedb.org/3/movie";

export const getImage = (size, path) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const getUpcomingMoviesService = () => {
  return axios.get(`${API_URL}/upcoming?api_key=${apikey}`);
};
export const getPlayingMoviesService = () => {
  return axios.get(`${API_URL}/now_playing?api_key=${apikey}`);
};
export const getPopularMoviesService = () => {
  return axios.get(`${API_URL}/popular?api_key=${apikey}`);
};
export const searchMovies = (keyword) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`
  );
};
export const movieDetailService = (id) => {
  return axios.get(`${API_URL}/${id}?api_key=${apikey}`);
};
export const movieCastDetails = (id) => {
  return axios.get(`${API_URL}/${id}/credits?api_key=${apikey}`);
};
