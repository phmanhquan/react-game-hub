import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });

export default usePlatform;
