import { StyleSheet, View } from "react-native";
import React from "react";
import { mainStyles } from "../../styles/theme";
import StyledText from "../common/styledText";

type Props = {
  premiumPrice: string;
  premiumPercentage: string;
};

const PremiumResult = ({ premiumPrice, premiumPercentage }: Props) => {
  return (
    <View style={[mainStyles.card]}>
      <View style={styles.result}>
        <StyledText customStyles={mainStyles.marginV}>
          Premium price:
        </StyledText>
        <StyledText customStyles={mainStyles.marginV}>
          {premiumPrice} $
        </StyledText>
        <StyledText customStyles={mainStyles.marginV}>
          Premium percentage:
        </StyledText>
        <StyledText customStyles={mainStyles.marginV}>
          {premiumPercentage}%
        </StyledText>
      </View>
    </View>
  );
};

export default PremiumResult;

const styles = StyleSheet.create({
  result: {
    justifyContent: "center",
    alignItems: "center",
    ...mainStyles.marginH,
  },
});
