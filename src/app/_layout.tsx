import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, router } from "expo-router";
import { createContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors, darkScheme, lightScheme } from "../styles/theme";
import { BlurView } from "expo-blur";
import { Button, Icon, PaperProvider } from "react-native-paper";
import {
  NavigationContainer,
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from "@react-navigation/native";
import {
  MD3LightTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { usePremiumStore } from "./stores/premiumStore";

const LightTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: lightScheme.colors,
};

const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: darkScheme.colors,
};
export default function Layout() {
  const queryClient = new QueryClient();
  const { isDarkMode } = usePremiumStore((state) => ({
    isDarkMode: state.isDarkMode,
  }));
  const selectedTheme = isDarkMode ? DarkTheme : LightTheme;
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={selectedTheme}>
        <ThemeProvider value={selectedTheme}>
          <Stack screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
              name="index"
              options={{
                title: "Calculate Premium",
                headerShown: true,
                headerStyle: {
                  backgroundColor: selectedTheme.colors.background,
                },
                headerTintColor: selectedTheme.colors.primary,
                headerRight: () => (
                  <Button onPress={() => router.push("/settings")}>
                    <Icon
                      size={25}
                      source="cog"
                      color={selectedTheme.colors.primary}
                    />
                  </Button>
                ),
              }}
            />
            <Stack.Screen
              name="result"
              options={{
                title: "Results",
                headerShown: true,
                headerStyle: {
                  backgroundColor: selectedTheme.colors.background,
                },
                headerTintColor: selectedTheme.colors.primary,
                headerBackTitleVisible: false,
                animation: "none",
              }}
            />

            <Stack.Screen
              name="settings"
              options={{
                title: "Settings",
                headerShown: true,
                headerStyle: {
                  backgroundColor: selectedTheme.colors.background,
                },
                headerTintColor: selectedTheme.colors.primary,
                headerBackTitleVisible: false,
                animation: "none",
              }}
            />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
