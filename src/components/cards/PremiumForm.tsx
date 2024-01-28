import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { mainStyles, colors, fontSizes } from "../../styles/theme";
import PremiumResult from "./PremiumResult";
import CommonBtn from "../common/CommonBtn";
import { calculateGoldPremium } from "../../utils/calculators";
import { GoldData, calculatedGoldInfo } from "../../types";
import { FilteredInput } from "../common/FilteredInput";
import { TextInput } from "react-native-gesture-handler";
import CurrencyBtns from "../CurrencyBtns";
import { useSettingsStore } from "../../app/stores/useSettingsStore";

type Props = {
  livePrice: number | undefined;
  isLoading: boolean;
  error: Error | null;
};

const PremiumForm = ({ livePrice, isLoading, error }: Props) => {
  const currency = useSettingsStore((state) => state.currency);
  const setCurrency = useSettingsStore((state) => state.setCurrency);

  const [goldData, setGoldData] = useState<GoldData>({
    spotPrice: livePrice ?? "",
    purchasePrice: "",
    coinWeightInGrams: "",
    purity: "",
  });

  const [goldCalculations, setGoldCalculations] = useState<calculatedGoldInfo>({
    premiumPrice: "0",
    premiumPercent: "0",
  });

  const updateGoldData = async (value: string, type: keyof GoldData) => {
    setGoldData((prevData) => ({ ...prevData, [type]: value }));
  };

  const calculateGoldData = () => {
    const { premiumPercent, premiumPrice } = calculateGoldPremium(goldData);

    setGoldCalculations({
      premiumPercent,
      premiumPrice,
    });
  };

  useEffect(() => {
    updateGoldData(String(livePrice ?? ""), "spotPrice");
  }, [livePrice]);

  const inputRefs = useRef<TextInput[]>([]);

  const focusNextInput = (index: number) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    } else {
      Keyboard.dismiss();
    }
  };

  const [country, setCountry] = React.useState();

  return (
    <>
      <View style={[mainStyles.card]}>
        <Text style={styles.label}>Currency</Text>
        <CurrencyBtns setCurrency={setCurrency} />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.label}>Market Price</Text>
          {isLoading && (
            <ActivityIndicator
              size={"small"}
              color={colors.primary}
              style={{ marginLeft: 5 }}
            />
          )}
          {error && (
            <Text style={styles.labelError}>
              (Failed to fetch market price)
            </Text>
          )}
        </View>

        <FilteredInput
          value={String(goldData.spotPrice)}
          placeholder="Market / Spot Price"
          onChangeText={(value) => updateGoldData(value, "spotPrice")}
          keyboardType="numbers-and-punctuation"
          onSubmitEditing={() => focusNextInput(0)}
          inputRef={(element: TextInput) => {
            inputRefs.current[0] = element;
          }}
        />

        <Text style={styles.label}>Price ({currency})</Text>
        <FilteredInput
          value={String(goldData.purchasePrice)}
          placeholder="How much did you pay?"
          onChangeText={(value) => updateGoldData(value, "purchasePrice")}
          keyboardType="numbers-and-punctuation"
          onSubmitEditing={() => focusNextInput(1)}
          inputRef={(element: TextInput) => {
            inputRefs.current[1] = element;
          }}
        />
        <Text style={styles.label}>Weight</Text>
        <FilteredInput
          value={String(goldData.coinWeightInGrams)}
          placeholder="Weight (in grams)"
          onChangeText={(value) => updateGoldData(value, "coinWeightInGrams")}
          keyboardType="numbers-and-punctuation"
          onSubmitEditing={() => focusNextInput(2)}
          inputRef={(element: TextInput) => {
            inputRefs.current[2] = element;
          }}
        />
        <Text style={styles.label}>Purity</Text>
        <FilteredInput
          value={String(goldData.purity)}
          placeholder="Gold Purity (%)"
          onChangeText={(value) => updateGoldData(value, "purity")}
          keyboardType="numbers-and-punctuation"
          onSubmitEditing={() => focusNextInput(3)}
          inputRef={(element: TextInput) => {
            inputRefs.current[3] = element;
          }}
        />
        <CommonBtn onPressFunc={() => calculateGoldData()} />
      </View>
      <PremiumResult
        premiumPrice={goldCalculations.premiumPrice}
        premiumPercentage={goldCalculations.premiumPercent}
      />
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
    fontSize: fontSizes.md,
  },
  labelError: {
    color: colors.error,
    paddingBottom: 5,
    paddingTop: 10,
    marginLeft: 5,
  },
});
