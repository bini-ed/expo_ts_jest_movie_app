import { StyleSheet } from "react-native";
import AppColor from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  textInput: {
    // backgroundColor: '#CCFFFF',
    backgroundColor: AppColor.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: "whitesmoke",
    flex: 0.8,
    height: 35,
    padding: 5,
  },
  searchBtn: {
    // backgroundColor: 'lightblue',
    backgroundColor: "grey",
    height: 35,
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
