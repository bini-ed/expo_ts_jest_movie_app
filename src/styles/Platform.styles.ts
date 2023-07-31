import { Platform } from "react-native";

export const PlatformStyles = Platform.select({
  ios: {
    fontSize: 16,
    fontFamily: "Avenir",
    color: "white",
  },
  android: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "white",
  },
});
