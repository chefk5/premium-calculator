import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./styledText";
import { colors, mainStyles } from "../../styles/theme";

type Props = {
  onPressFunc: () => void;
};

const CommonBtn = ({ onPressFunc }: Props) => {
  return (
    <Pressable
      onPress={onPressFunc}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? colors.primary : colors.ternary },
      ]}
    >
      <StyledText color={colors.secondary}>Calculate</StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ternary,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    ...mainStyles.marginV,
    padding: 10,
    borderRadius: 5,
  },
});

export default CommonBtn;
