import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h3>StelarMovies</h3>
                <p>© por mizum.dev</p>
            </div>
        </footer>
    )
}