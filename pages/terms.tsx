import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Tripar Car Rental</title>
        <meta name="description" content="Terms and conditions for using Tripar Car Rental." />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Terms & Conditions</h1>
        <p>By using Tripar Car Rental, you agree to our terms and conditions. Please read them carefully before booking a car. (Full terms coming soon.)</p>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
} 