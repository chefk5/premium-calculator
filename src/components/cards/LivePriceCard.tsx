import { StyleSheet, View } from "react-native";
import React from "react";
import { mainStyles, fontSizes } from "../../styles/theme";
import StyledText from "../common/styledText";

type Props = {
  livePrice: number | undefined;
};

const LivePriceCard = ({ livePrice }: Props) => {
  return (
    <>
      <View style={[mainStyles.card]}>
        <View style={styles.livePriceRow}>
          <View>
            <StyledText size={fontSizes.bg}>Live Price</StyledText>
          </View>
          <View style={styles.livePriceText}>
            <StyledText size={fontSizes.bg}>{livePrice}$/oz</StyledText>
          </View>
        </View>
        {/* <StyledText size={fontSizes.sm}>Last updated: 13:34</StyledText> */}
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
