import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FaFileContract, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"; // Replace with custom SVG
import Image from "next/image";
import { useState } from "react";

export default function Terms() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <title>Terms & Conditions |  TriparCars</title>
        <meta name="description" content="Understand the terms for using  TriparCars services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=svg" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <Image src="/logo.png" alt="Tripar Logo" width={44} height={44} />
          TriparCars
        </Link>
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
            <h1 className={styles.heroTitle}>Terms & Conditions</h1>
            <p className={styles.heroSubtitle}>Know the rules before you ride with us.</p>
          </div>
          <div className={styles.animatedCard + ' ' + styles.privacyCard}>
            <h2 className={styles.orangeTitle}>Key Terms</h2>
            <ul className={styles.orangeText}>
              <li><strong>Booking:</strong> All bookings are subject to availability and confirmation.</li>
              <li><strong>Driver&apos;s License:</strong> A valid license is required for all drivers.</li>
              <li><strong>Payment:</strong> Full payment must be made before vehicle handover.</li>
              <li><strong>Cancellation:</strong> Free cancellation up to 24 hours before pickup.</li>
              <li><strong>Responsibility:</strong> Renters are responsible for any damage during the rental period.</li>
              <li><strong>Prohibited Use:</strong> Vehicles may not be used for illegal activities or racing.</li>
            </ul>
            <p className={styles.orangeText}>Please read the full terms on our website or contact support for more information.</p>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.contentItem}>
            <FaFileContract className={styles.contentIcon} /> {/* Replace with <img src="/icons/contract.svg" alt="Contract Icon" className={styles.contentIcon} /> */}
            <h2>Our Agreement</h2>
            <p>By booking with  TriparCars, you agree to our terms. Please review them carefully. (Full terms coming soon.)</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()}  TriparCars. All rights reserved.</p>
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