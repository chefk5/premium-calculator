import { StyleSheet, View, Pressable, Dimensions } from "react-native";
import React from "react";
import { colors } from "../styles/theme";
import StyledText from "./common/styledText";
import { currenciesList } from "../constants";
import { usePremiumStore } from "../app/stores/premiumStore";
const windowWidth = Dimensions.get("window").width;

const CurrencyBtns = () => {
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
    <View style={styles.container}>
      {currenciesList.map((currency, index) => (
        <Pressable
          key={currency}
          style={[
            styles.button,
            selectedCurrency === currency && styles.selectedCurrencyButton,
          ]}
          onPress={() => handleBtnPress(index)}
          accessibilityLabel={`Select ${currency}`}
        >
          <StyledText
            color={
              selectedCurrency === currency ? colors.secondary : colors.primary
            }
          >
            {currency}
          </StyledText>
        </Pressable>
      ))}
    </View>
  );
};

export default CurrencyBtns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background, // Assuming corrected color name
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: windowWidth * 0.25, // 25% of the window width
  },
  selectedCurrencyButton: {
    borderColor: colors.secondary,
  },
});
