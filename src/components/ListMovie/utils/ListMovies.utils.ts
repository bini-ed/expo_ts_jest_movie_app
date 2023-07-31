import { MovieType } from "../../../screen/Movie/utils/Movies.utils";

export type ListMoviePropType = {
  movie: MovieType[];
  error: string;
  title: string;
  loading: boolean;
  numColumns?: number;
  refreshing?: boolean;
  onRefresh?: Function;
  retry?: Function;
  type?: string;
};
export type ColumnWrapperStyleType = {
  columnWrapperStyle: any;
};
