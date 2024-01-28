import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fontSizes } from "../../styles/theme";

type Props = {
  children: React.ReactNode;
  size?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  color?: string;
  customStyles?: object;
};

const StyledText = (props: Props) => {
  const { children, size, fontWeight, color, customStyles } = props;
  return (
    <Text
      style={[
        styles.text,
        { ...customStyles },
        { color: color || colors.primary },
        { fontSize: size || fontSizes.md },
        { fontWeight: fontWeight || "500" },
      ]}
    >
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
  },
});
