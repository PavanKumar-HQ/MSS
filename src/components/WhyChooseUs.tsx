'use client';

import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const STATS = [
  { value: '100%', label: 'Pass Rate', desc: 'Our students consistently achieve top ranks and outstanding results in their board examinations.' },
  { value: '25:1', label: 'Student-Teacher Ratio', desc: 'Ensuring personalized attention and care for every student to support their individual growth.' },
  { value: '40+', label: 'Extracurriculars', desc: 'Fostering creativity, sportsmanship, and leadership through diverse sports and clubs.' },
  { value: '100%', label: 'Smart Classrooms', desc: 'Modern, technology-enabled learning spaces designed to make education engaging and interactive.' }
];

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us" style={{ zIndex: 2 }}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className="heading-sub">Why Mount Senoria</span>
            <h2 className="heading-display">
              A commitment to <br />
              <span className={styles.gradientText}>student success.</span>
            </h2>
            <p className="paragraph-lead" style={{ marginTop: '1.5rem', maxWidth: '540px' }}>
              We provide a nurturing environment that focuses on academic excellence, moral values, and holistic character development.
            </p>
          </div>
          
          <div className={styles.grid}>
            {STATS.map((stat, index) => (
              <motion.div 
                key={index} 
                className={`glass-card glass-card-hover ${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <div className={styles.badge}>0{index + 1}</div>
                <div className={styles.value}>{stat.value}</div>
                <div className={styles.label}>{stat.label}</div>
                <p className={styles.desc}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
