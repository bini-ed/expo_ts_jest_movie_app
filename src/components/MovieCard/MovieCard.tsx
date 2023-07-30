import { View, Image, Dimensions } from "react-native";
import React, { FC } from "react";
import { getImage } from "../../service/movie.service";
import { styles } from "./styles";
import { Text } from "react-native";
import { useRouter } from "expo-router";
import { MovieType } from "../Movie/utils/Movies.utils";
import { TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

type MovieCardProps = {
  movies: MovieType;
  type?: string;
};

const MovieCard: FC<MovieCardProps> = ({ movies, type }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push(`/Movies/${movies?.id}`);
        }}
      >
        <Image
          source={{ uri: getImage(`w500`, movies?.poster_path) }}
          style={[
            styles.image,
            type
              ? { width: width / 2 - 30, height: 200, resizeMode: "contain" }
              : null,
          ]}
        />
        <Text style={styles.title}>
          {movies?.original_title?.length > 25
            ? movies?.original_title.slice(0, 25) + "..."
            : movies?.original_title}
        </Text>
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
