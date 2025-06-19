import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FaLock, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"; // Replace with custom SVG
import Image from "next/image";
import { useState } from "react";

export default function Privacy() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <title>Privacy Policy | Tripar Car Rental</title>
        <meta name="description" content="Learn how Tripar Car Rental safeguards your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=svg" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Tripar Logo" width={36} height={36} />
          Tripar Car Rental
        </div>
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </nav>
        <div className={menuOpen ? `${styles.mobileMenuToggle} open` : styles.mobileMenuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </div>
        <div className={menuOpen ? `${styles.mobileDropdown} ${styles.open}` : styles.mobileDropdown}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/help-center" className={styles.navLink}>Help Center</Link>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Your Privacy, Our Priority</h1>
            <p className={styles.heroSubtitle}>We are dedicated to protecting your personal information.</p>
          </div>
          <div className={styles.animatedCard + ' ' + styles.privacyCard}>
            <h2 className={styles.orangeTitle}>Privacy Policy Highlights</h2>
            <ul className={styles.orangeText}>
              <li><strong>Data Security:</strong> We use advanced encryption and security protocols to keep your data safe.</li>
              <li><strong>Minimal Data Collection:</strong> Only essential information is collected for booking and support.</li>
              <li><strong>No Third-Party Sales:</strong> Your data is never sold or shared with advertisers.</li>
              <li><strong>Transparency:</strong> You can request, update, or delete your data at any time.</li>
              <li><strong>Cookies:</strong> Used only to enhance your experience, never for tracking.</li>
            </ul>
            <p className={styles.orangeText}>For full details, please contact our support team or read the complete policy on our website.</p>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.contentItem}>
            <FaLock className={styles.contentIcon} /> {/* Replace with <img src="/icons/lock.svg" alt="Lock Icon" className={styles.contentIcon} /> */}
            <h2>Our Commitment</h2>
            <p>Your data is secure with us. We use it solely to enhance your car rental experience. (Full policy details coming soon.)</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Tripar Car Rental. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.navLink}>Terms & Conditions</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter className={styles.socialIconImage} color="#fff" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram className={styles.socialIconImage} color="#fff" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <FaYoutube className={styles.socialIconImage} color="#fff" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
              <FaWhatsapp className={styles.socialIconImage} color="#fff" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}