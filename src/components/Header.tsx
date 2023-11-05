import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { mainStyles, fontSizes, colors } from "../styles/theme";
import StyledText from "./common/styledText";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <StyledText size={fontSizes.sm}>Gold Premium Calculator</StyledText>
      <Text>settings</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    ...mainStyles.marginV,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {},
});
