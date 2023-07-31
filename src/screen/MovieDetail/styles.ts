import { StyleSheet } from "react-native";
import AppColor from "../../styles/colors";

const styles = StyleSheet.create({
  imgBackground: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexGrow: 1,
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 300,
    height: 400,
    borderRadius: 25,
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "90%",
  },
  timeText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  time: { color: "white", margin: 2 },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 5,
    fontWeight: "600",
  },
  genres: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 5,
  },
  genresText: {
    color: "grey",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    padding: 2.5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  subTitle: {
    color: "white",
    textAlign: "left",
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 5,
  },
  spoken: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    marginVertical: 5,
  },
  spokenText: {
    color: "whitesmoke",
    textAlign: "left",
    width: "30%",
  },
  companies: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: "90%",
    marginVertical: 5,
  },

  cast: {
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
});

export default styles;
