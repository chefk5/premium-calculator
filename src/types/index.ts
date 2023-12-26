export type goldToBeCalculated = {
  purchasePrice: number;
  coinWeightInGrams: number;
  spotPrice: number;
  purity: number;
};

export type calculatedGoldInfo = {
  premiumPercent: string;
  premiumPrice: string;
};

type SpreadProfilePrices = {
  spreadProfile: string;
  bidSpread: number;
  askSpread: number;
  bid: number;
  ask: number;
};

type Topo = {
  platform: string;
  server: string;
};

export type SpreadDataEntry = {
  topo: Topo;
  spreadProfilePrices: SpreadProfilePrices[];
  ts: number;
};

export type SpreadDataArray = SpreadDataEntry[];

export type GoldData = {
  purchasePrice: number | "";
  coinWeightInGrams: number | "";
  spotPrice: number | "";
  purity: number | "";
};
