'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Soft ambient background lights */}
      <div className={styles.glow} />
      
      <div className="container">
        <div className={styles.layout}>
          {/* Header Typography */}
          <div className={styles.textWrap}>
            <motion.span 
              className="heading-sub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              MOUNT SENORIA SCHOOL • AFFILIATED TO CISCE, NEW DELHI
            </motion.span>
            
            <motion.h1 
              className="heading-display"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Inspiring bright futures.<br />
              <span className={styles.gradientText}>Striving for excellence.</span>
            </motion.h1>
            
            <motion.p 
              className="paragraph-lead"
              style={{ marginTop: '1.5rem', maxWidth: '640px' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              Mount Senoria School is the premier ICSE school in Laggere, committed to academic excellence, holistic development, and nurturing young minds to prepare them for a bright future.
            </motion.p>
            
            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            >
              <a href="#experience" className="btn-premium">Explore Experience</a>
              <a href="#admissions" className="btn-glass">Join Mount Senoria →</a>
            </motion.div>
          </div>

          {/* Visual Showcase (Rounded Glass masked image + Floating stats bubble) */}
          <motion.div 
            className={styles.visualContainer}
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className={styles.imageFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/scraped/01.jpg" 
                alt="Mount Senoria Campus" 
                className={styles.image}
              />
            </div>
            
            {/* Floating Glassmorphic Bubble */}
            <motion.div 
              className={`glass-card ${styles.floatingGlass}`}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNum}>ICSE</span>
                <span className={styles.statLabel}>Curriculum</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>Top</span>
                <span className={styles.statLabel}>In Laggere</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
