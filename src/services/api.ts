import type { SearchResult, Show } from "../@Types/movi";

const BASE_URL = "https://api.tvmaze.com";

// Buscar séries por nome
export async function searchShows(query: string): Promise<Show[]> {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`,
  );
  if (!res.ok) throw new Error("Erro ao buscar séries");
  const data: SearchResult[] = await res.json();
  return data.map((item) => item.show);
}
