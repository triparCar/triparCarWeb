import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Tripar Car Rental</title>
        <meta name="description" content="Learn more about Tripar Car Rental, launching in Pune." />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>About Tripar Car Rental</h1>
        <p>Tripar Car Rental is dedicated to making car rentals easy, affordable, and accessible for everyone. We are excited to launch our service in Pune, offering a wide range of vehicles and a seamless app experience. Our mission is to provide reliable transportation solutions with transparent pricing and excellent customer support.</p>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
} 