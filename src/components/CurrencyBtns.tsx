import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/theme";
import StyledText from "./common/styledText";
import { currencies, currenciesList } from "../constants";

type Props = {
  setCurrency: (newCurrency: currencies) => void;
};

const CurrencyBtns = ({ setCurrency }: Props) => {
  const [selectedCurrencyBtn, setSelectedCurrencyBtn] = useState(0);

  const handleBtnPress = (btnIndex: number) => {
    setSelectedCurrencyBtn(btnIndex);
    setCurrency(currenciesList[btnIndex] as currencies);
    // Perform any other actions based on the button press if needed
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedCurrencyBtn === 0 && styles.selectedCurrencyButton,
        ]}
        onPress={() => handleBtnPress(0)}
      >
        <StyledText color={colors.secondary}>USD $</StyledText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          selectedCurrencyBtn === 1 && styles.selectedCurrencyButton,
        ]}
        onPress={() => handleBtnPress(1)}
      >
        <StyledText color={colors.secondary}>EUR €</StyledText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          selectedCurrencyBtn === 2 && styles.selectedCurrencyButton,
        ]}
        onPress={() => handleBtnPress(2)}
      >
        <StyledText color={colors.secondary}>GBP £</StyledText>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyBtns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,

    backgroundColor: colors.backgroundSecondary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  selectedCurrencyButton: {
    backgroundColor: colors.primary,
  },
});
