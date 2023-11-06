import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { mainStyles, colors, fontSizes } from "../styles/theme";
import StyledText from "./common/styledText";

type Props = {};

const PremiumForm = (props: Props) => {
  return (
    <>
      <View style={[mainStyles.card]}>
        <Text style={styles.label}>Price</Text>

        <TextInput
          style={styles.input}
          placeholder="Coin Price"
          placeholderTextColor={colors.text}
          // onChangeText={(text) => setCoinPrice(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Weight</Text>

        <TextInput
          style={styles.input}
          placeholder="Coin Weight (in grams)"
          placeholderTextColor={colors.text}
          //  onChangeText={(text) => setCoinWeight(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Purity</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor={colors.text}
          placeholder="Gold Purity (%)"
          onChangeText={(text) => null}
          keyboardType="numeric"
        />
        <View style={styles.result}>
          <StyledText customStyles={mainStyles.marginV}>
            Premium price: 1212
          </StyledText>
        </View>
      </View>
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
  result: {
    justifyContent: "center",
    alignItems: "center",
    ...mainStyles.marginH,
  },
});
