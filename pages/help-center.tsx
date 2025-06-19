import Head from "next/head";
import Link from "next/link";
import styles from "../styles/HelpCenter.module.css";
import { useState } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function HelpCenter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const supportTopics = [
    {
      title: "Booking Support",
      description: "Need help with booking a car? Our team is available 24/7 via chat or phone to guide you through the process.",
      icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/calendar-check.svg",
    },
    {
      title: "Account Issues",
      description: "Trouble logging in or updating your profile? We can assist you instantly with account-related queries.",
      icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-circle.svg",
    },
    {
      title: "Payments & Refunds",
      description: "Questions about payments or refunds? Get clear, quick answers from our support team.",
      icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/credit-card-2-front.svg",
    },
    {
      title: "Vehicle Assistance",
      description: "Issues with your rental car? Our roadside assistance is just a call away, available 24/7.",
      icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/car-front.svg",
    },
    {
      title: "Feedback & Suggestions",
      description: "We value your feedback to improve our service. Share your thoughts or suggestions anytime!",
      icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/chat-dots.svg",
    },
  ];

  const filteredTopics = supportTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Help Center | TriparCars</title>
        <meta name="description" content="Find answers and support for TriparCars services, including bookings, payments, and vehicle assistance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/car-front.svg" alt="Tripar Logo" width={36} height={36} />
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
            <h1 className={styles.heroTitle}>Help Center</h1>
            <p className={styles.heroSubtitle}>Support at your fingertips, 24/7.</p>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search support topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchBorder}></span>
            </div>
          </div>
        </section>
        <section className={styles.supportSection}>
          <h2 className={styles.sectionTitle}>Support Topics</h2>
          <div className={styles.supportGrid}>
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic, index) => (
                <div key={index} className={styles.supportCard}>
                  <Image src={topic.icon} alt={`${topic.title} Icon`} className={styles.supportIcon} width={32} height={32} />
                  <h3 className={styles.supportTitle}>{topic.title}</h3>
                  <p className={styles.supportDescription}>{topic.description}</p>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>No support topics found matching your search.</p>
            )}
          </div>
        </section>
        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                className={`${styles.formInput} ${styles.animatedInput}`}
                required
              />
              <span className={styles.inputBorder}></span>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                className={`${styles.formInput} ${styles.animatedInput}`}
                required
              />
              <span className={styles.inputBorder}></span>
            </div>
            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                className={`${styles.formInput} ${styles.animatedInput}`}
                rows={5}
                required
              />
              <span className={styles.inputBorder}></span>
            </div>
            <button type="submit" className={`${styles.submitBtn} ${styles.animatedBtn}`}>
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} TriparCars. All rights reserved.</p>
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