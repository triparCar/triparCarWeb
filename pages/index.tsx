import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tripar Car Rental - Pune Launch</title>
        <meta name="description" content="Affordable, reliable car rental service launching in Pune. Download our app and get started!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Car Rental Service Launching in Pune!</h1>
          <p>Book cars instantly, enjoy affordable rates, and experience hassle-free travel with Tripar. Download our app to get started.</p>
          <div className={styles.downloadLinks}>
            <a href="#" className={styles.appBtn}>Download for Android</a>
            <a href="#" className={styles.appBtn}>Download for iOS</a>
          </div>
        </section>
        <section className={styles.features}>
          <h2>Why Choose Tripar?</h2>
          <ul>
            <li>Wide range of cars for every need</li>
            <li>Easy app-based booking & management</li>
            <li>24/7 customer support</li>
            <li>Transparent pricing, no hidden fees</li>
            <li>Special launch offers for Pune</li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
}
