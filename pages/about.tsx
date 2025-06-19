import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <title>About Us | TriparCars</title>
        <meta name="description" content="Learn about TriparCars's mission, vision, and journey in Pune." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Tripar Logo" width={36} height={36} />
          TriparCars
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
            <h1 className={styles.heroTitle}>About TriparCars</h1>
            <p className={styles.heroSubtitle}>Redefining travel with comfort and convenience across India.</p>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.contentItem}>
            <img src="/icons/compass.svg" alt="Mission Icon" className={styles.contentIcon} />
            <h2 className={styles.contentTitle}>Our Mission</h2>
            <p>At TriparCar, we strive to make car rentals effortless, affordable, and luxurious. Launched in Pune, we provide a premium fleet and a seamless app-based experience to elevate your travel.</p>
          </div>
          <div className={styles.contentItem}>
            <img src="/icons/telescope.svg" alt="Vision Icon" className={styles.contentIcon} />
            <h2 className={styles.contentTitle}>Our Vision</h2>
            <p>To lead India's car rental industry with innovative technology, transparent pricing, and exceptional customer service, making travel accessible to all.</p>
          </div>
        </section>
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <Image src="/team/john.jpg" alt="John Doe" width={200} height={200} className={styles.teamImage} />
              <h3 className={styles.teamName}>Abhishek Deshpande</h3>
              <p className={styles.teamRole}>CEO & Founder</p>
            </div>
            <div className={styles.teamMember}>
              <Image src="/team/jane.jpg" alt="Jane Smith" width={200} height={200} className={styles.teamImage} />
              <h3 className={styles.teamName}>Sahil Pawar</h3>
              <p className={styles.teamRole}>COO</p>
            </div>
            <div className={styles.teamMember}>
              <Image src="/team/alex.jpg" alt="Alex Johnson" width={200} height={200} className={styles.teamImage} />
              <h3 className={styles.teamName}>Sahil Pawar</h3>
              <p className={styles.teamRole}>Head of Technology</p>
            </div>
          </div>
        </section>
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>Feb </h3>
                <p>TriparCars founded in Pune with a vision to transform car rentals.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>June 2025</h3>
                <p>Launched our mobile app, offering seamless bookings and real-time tracking.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>June 2025</h3>
                <p>Expanded fleet to include luxury and electric vehicles, promoting sustainability.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>Aug 2025</h3>
                <p>Planning nationwide expansion to make TriparCar accessible across India.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} TriparCar. All rights reserved.</p>
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