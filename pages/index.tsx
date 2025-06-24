import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <title>TriparCar | Premium Travel in Pune</title>
        <meta name="description" content="Discover premium car rental services in Pune. Book now for a seamless experience!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;7&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Triparcar Logo" width={36} height={36} />
          <p> TriparCars</p>
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
            <h1 className={styles.heroTitle}>
              Discover Freedom with <span> TriparCars</span> in Pune
            </h1>
            <p className={styles.heroSubtitle}>Experience premium car rentals with seamless booking and exclusive launch offers.</p>
            <div className={styles.downloadLinks}>
              <a href="#" className={styles.appBtn} style={{padding: 0, background: 'none', boxShadow: 'none', display: 'inline-block'}}>
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  style={{height: '48px', width: 'auto', display: 'block'}}
                />
              </a>
              <a href="#" className={styles.appBtn} style={{padding: 0, background: 'none', boxShadow: 'none', display: 'inline-block'}}>
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  style={{height: '48px', width: 'auto', display: 'block'}}
                />
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/image.png" alt="Premium Car image" width={600} height={400} sizes="(max-width: 768px) 100vw, 45vw" style={{ width: '100%', height: 'auto', maxWidth: 600 }} />
          </div>
        </section>
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Why <span>Tripar</span> Stands Out</h2>
          <div className={styles.featureGrid}>
            {[
              { icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/car-front.svg", title: "Premium Fleet", desc: "Drive the latest models tailored to your style." },
              { icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/phone.svg", title: "Instant Booking", desc: "Book and manage your ride in seconds." },
              { icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/headset.svg", title: "24/7 Concierge", desc: "Dedicated support whenever you need it." },
              { icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/cash-stack.svg", title: "Clear Pricing", desc: "No surprises, just honest rates." },
              { icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/gift.svg", title: "Exclusive Offers", desc: "Special deals for our Pune launch." },
            ].map((feature, index) => (
              <div key={index} className={styles.featureItem} style={{ animationDelay: `${index * 0.15}s` }}>
                <Image src={feature.icon} alt={`${feature.title} Icon`} className={styles.featureIcon} width={32} height={32} />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.fleetSection}>
          <h2 className={styles.sectionTitle}>Explore Our <span>Fleet</span></h2>
          <div className={styles.fleetGrid}>
            {[
              { name: "Luxury Sedan", image: "/images (1).webp", desc: "Perfect for business or leisure with premium comfort." },
              { name: "Power Sedan", image: "/images (2).webp", desc: "Spacious sedan for family trips or city driving." },
              { name: "Electric Compact", image: "/images (3).webp", desc: "Eco-friendly and efficient for city driving." },
            ].map((car, index) => (
              <div key={index} className={styles.fleetCard} style={{ animationDelay: `${index * 0.15}s` }}>
                <Image src={car.image} alt={car.name} width={300} height={200} className={styles.fleetImage} sizes="(max-width: 768px) 100vw, 300px" />
                <h3 className={styles.fleetName}>{car.name}</h3>
                <p className={styles.fleetDesc}>{car.desc}</p>
                <Link href="/book" className={styles.fleetBtn}>Book Now</Link>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.testimonials}>
          <h2 className={styles.sectionTitle}>What Our <span>Customers</span> Say</h2>
          <div className={styles.testimonialGrid}>
            {[
              { name: "Priya Sharma", quote: "Tripar made my trip in Pune seamless! The car was spotless, and the app was super easy to use.", rating: 5 },
              { name: "Rohan Patel", quote: "Amazing service and transparent pricing. The 24/7 support was a game-changer!", rating: 4 },
              { name: "Anita Desai", quote: "Loved the luxury sedan I rented. Tripar's launch offers are unbeatable!", rating: 5 },
            ].map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard} style={{ animationDelay: `${index * 0.15}s` }}>
                <p className={styles.testimonialQuote}>&quot;{testimonial.quote}&quot;</p>
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>Ready to Ride with TriparCars?</h2>
          <p className={styles.ctaSubtitle}>Download the app now and get 20% off your first booking!</p>
          <div className={styles.downloadLinks}>
            <a href="#" className={styles.appBtn} style={{padding: 0, background: 'none', boxShadow: 'none', display: 'inline-block'}}>
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{height: '48px', width: 'auto', display: 'block'}}
              />
            </a>
            <a href="#" className={styles.appBtn} style={{padding: 0, background: 'none', boxShadow: 'none', display: 'inline-block'}}>
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{height: '48px', width: 'auto', display: 'block'}}
              />
            </a>
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
            <a href="https://twitter.com/Triparcars" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter className={styles.socialIconImage} />
            </a>
            <a href="https://instagram.com/tripar_cars" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram className={styles.socialIconImage} />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <FaYoutube className={styles.socialIconImage} />
            </a>
            <a href="https://wa.me/918208322782" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
              <FaWhatsapp className={styles.socialIconImage} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}