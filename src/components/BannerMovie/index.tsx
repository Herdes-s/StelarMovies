import styles from "./BannerMovie.module.scss";

export default function BannerMovie() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div>
          <h1>Assista suas series e filmes aqui!</h1>
          <p>Stelar movies, o melhor site para assistir sua serie favorita!</p>
        </div>
      </div>
      <img
        className={styles.image}
        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200/https://tavernagm.com/wp-content/uploads/2026/06/Banner-6-1.webp"
        alt="Banner de super herois"
      />
    </div>
  );
}
