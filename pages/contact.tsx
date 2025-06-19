import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <title>Contact Us | Tripar Car Rental</title>
        <meta name="description" content="Reach out to Tripar Car Rental for support or inquiries." />
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
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtitle}>We're here to answer your questions and assist you.</p>
          </div>
        </section>
        <section className={styles.contactSection}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={`${styles.formInput} ${styles.animatedInput}`} 
                  required 
                />
                <span className={styles.inputBorder}></span>
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className={`${styles.formInput} ${styles.animatedInput}`} 
                  required 
                />
                <span className={styles.inputBorder}></span>
              </div>
              <div className={styles.inputGroup}>
                <textarea 
                  placeholder="Your Message" 
                  className={`${styles.formInput} ${styles.animatedInput}`} 
                  rows={5} 
                  required 
                />
                <span className={styles.inputBorder}></span>
              </div>
              <button type="submit" className={`${styles.appBtn} ${styles.animatedBtn}`}>
                Send Message
              </button>
            </form>
          </div>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoItem}>
              <img src="/icons/email.svg" alt="Email Icon" className={styles.contentIcon} />
              Email: <a href="mailto:support@triparcar.com">support@triparcar.com</a>
            </p>
            <p className={styles.infoItem}>
              <img src="/icons/phone.svg" alt="Phone Icon" className={styles.contentIcon} />
              Phone: +91-123-456-7890
            </p>
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
          <button className={styles.footerBtn} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Back to Top
          </button>
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