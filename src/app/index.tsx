import { Button, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/theme";
import PremiumForm from "../components/PremiumForm";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import useCustomQuery from "../hooks/useCustomQuery";
import { useCurrencyContext } from "../hooks/useCurrencyContext";
import { useRef } from "react";

export default function Page() {
  const { currency, setCurrency } = useCurrencyContext();

  const { data, isLoading, error } = useCustomQuery(currency);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const focusOnSecondInput = () => {
    if (inputRef2.current) {
      inputRef2.current.focus();
    }
  };
  return (
    <ScrollView style={styles.main} keyboardShouldPersistTaps="always">
      <Header />
      <PremiumForm
        livePrice={data}
        isLoading={isLoading}
        error={error}
        currency={currency}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
