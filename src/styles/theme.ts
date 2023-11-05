import { StyleSheet } from "react-native";

export const colors = {
  background: "#000",
  backgroundSecondary: "#2a2827",
  primary: "#d4b473",
  text: "#978055",
  secondary: "#d1af70",
  ternary: "#fddea0",
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
