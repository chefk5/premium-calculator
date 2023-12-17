import { Link } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { colors, fontSizes, mainStyles } from "../styles/theme";
import StyledText from "../components/common/styledText";
import LivePriceCard from "../components/LivePriceCard";
import PremiumForm from "../components/PremiumForm";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.content}>
        <Header />
        <LivePriceCard />
        <PremiumForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
    // alignItems: "center",
  },
  content: {},
});
