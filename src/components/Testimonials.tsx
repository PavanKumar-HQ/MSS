'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: "Mount Senoria did not just prepare me for University exams; it taught me how to research, formulate logic, and lead with purpose. The personal mentoring shaped my entire academic trajectory.",
    author: "Alexandra Vance",
    role: "Alumna, Class of 2021 // Oxford University",
  },
  {
    quote: "As parents, we value the high academic expectations balanced with deep human warmth. The faculty does not just teach; they actively mentor each student's personal curiosity.",
    author: "Dr. Julian Mercer",
    role: "Parent of Class of 2023 & 2025",
  },
  {
    quote: "The design thinking labs and robotics seminars allowed me to explore engineering practically before college. That hands-on base gave me a massive edge.",
    author: "Marcus Chen",
    role: "Alumnus, Class of 2022 // MIT",
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section" id="testimonials">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">Testimonials</span>
          <h2 className="heading-display">
            Words from our <span className={styles.gradientText}>community.</span>
          </h2>
        </div>

        <div className={`glass-card ${styles.card}`}>
          <div className={styles.carousel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={styles.slide}
              >
                <span className={styles.quoteIcon}>“</span>
                <p className={styles.quoteText}>{TESTIMONIALS[active].quote}</p>
                <div className={styles.meta}>
                  <h4 className={styles.author}>{TESTIMONIALS[active].author}</h4>
                  <span className={styles.role}>{TESTIMONIALS[active].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.controls}>
              <button onClick={prev} className={styles.arrow} aria-label="Previous testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <span className={styles.counter}>
                {active + 1} / {TESTIMONIALS.length}
              </span>
              <button onClick={next} className={styles.arrow} aria-label="Next testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
