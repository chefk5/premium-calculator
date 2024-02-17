import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { createContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../styles/theme";
import { BlurView } from "expo-blur";
import { PaperProvider } from "react-native-paper";

type ContextType = {
  currency: string;
  setCurrency: (currency: string) => void;
};
export const currencyContext = createContext<ContextType | undefined>(
  undefined,
);

export default function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Stack screenOptions={{ headerShadowVisible: false }}>
          <Stack.Screen
            name="index"
            options={{
              title: "Enter data",
              headerShown: true,
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTintColor: colors.primary,
            }}
          />
          <Stack.Screen
            name="result"
            options={{
              title: "Results",
              headerShown: true,
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTintColor: colors.primary,
              headerBackTitleVisible: false,
              animation: "none",
            }}
          />
        </Stack>
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
