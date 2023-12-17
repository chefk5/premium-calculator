import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { mainStyles, colors, fontSizes } from "../styles/theme";
import StyledText from "./common/styledText";
import PremiumResult from "./PremiumResult";
import CommonBtn from "./common/CommonBtn";
import { calculateGoldPremium } from "../utils/calculators";

type Props = {};

const PremiumForm = (props: Props) => {
  const examplePremium = calculateGoldPremium({
    purchasePrice: 2029.86,
    coinWeightInGrams: 31.1,
    spotPrice: 1950.86,
    purity: 90,
  });
  console.log(examplePremium);
  return (
    <>
      <View style={[mainStyles.card]}>
        <Text style={styles.label}>Price</Text>

        <TextInput
          style={styles.input}
          placeholder="Coin Price"
          placeholderTextColor={colors.ternary}
          // onChangeText={(text) => setCoinPrice(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Weight</Text>

        <TextInput
          style={styles.input}
          placeholder="Coin Weight (in grams)"
          placeholderTextColor={colors.ternary}
          //  onChangeText={(text) => setCoinWeight(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Purity</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor={colors.ternary}
          placeholder="Gold Purity (%)"
          onChangeText={(text) => null}
          keyboardType="numeric"
        />
        <CommonBtn />
      </View>
      <PremiumResult />
    </>
  );
};

export default PremiumForm;

const styles = StyleSheet.create({
  input: {
    color: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    fontSize: fontSizes.md,
  },
  label: {
    color: colors.primary,
    paddingBottom: 5,
    paddingTop: 10,
  },
});
