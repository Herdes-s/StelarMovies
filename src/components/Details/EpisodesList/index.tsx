import { useEffect, useState } from "react";
import type { Episodes } from "../../../@Types/movi";
import { moviService } from "../../../services/moviService";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import styles from "./EpisodesList.module.scss";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [season, setSeason] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);

        const responseEpisodes = await moviService.getShowEpisodes(Number(id));
        setEpisodes(responseEpisodes.data || []);
        console.log(responseEpisodes.data);
      } catch (error) {
        console.error("Error ao buscar o filme: ", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      void fetchMovies();
    }
  }, [id]);

  return (
    <div className={styles.cards}>
      {loading && <p>Carregando...</p>}
      {episodes.length === 0 && !loading && <p>Episodios não encontrados</p>}

      <div className={styles.header_list}>
        <h2 className={styles.title}>Full Episodes</h2>
        <select
          className={styles.select}
          name="seasons"
          id="seasons"
          onChange={(e) => setSeason(Number(e.target.value))}
        >
          {episodes
            .filter(
              (episode, index, self) =>
                index === self.findIndex((e) => e.season === episode.season),
            )
            .sort((a, b) => a.season - b.season)
            .map((episode) => (
              <option key={episode.id} value={episode.season.toString()}>
                Temporada {episode.season}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.card_episodes}>
        {episodes
          .filter((episode) => episode.season === season)
          .map((episode) => (
            <div className={styles.card_episode} key={episode.id}>
              <img
                className={styles.image}
                src={episode.image.medium}
                alt={episode.name}
              />
              <div className={styles.card_information}>
                <div className={styles.text_initial}>
                  <span className={styles.season_number}>
                    T{episode.season}{" "}
                  </span>
                  <span className={styles.number_number}>
                    E{episode.number}{" "}
                  </span>
                  <span>Episodio {episode.number}</span>
                </div>
                <h3 className={styles.name}>{episode.name}</h3>
                <div
                  className={styles.summary}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(episode.summary ?? ""),
                  }}
                />
                <span className={styles.time}>{episode.runtime}M </span>
                <span className={styles.date}>
                  {episode.airdate ? new Date(episode.airdate).getDay() : "-"}{" "}
                  de{" "}
                  {String(episode.airdate)
                    ? new Date(episode.airdate).toLocaleString("pt-BR", {
                        month: "short",
                      })
                    : "-"}{" "}
                  de{" "}
                  {episode.airdate
                    ? new Date(episode.airdate).getFullYear()
                    : "-"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
