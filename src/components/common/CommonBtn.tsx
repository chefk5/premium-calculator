import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./styledText";
import { colors, mainStyles } from "../../styles/theme";
import { Button, useTheme } from "react-native-paper";

type Props = {
  onPressFunc: () => void;
};

const CommonBtn = ({ onPressFunc }: Props) => {
  const theme = useTheme();

  return (
    <Button mode="contained" onPress={onPressFunc} style={styles.container}>
      Calculate
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderRadius: 12,
  },
});

export default CommonBtn;
