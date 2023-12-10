import { StyleSheet } from "react-native";

export const colors = {
  background: "#000",
  backgroundSecondary: "#2a2827",
  ternary: "#978055",
  secondary: "#fddea0",
  primary: "#d4b473",
};

export const fontSizes = {
  sm: 14,
  md: 18,
  bg: 26,
};

export const mainStyles = StyleSheet.create({
  background: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
  },
  marginH: {
    marginHorizontal: 10,
  },
  marginV: {
    marginVertical: 10,
  },

  card: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.backgroundSecondary,
    padding: 10,
  },
});
