import { StyleSheet } from "react-native";

export const colors = {
  background: "#fff",
  backgroundprimary: "#2a2827",
  primary: "#947d50",
  secondary: "#EDE1C7",
  textBlack: "#000",
  error: "#ff0000",
  colorLight: "#D4B473",
  white: "#fff",
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
    marginHorizontal: "2%",
  },
  marginV: {
    marginVertical: "2%",
  },
});
