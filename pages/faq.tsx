import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Tripar Car Rental</title>
        <meta name="description" content="Frequently asked questions about Tripar Car Rental." />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Frequently Asked Questions</h1>
        <ul>
          <li><strong>How do I book a car?</strong> Download our app and follow the simple booking process.</li>
          <li><strong>What documents are required?</strong> A valid driving license and ID proof are required.</li>
          <li><strong>Where is Tripar available?</strong> We are launching first in Pune, with more cities coming soon!</li>
          <li><strong>How do I contact support?</strong> Email us at <a href="mailto:support@triparcar.com">support@triparcar.com</a>.</li>
        </ul>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
} 