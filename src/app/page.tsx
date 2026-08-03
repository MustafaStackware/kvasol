import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.sky} aria-hidden="true">
        <div className={`${styles.glow} ${styles.glowA}`} />
        <div className={`${styles.glow} ${styles.glowB}`} />
        <div className={styles.grain} />
        <div className={styles.horizon} />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>KVASol</p>
        <h1 className={styles.headline}>Something new is coming.</h1>
        <p className={styles.sub}>Stay tuned.</p>
      </div>
    </main>
  );
}
