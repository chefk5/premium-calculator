import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { mainStyles } from "../styles/theme";
import StyledText from "./common/styledText";

type Props = {};

const PremiumResult = (props: Props) => {
  return (
    <View style={[mainStyles.card]}>
      <View style={styles.result}>
        <StyledText customStyles={mainStyles.marginV}>
          Premium price:
        </StyledText>
        <StyledText customStyles={mainStyles.marginV}>1212 $</StyledText>
        <StyledText customStyles={mainStyles.marginV}>
          Premium percentage:
        </StyledText>
        <StyledText customStyles={mainStyles.marginV}>23%</StyledText>
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
