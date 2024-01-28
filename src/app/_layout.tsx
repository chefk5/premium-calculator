import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { createContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../styles/theme";
import { BlurView } from "expo-blur";

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
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Premium Calculator",
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.primary,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
