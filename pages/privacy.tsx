import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Tripar Car Rental</title>
        <meta name="description" content="Privacy policy for Tripar Car Rental." />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. We are committed to protecting your data and using it only for providing our car rental services. (Full policy coming soon.)</p>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
} 