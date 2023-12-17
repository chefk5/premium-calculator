import { useContext } from "react";
import { currencyContext } from "../app/_layout";

export const useCurrencyContext = () => {
  const context = useContext(currencyContext);

  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }

  return context;
};
