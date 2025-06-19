import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Tripar Car Rental</title>
        <meta name="description" content="Contact Tripar Car Rental for support or inquiries." />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Tripar Car Rental</div>
        <nav>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <p>Have questions or need help? Reach out to our support team!</p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" disabled />
          <input type="email" placeholder="Your Email" disabled />
          <textarea placeholder="Your Message" disabled />
          <button type="submit" disabled>Send (Coming Soon)</button>
        </form>
        <p>Email: <a href="mailto:support@triparcar.com">support@triparcar.com</a></p>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Tripar Car Rental. All rights reserved.
      </footer>
    </>
  );
} 