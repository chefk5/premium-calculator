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

export default function Page() {
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <ScrollView style={styles.content}>
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
