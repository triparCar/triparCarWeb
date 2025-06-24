import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/FAQ.module.css";
import { useState } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function FAQ() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "How do I book a car with  TriparCars?",
      answer: "Download our mobile app from the App Store or Google Play, create an account, select your desired car, choose the rental period, and complete the booking process with payment. You'll receive a confirmation instantly.",
    },
    {
      question: "What documents are required to rent a car?",
      answer: "You need a valid driving license, a government-issued ID proof (such as Aadhaar or Passport), and a credit/debit card for the security deposit.",
    },
    {
      question: "Where is  TriparCars available?",
      answer: "We are currently operational in Pune, with plans to expand to other major cities across India soon. Check our app for the latest updates on service areas.",
    },
    {
      question: "How can I contact customer support?",
      answer: (
        <>
          You can reach us via email at{" "}
          <a href="mailto:askselfrental@gmail.com">askselfrental@gmail.com</a> or call our helpline at +91-123-456-7890. Our support team is available 24/7.
        </>
      ),
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 24 hours before the booking start time are eligible for a full refund. Cancellations within 24 hours may incur a partial fee. Check our Terms page for details.",
    },
    {
      question: "Are there any age restrictions for renting a car?",
      answer: "Drivers must be at least 21 years old and have a valid driving license for at least one year. Some luxury vehicles may require the driver to be 25 or older.",
    },
    {
      question: "Can I extend my rental period?",
      answer: "Yes, you can extend your rental through the app, subject to vehicle availability. Additional charges will apply based on the extended period.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>FAQ -  TriparCars</title>
        <meta name="description" content="Find answers to frequently asked questions about  TriparCars's services, bookings, and policies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Image src="/logo.png" alt="Tripar Logo" width={44} height={44} />
            Tripar Car Rental
          </Link>
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
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroSubtitle}>Find answers to your questions about TriparCars.</p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchBorder}></span>
          </div>
        </section>
        <section className={styles.faqList}>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <span className={styles.toggleIcon}>{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>No FAQs found matching your search.</p>
          )}
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
            <a href="https://twitter.com/Triparcars" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter className={styles.socialIconImage} color="#fff" />
            </a>
            <a href="https://instagram.com/tripar_cars" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram className={styles.socialIconImage} color="#fff" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <FaYoutube className={styles.socialIconImage} color="#fff" />
            </a>
            <a href="https://wa.me/918208322782" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
              <FaWhatsapp className={styles.socialIconImage} color="#fff" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}