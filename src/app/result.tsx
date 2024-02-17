import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/theme";

type Props = {};

const Result = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
