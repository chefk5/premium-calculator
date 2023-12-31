// useCustomQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchPrices } from "../services/prices";

const useCustomQuery = (currency: string) => {
  return useQuery({
    queryKey: ["products", currency],
    queryFn: () => fetchPrices(currency),
  });
};

export default useCustomQuery;
