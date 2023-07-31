import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

import {
  getImage,
  movieCastDetails,
  movieDetailService,
} from "../../service/movie.service";
import styles from "./styles";
import { MovieCastType, MovieDetailType } from "./utils/MovieDetail.utils";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Error from "../../components/Error/Error";

type Props = {
  id: any;
};

const MovieDetailComponent: FC<Props> = ({ id }) => {
  const [detail, setDetail] = useState<MovieDetailType>();
  const [cast, setCast] = useState<MovieCastType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getDetail = async () => {
    setLoading(true);
    try {
      const { data } = await movieDetailService(id);
      const response = await movieCastDetails(id);
      setCast(response.data.cast);
      setDetail(data);
    } catch (error) {
      setError("Error occurred, Please try again!");
      setCast([]);
      // setDetail(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {loading ? (
        <LoadingIndicator loading={loading} />
      ) : error ? (
        <Error message={error} />
      ) : (
        <ImageBackground
          source={{ uri: getImage("w500", detail?.poster_path) }}
          resizeMode="cover"
          style={styles.imgBackground}
        >
          <LinearGradient colors={["transparent", "black", "black"]}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <Image
                source={{ uri: getImage("w500", detail?.poster_path) }}
                style={styles.img}
              />
              <View style={styles.container}>
                <View style={styles.timeText}>
                  <AntDesign name="clockcircle" color={"white"} />
                  <Text style={styles.time}>{detail?.runtime}m</Text>
                </View>
                <Text style={styles.title}>{detail?.title}</Text>

                <View style={styles.genres}>
                  {detail?.genres?.map((items, index) => (
                    <Text key={index} style={styles.genresText}>
                      {items.name}
                    </Text>
                  ))}
                </View>
                <Text
                  style={{
                    color: "white",
                    width: "100%",
                  }}
                >
                  {detail?.overview}
                </Text>
                {cast.length ? (
                  <>
                    <Text style={styles.subTitle}>Casts</Text>
                    <FlatList
                      data={cast}
                      horizontal
                      style={{
                        flexGrow: 1,
                      }}
                      onEndReachedThreshold={0.8}
                      renderItem={({ item }) => (
                        <View style={styles.cast}>
                          <Image
                            source={{
                              uri: getImage("w300", item.profile_path),
                            }}
                            style={{ width: 50, height: 50, borderRadius: 25 }}
                          />
                          <Text key={item.id} style={{ color: "white" }}>
                            {item.name}
                          </Text>
                        </View>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </>
                ) : null}
                <Text style={styles.subTitle}>Languages</Text>
                <View style={styles.spoken}>
                  {detail?.spoken_languages?.map((items, index) => (
                    <Text key={index} style={styles.spokenText}>
                      {items.english_name}
                    </Text>
                  ))}
                </View>
                <Text style={styles.subTitle}>Production</Text>
                <View style={styles.companies}>
                  {detail?.production_companies?.map((items, index) => (
                    <Text
                      key={index}
                      style={{ color: "whitesmoke", width: "30%" }}
                    >
                      {items.name}
                    </Text>
                  ))}
                </View>
              </View>
            </ScrollView>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};

export default MovieDetailComponent;
