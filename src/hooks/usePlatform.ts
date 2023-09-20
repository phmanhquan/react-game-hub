import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
