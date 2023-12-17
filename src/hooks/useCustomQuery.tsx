// useCustomQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchPrices } from "../services/prices";

const useCustomQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchPrices,
  });
};

export default useCustomQuery;
