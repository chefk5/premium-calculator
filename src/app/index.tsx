import { Button, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/theme";
import PremiumForm from "../components/cards/PremiumForm";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import useCustomQuery from "../hooks/useCustomQuery";
import { useCurrencyContext } from "../hooks/useCurrencyContext";
import { useRef } from "react";
import LivePriceCard from "../components/cards/LivePriceCard";
import { useSettingsStore } from "./stores/useSettingsStore";

export default function Page() {
  const currency = useSettingsStore((state) => state.currency);
  const { data, isLoading, error } = useCustomQuery(currency);

  return (
    <ScrollView style={styles.main} keyboardShouldPersistTaps="always">
      <Header />
      {/* <LivePriceCard livePrice={data} /> */}
      <PremiumForm livePrice={data} isLoading={isLoading} error={error} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
