import { GoldData, CalculatedGoldInfo } from "../types";

export function calculateGoldPremium({
  purchasePrice,
  coinWeightInGrams,
  spotPrice,
  purity,
}: GoldData): CalculatedGoldInfo {
  // Convert the weight from grams to troy ounces
  const coinWeightInOunces = Number(coinWeightInGrams) / 31.1;

  // Calculate the actual gold content based on purity
  const pureGoldContentInOunces = coinWeightInOunces * (Number(purity) / 100);

  // Step 1: Take the purchase price of the coin and divide it by the weight in troy ounces
  const pricePerOunce = Number(purchasePrice) / coinWeightInOunces;

  // Step 2: Take the remainder from step 1 and subtract the current spot price of an ounce
  const remainder = pricePerOunce - Number(spotPrice);

  // Step 3: Take the remainder from step 2 and divide it by the current spot price
  const percentDecimal = remainder / Number(spotPrice);

  // Step 4: Convert the decimal number from step 3 to a percent
  const premiumPercent = (percentDecimal * 100).toFixed(2);

  // Calculate the total price based on the pure gold content
  const totalPrice = Number(spotPrice) * pureGoldContentInOunces;

  // Calculate the price premium
  const premiumPrice = (Number(purchasePrice) - totalPrice).toFixed(2);

  return {
    premiumPercent,
    premiumPrice,
  };
}
