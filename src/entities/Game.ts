import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  genres: Genre[];
  publishers: Publisher[];
}

interface Publisher {
  id: number;
  slug: string;
  name: string;
}
