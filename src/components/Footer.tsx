import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`glass-card ${styles.card}`}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <h2 className={styles.logo}>
                MOUNT SENORIA <span className={styles.logoSec}>SCHOOL</span>
              </h2>
              <p className={styles.tagline}>Academic excellence. Fostered in character.</p>
            </div>
            
            <div className={styles.linksContainer}>
              <div className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>Experience</h3>
                <Link href="#experience" className={styles.link}>Five Pillars</Link>
                <Link href="#day-at-school" className={styles.link}>Student Day</Link>
                <Link href="#campus" className={styles.link}>Campus Spaces</Link>
                <Link href="#student-life" className={styles.link}>Student Life</Link>
              </div>
              
              <div className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>Programs</h3>
                <Link href="#academics" className={styles.link}>Primary Academy</Link>
                <Link href="#academics" className={styles.link}>Middle School</Link>
                <Link href="#academics" className={styles.link}>High Preparatory</Link>
                <Link href="#results" className={styles.link}>Academic Records</Link>
              </div>
              
              <div className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>Connect</h3>
                <Link href="#admissions" className={styles.link}>Inquire Now</Link>
                <Link href="#news-events" className={styles.link}>Calendar & News</Link>
                <Link href="#testimonials" className={styles.link}>Testimonials</Link>
                <Link href="#leadership-message" className={styles.link}>Dean's Letter</Link>
              </div>
            </div>
          </div>
          
          <div className={styles.bottom}>
            <p className={styles.copyright}>© {new Date().getFullYear()} Mount Senoria School. All rights reserved.</p>
            <div className={styles.legal}>
              <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
              <span className={styles.sep}>•</span>
              <Link href="#" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
