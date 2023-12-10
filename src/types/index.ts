export type goldToBeCalculated = {
  purchasePrice: number;
  coinWeightInGrams: number;
  spotPrice: number;
  purity: number;
};

export type calculatedGoldInfo = {
  premiumPercent: number | string;
  pureGoldContentInOunces: number;
  pricePremium: number;
  totalPrice: number;
};
