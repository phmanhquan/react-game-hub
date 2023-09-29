import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore, { GameQuery } from "../store";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
