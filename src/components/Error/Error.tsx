import { View, Button } from "react-native";
import React, { FC } from "react";
import AppText from "../AppText/AppText";
import { styles } from "./styles";

type Props = {
  message: string;
  retry?: Function;
};
const Error: FC<Props> = ({ message, retry }) => {
  return (
    <View style={styles.container}>
      <AppText styles={styles.text} text={message}></AppText>
      {retry ? (
        <Button onPress={() => retry()} title="Retry" color={"blue"}></Button>
      ) : null}
    </View>
  );
};

export default Error;
