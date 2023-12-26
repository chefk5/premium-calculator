import { baseURL } from "../constants";
import axios, { AxiosResponse } from "axios";
import { SpreadDataEntry } from "../types";

const axiosInstance = axios.create({
  baseURL: baseURL,
});
export const fetchPrices = async (currency: string): Promise<number> => {
  const response: AxiosResponse<SpreadDataEntry[]> = await axiosInstance.get(
    `/${currency}`,
  );

  const ask = response.data[0]?.spreadProfilePrices[0]?.ask;
  const bid = response.data[0]?.spreadProfilePrices[0]?.bid;
  const price = Number(((ask + bid) / 2).toFixed(2));

  return price || 0;
};
