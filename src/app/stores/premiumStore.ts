import { create } from "zustand";
import { CalculatedGoldInfo, Currency, GoldData } from "../../types";
import { calculateGoldPremium } from "../../utils/calculators";

interface PremiumState {
  premiumPrice: string;
  premiumPercent: string;
  calculatePremium: (data: GoldData) => void;
  changeCurrency: (selectedCurrency: Currency) => void;
  currency: Currency;
}

export const usePremiumStore = create<PremiumState>((set) => ({
  premiumPrice: "0",
  premiumPercent: "0",
  currency: "USD",
  changeCurrency: (selectedCurrency: Currency) =>
    set(() => ({ currency: selectedCurrency })),
  calculatePremium: (data) =>
    set(() => {
      const { premiumPrice, premiumPercent } = calculateGoldPremium(data);
      return { premiumPrice, premiumPercent };
    }),
}));
