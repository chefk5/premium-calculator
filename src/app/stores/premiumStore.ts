import { create } from "zustand";
import { CalculatedGoldInfo, Currency, GoldData } from "../../types";
import { calculateGoldPremium } from "../../utils/calculators";

interface PremiumState {
  premiumPrice: string;
  premiumPercent: string;
  calculatePremium: (data: GoldData) => void;
  changeCurrency: (selectedCurrency: Currency) => void;
  currency: Currency;
  isDarkMode: boolean;
  changeTheme: (isDarkMode: boolean) => void;
}

export const usePremiumStore = create<PremiumState>((set) => ({
  isDarkMode: false,
  premiumPrice: "0",
  premiumPercent: "0",
  currency: "USD",
  changeTheme: (isDarkMode) => set(() => ({ isDarkMode: !isDarkMode })),
  changeCurrency: (selectedCurrency: Currency) =>
    set(() => ({ currency: selectedCurrency })),
  calculatePremium: (data) =>
    set(() => {
      const { premiumPrice, premiumPercent } = calculateGoldPremium(data);
      return { premiumPrice, premiumPercent };
    }),
}));
