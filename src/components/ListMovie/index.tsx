import { useEffect, useRef, useState } from "react";
import { searchShows } from "../../services/api";
import type { Show } from "../../@Types/movi";
import styles from "./ListMovie.module.scss";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

type HeroProps = {
  serieName: string;
};

export function ListMovie({ serieName }: HeroProps) {
  const [shows, setShows] = useState<Show[]>([]);
  const carrosselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "esquerda" | "direita") => {
    if (carrosselRef.current) {
      const { clientWidth } = carrosselRef.current;

      const valueScroll = clientWidth * 0.8;

      carrosselRef.current.scrollBy({
        left: direction === "esquerda" ? -valueScroll : valueScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    searchShows(serieName).then(setShows);
  }, [serieName]);

  return (
    <div className={styles.list_cards}>
      <h2>{serieName}</h2>

      {/* Novo contêiner pai para isolar a estrutura do carrossel */}
      <div className={styles.carrossel_wrapper}>
        {/* Seta Esquerda (Fora do container de scroll) */}
        <MdOutlineArrowBackIos
          className={styles.arrow_left}
          onClick={() => scroll("esquerda")}
        />

        {/* Contêiner que faz o Scroll de fato */}
        <div className={styles.container} ref={carrosselRef}>
          {shows.map((show) => (
            <div key={show.id} className={styles.card}>
              {show.image && (
                <img
                  src={show.image.medium}
                  alt={show.name}
                  className={styles.image}
                />
              )}
              <p className={styles.name}>{show.name}</p>
              <p className={styles.stars}>⭐ {show.rating.average ?? "N/A"}</p>
            </div>
          ))}
        </div>

        {/* Seta Direita (Fora do container de scroll) */}
        <MdOutlineArrowForwardIos
          className={styles.arrow_right}
          onClick={() => scroll("direita")}
        />
      </div>
    </div>
  );
}
