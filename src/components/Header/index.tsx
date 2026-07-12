import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo} onClick={() => navigate("/")}>StelarMovies</h1>
      </div>
      <div>
        
      </div>
    </header>
  );
}
