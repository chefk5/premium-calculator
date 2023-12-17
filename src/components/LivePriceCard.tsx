import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { mainStyles, fontSizes } from "../styles/theme";
import StyledText from "./common/styledText";
import useCustomQuery from "../hooks/useCustomQuery";
import { currencyContext } from "../app/_layout";
import { useCurrencyContext } from "../hooks/useCurrencyContext";

type Props = {};

const LivePriceCard = (props: Props) => {
  const { data, isLoading, error } = useCustomQuery();
  const { currency, setCurrency } = useCurrencyContext();

  // const firstAskValue: number = data[0]?.spreadProfilePrices[0]?.ask || 0;

  const context = useContext(currencyContext);

  if (!context) {
    // Handle the case where the context is not yet available
    return null;
  }

  console.log(
    "🚀 ~ file: LivePriceCard.tsx:22 ~ LivePriceCard ~ currency:",
    currency,
  );

  return (
    <>
      <View style={[mainStyles.card]}>
        <View style={styles.livePriceRow}>
          <View>
            <StyledText size={fontSizes.bg}>Live Price</StyledText>
          </View>
          <View style={styles.livePriceText}>
            <StyledText size={fontSizes.bg}>$/oz</StyledText>
          </View>
        </View>
        <StyledText size={fontSizes.sm}>Last updated: 13:34</StyledText>
      </View>
    </>
  );
};

export default LivePriceCard;

const styles = StyleSheet.create({
  livePriceText: {
    justifyContent: "center",
  },
  livePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
});
