import { StyleSheet, View, Pressable, Dimensions } from "react-native";
import React from "react";
import { colors } from "../styles/theme";
import StyledText from "./common/styledText";
import { currenciesList } from "../constants";
import { usePremiumStore } from "../app/stores/premiumStore";
import { Button, Chip, useTheme } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;

const CurrencyBtns = () => {
  const theme = useTheme();

  const { currency: selectedCurrency, changeCurrency } = usePremiumStore(
    (state) => ({
      currency: state.currency,
      changeCurrency: state.changeCurrency,
    }),
  );
  const handleBtnPress = (btnIndex: number) => {
    changeCurrency(currenciesList[btnIndex]);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {currenciesList.map((currency, index) => {
        const selected = selectedCurrency === currency;
        return (
          <Button
            key={currency}
            mode="outlined"
            onPress={() => handleBtnPress(index)}
            style={[
              {
                borderColor: selected
                  ? theme.colors.primary
                  : theme.colors.primaryContainer,
              },
            ]}
          >
            {currency}
          </Button>
        );
      })}
    </View>
  );
};

export default CurrencyBtns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "30%",
  },
});
