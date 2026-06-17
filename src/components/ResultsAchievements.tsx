'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import styles from './ResultsAchievements.module.css';

const RESULTS = [
  { value: 100, suffix: '%', label: 'Board Pass Rate' },
  { value: 45, suffix: '+', label: 'Ivy League & Oxbridge Offers' },
  { value: 15, suffix: 'M+', label: 'Scholarships Awarded' }
];

export default function ResultsAchievements() {
  return (
    <section className="section" id="results">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className="heading-sub">Our Records</span>
            <h2 className="heading-display">
              A legacy of <span className={styles.gradientText}>global achievements.</span>
            </h2>
            <p className="paragraph-lead" style={{ marginTop: '1.5rem', maxWidth: '540px' }}>
              Mount Senoria students consistently achieve outstanding academic results, carrying forward a tradition of excellence, hard work, and leadership.
            </p>
          </div>

          <div className={styles.grid}>
            {RESULTS.map((result, index) => (
              <Counter key={index} result={result} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ result, index }: { result: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, result.value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return controls.stop;
    }
  }, [isInView, result.value]);

  return (
    <motion.div 
      ref={ref}
      className={`glass-card glass-card-hover ${styles.card}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
    >
      <div className={styles.countWrapper}>
        <span className={styles.count}>{count}</span>
        <span className={styles.suffix}>{result.suffix}</span>
      </div>
      <div className={styles.divider} />
      <p className={styles.label}>{result.label}</p>
    </motion.div>
  );
}
