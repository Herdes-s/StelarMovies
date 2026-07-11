import { useParams } from "react-router-dom";
import { moviService } from "../../services/moviService";
import { useEffect, useState } from "react";
import type { Show } from "../../@Types/movi";
import DOMPurify from "dompurify";

import styles from "./Details.module.scss";
import EpisodesList from "./EpisodesList";

export default function Details() {
  const { id } = useParams();

  const [movi, setmovi] = useState<Show>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);

        const responseDetails = await moviService.getShowById(Number(id));
        setmovi(responseDetails.data);
        console.log(responseDetails.data);
      } catch (error) {
        console.error("Error ao buscar o filme: ", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading)
    return <p className={styles.loading}>Carregando detalhes do filme...</p>;
  if (!movi) return <p className={styles.movi}>Filme não encontrado.</p>;

  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <div className={styles.container_image}>
          <div className={styles.overlay}>
            <h1 className={styles.name}>{movi.name}</h1>
          </div>
          <div className={styles.container_banner}>
            <img
              className={styles.banner}
              src={movi.image?.original}
              alt={movi.name}
            />
          </div>
          <img
            className={styles.image}
            src={movi.image?.original}
            alt={movi.name}
          />
        </div>
        <div className={styles.division}>
          <div className={styles.left}>
            <h1 className={styles.name}>{movi.name}</h1>
            <p className={styles.data}>
              {movi.premiered ? new Date(movi.premiered).getFullYear() : "—"}
            </p>
            <div
              className={styles.summary}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(movi.summary ?? ""),
              }}
            />
          </div>
          <div className={styles.right}>
            <p className={styles.genres}>
              <span>Categoris:</span> {movi.genres.join(", ")}
            </p>
            <p className={styles.avaliation}>
              <span>Avaliation:</span> ⭐{movi.rating.average}
            </p>
            <p className={styles.language}>
              <span>Language:</span> {movi.language}
            </p>
            <p className={styles.status}>
              <span>Status:</span> {movi.status}
            </p>
          </div>
        </div>
        <EpisodesList />
      </div>
    </div>
  );
}
