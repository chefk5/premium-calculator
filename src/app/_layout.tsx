import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { createContext, useState } from "react";
type ContextType = {
  currency: string;
  setCurrency: (currency: string) => void;
};
export const currencyContext = createContext<ContextType | undefined>(
  undefined,
);

export default function Layout() {
  const queryClient = new QueryClient();

  const [currency, setCurrency] = useState<ContextType["currency"]>("USD");

  return (
    <QueryClientProvider client={queryClient}>
      <currencyContext.Provider value={{ currency, setCurrency }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </currencyContext.Provider>
    </QueryClientProvider>
  );
}
