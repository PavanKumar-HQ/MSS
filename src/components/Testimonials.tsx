'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: "Mount Senoria did not just prepare me for my board exams; it taught me how to learn, formulate logic, and lead with purpose.",
    author: "Alexandra Vance",
    role: "Former Student, Class of 2021",
  },
  {
    quote: "As parents, we value the high academic expectations balanced with deep human warmth. The teachers actively mentor each student's curiosity.",
    author: "Dr. Julian Mercer",
    role: "Parent of Class of 2023",
  },
  {
    quote: "The design thinking labs and robotics workshops allowed me to explore engineering practically before graduating. That base gave me a massive edge.",
    author: "Marcus Chen",
    role: "Former Student, Class of 2022",
  },
  {
    quote: "The emphasis on independent thought and ethical leadership has fundamentally shaped how I approach problems in my professional life.",
    author: "Sarah Jenkins",
    role: "Former Student, Class of 2019",
  },
  {
    quote: "A truly holistic education. The sports facilities and athletic programs are world-class, fostering both resilience and team spirit.",
    author: "David O'Connor",
    role: "Parent of Class of 2024",
  }
];

export default function Testimonials() {
  // Duplicate array to create the infinite scroll effect
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section" id="testimonials" style={{ overflow: 'hidden' }}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">Testimonials</span>
          <h2 className="heading-display">
            Words from our <span className={styles.gradientText}>community.</span>
          </h2>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((item, idx) => (
            <div key={idx} className={`glass-card ${styles.card}`}>
              <span className={styles.quoteIcon}>“</span>
              <p className={styles.quoteText}>{item.quote}</p>
              <div className={styles.meta}>
                <h4 className={styles.author}>{item.author}</h4>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
