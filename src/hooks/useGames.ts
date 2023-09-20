import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGame = (genre: Genre | null) =>
  useData<Game>("/games", { params: { genres: genre?.id } }, [genre?.id]);

export default useGame;
