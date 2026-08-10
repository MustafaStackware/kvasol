import styles from "./Wordmark.module.css";

/**
 * Text wordmark used on dark surfaces, where the supplied logo artwork (drawn
 * for light backgrounds) would lose its navy detail. Replace with the official
 * reversed / dark-background logo variant once KVASol supplies one.
 */
export function Wordmark({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className={styles.wordmark}>
      <span className={styles.lockup}>
        <span className={styles.kva}>KVA</span>
        <span className={styles.sol}>SOL</span>
      </span>
      {withTagline && (
        <span className={styles.tagline}>Solar · BESS · Telecom · Infrastructure</span>
      )}
    </span>
  );
}
