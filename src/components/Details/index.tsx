import { useNavigate, useParams } from "react-router-dom";
import { moviService } from "../../services/moviService";
import { useEffect, useState } from "react";
import type { Show } from "../../@Types/movi";
import DOMPurify from "dompurify";

import styles from "./Details.module.scss";
import { IoChevronBack } from "react-icons/io5";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movi, setmovi] = useState<Show>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);

        const response = await moviService.getShowById(Number(id));
        setmovi(response.data);
        console.log(response.data);
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

  if (loading) return <p className={styles.loading}>Carregando detalhes do filme...</p>;
  if (!movi) return <p className={styles.movi}>Filme não encontrado.</p>;
  
  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <button className={styles.back} onClick={() => navigate(-1)}><IoChevronBack /> Voltar</button>
        <h1 className={styles.name}>{movi.name}</h1>
        <p className={styles.genres}>
          {movi.genres.map((genre) => (
            <p className={styles.genre}>{genre}</p>
          ))}
        </p>
        <div className={styles.division}>
          <div className={styles.side_image}>
            <img
              className={styles.image}
              src={movi.image?.original}
              alt={movi.name}
            />
          </div>
          <div className={styles.side_information}>
            <p className={styles.status}>Status: {movi.status}</p>
            <p className={styles.language}>Language: {movi.language}</p>
            <p className={styles.avaliation}>
              Avaliation: ⭐{movi.rating.average}
            </p>
              <p className={styles.data}>Date: {(movi.premiered) }</p>
            <div className={styles.summary}>
              <p>Description:</p>
              <div dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(movi.summary ?? "")
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
