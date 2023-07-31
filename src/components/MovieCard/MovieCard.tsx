import { View, Image, Dimensions } from "react-native";
import React, { FC } from "react";
import { getImage } from "../../service/movie.service";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { MovieType } from "../../screen/Movie/utils/Movies.utils";
import { TouchableOpacity } from "react-native";
import AppText from "../AppText/AppText";

const { width, height } = Dimensions.get("window");

type MovieCardProps = {
  movies: MovieType;
  type?: string;
};

const MovieCard: FC<MovieCardProps> = ({ movies, type }) => {
  const router = useRouter();

  return (
    <View
      style={[styles.container, { height: type ? height / 3 : height / 2.5 }]}
    >
      <TouchableOpacity
        onPress={() => {
          router.push(`/Movies/${movies?.id}`);
        }}
      >
        <Image
          source={{ uri: getImage(`w400`, movies?.poster_path) }}
          style={[
            styles.image,
            type
              ? {
                  width: width / 2 - 30,
                  height: "90%",
                }
              : {
                  width: width / 2,
                  height: "90%",
                },
          ]}
        />
        <AppText
          styles={styles.title}
          text={
            movies?.title?.length > 20
              ? movies?.title.slice(0, 20) + "..."
              : movies?.title
          }
        ></AppText>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
