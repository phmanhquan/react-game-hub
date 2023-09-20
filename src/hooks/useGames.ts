import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useGame = () => useData<Game>("/games");

export default useGame;
