import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/theme";
import { useTheme } from "react-native-paper";

type Props = {};

const Result = (props: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>Result</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
