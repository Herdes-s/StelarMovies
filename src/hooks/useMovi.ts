import { useEffect, useState } from "react";
import type { Show } from "../@Types/movi";
import { moviService } from "../services/moviService";

export function useMovi(searchTerm: string = "batman") {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setShows([]);
      return;
    }

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      const fetchShows = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await moviService.getShowsByName(searchTerm);
          setShows(response.data.map((result) => result.show));
        } catch (err) {
          if (controller.signal.aborted) return;
          setError("Erro ao buscar séries. Por favor, tente novamente.");
        } finally {
          setLoading(false);
        }
      };
      fetchShows();
    }, 500);

    return () => clearTimeout(timeoutId);
    controller.abort();
  }, [searchTerm]);

  return { shows, loading, error };
}
