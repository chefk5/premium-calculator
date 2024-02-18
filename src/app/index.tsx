import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../styles/theme";
import PremiumForm from "../components/cards/PremiumForm";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import useCustomQuery from "../hooks/useCustomQuery";
import { usePremiumStore } from "./stores/premiumStore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "react-native-paper";

export default function Page() {
  const currency = usePremiumStore((state) => state.currency);
  const { data, isLoading, error } = useCustomQuery(currency);
  const theme = useTheme();

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll={true}
      extraScrollHeight={30}
      enableResetScrollToCoords={true}
      keyboardOpeningTime={0}
      style={[styles.main, { backgroundColor: theme.colors.background }]}
      bounces={false}
    >
      <PremiumForm livePrice={data} isLoading={isLoading} error={error} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
