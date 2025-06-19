import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HelpCenter() {
  return (
    <>
      <Head>
        <title>Help Center - Tripar Car Rental</title>
        <meta name="description" content="Help Center for Tripar Car Rental." />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Help Center</h1>
        <p>Need assistance? Our support team is here to help you 24/7. (More help topics coming soon.)</p>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
} 