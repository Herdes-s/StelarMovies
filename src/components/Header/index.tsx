import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.logo}>StelarMovies</h1>
      </div>
      <div className={styles.container_text}>
        <p className={styles.text}>Bem-vindo ao StelarMovies</p>
      </div>
    </header>
  );
}
