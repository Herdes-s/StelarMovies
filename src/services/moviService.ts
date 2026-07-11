import type { Episodes, SearchResult } from "../@Types/movi";
import { apiMovi } from "../config/apiMovi";

export const moviService = {
  getShowsByName: async (name: string, signal?: AbortSignal) => {
    const data = await apiMovi.get<SearchResult[]>("search/shows", {
      params: { q: name },
      signal,
    });
    return data;
  },

  getShowById: async (id: number) => {
    const data = await apiMovi.get(`shows/${id}`);
    return data;
  },

  getShowEpisodes: async (id: number) => {
    const data = await apiMovi.get<Episodes[]>(`shows/${id}/episodes`);
    return data;
  },

  getEpsodes: async (id: number) => {
    const data = await apiMovi.get(`episodes/${id}`);
    return data;
  },
};
