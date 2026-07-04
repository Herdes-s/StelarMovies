import { apiMovi } from "../config/apiMovi";

export const moviService = {
  getShowsByName: async (name: string) => {
    const data = await apiMovi.get(`search/shows?q=${name}`);
    return data;
  },
};
