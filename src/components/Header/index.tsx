import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.logo}>StelarMovies</h1>
      </div>
    </header>
  );
}
