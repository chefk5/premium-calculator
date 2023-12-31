import { create } from "zustand";
import { currencies } from "../../constants";

interface SettingsState {
  currency: currencies;
  setCurrency: (newCurrency: currencies) => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  currency: currencies.USD,
  setCurrency: (newCurrency) => set({ currency: newCurrency }),
}));
