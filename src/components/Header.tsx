import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { mainStyles, fontSizes, colors } from "../styles/theme";
import StyledText from "./common/styledText";
import { Feather } from "@expo/vector-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <StyledText size={fontSizes.sm}>Premium Calculator</StyledText>
      <Pressable onPress={() => console.log("he")}>
        <Feather name="settings" size={24} color={colors.secondary} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.primary,
    ...mainStyles.marginV,

    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {},
});
