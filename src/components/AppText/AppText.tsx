import { StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { PlatformStyles } from "../../styles/Platform.styles";

type TextType = {
  text: string;
  styles?: any;
};

const AppText: FC<TextType> = ({ text, styles }) => {
  return <Text style={[{ ...PlatformStyles }, styles]}>{text}</Text>;
};

export default AppText;
