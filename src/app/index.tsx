import { StyleSheet } from "react-native";
import { colors } from "../styles/theme";
import PremiumForm from "../components/cards/PremiumForm";
import { ScrollView } from "react-native-gesture-handler";
import useCustomQuery from "../hooks/useCustomQuery";
import { useSettingsStore } from "./stores/useSettingsStore";

export default function Page() {
  const currency = useSettingsStore((state) => state.currency);
  const { data, isLoading, error } = useCustomQuery(currency);

  return (
    <ScrollView style={styles.main} keyboardShouldPersistTaps="always">
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
