import { baseURL } from "../constants";
import axios, { AxiosResponse } from "axios";
import { SpreadDataArray, SpreadDataEntry } from "../types";
import { useContext } from "react";
import { currencyContext } from "../app/_layout";

const axiosInstance = axios.create({
  baseURL: baseURL,
});
export const fetchPrices = async (): Promise<SpreadDataEntry[]> => {
  const response: AxiosResponse<SpreadDataEntry[]> = await axiosInstance.get(
    "",
  );
  return response.data || [];
};

// export const searchProducts = async (
//   term: string,
// ): Promise<SpreadDataArray> => {
//   const response: AxiosResponse<{ products: Product[] }> =
//     await axiosInstance.get(`/products/search?q=${term}`);
//   return response.data.products;
// };
