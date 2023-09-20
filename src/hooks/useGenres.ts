import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
