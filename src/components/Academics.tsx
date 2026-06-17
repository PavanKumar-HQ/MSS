'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Academics.module.css';

const CURRICULUM = [
  {
    id: 'primary',
    title: 'Primary Academy',
    subtitle: 'Grades K - 5',
    content: 'Building a rigorous foundational framework in literacy, mathematics, and inquiry-driven science. Our primary pathway stimulates intellectual discovery, social empathy, and natural curiosity through structured investigation.'
  },
  {
    id: 'middle',
    title: 'Middle School',
    subtitle: 'Grades 6 - 8',
    content: 'Fostering analytical independence, logical critique, and structured problem-solving. Students explore specialized fields in sciences, history, advanced algebra, and fine arts to prepare for college-preparatory work.'
  },
  {
    id: 'high',
    title: 'High Preparatory',
    subtitle: 'Grades 9 - 12',
    content: 'A prestigious, college-level preparatory program offering AP and IB options. Students specialize in pre-university tracks, engaged in intensive research seminars, athletic competitions, and portfolio arts.'
  }
];

export default function Academics() {
  const [activeId, setActiveId] = useState<string>(CURRICULUM[0].id);

  return (
    <section className="section" id="academics">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className="heading-sub">Academic Pathways</span>
            <h2 className="heading-display">
              A commitment to <br />
              <span className={styles.gradientText}>intellectual depth.</span>
            </h2>
            <p className="paragraph-lead" style={{ marginTop: '1.5rem', maxWidth: '540px' }}>
              Our continuous academic pathways are engineered to support progressive developmental inquiry and deep scientific mastery.
            </p>
          </div>

          <div className={styles.accordionContainer}>
            {CURRICULUM.map((item) => {
              const isActive = activeId === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`glass-card ${styles.accordionItem} ${isActive ? styles.activeItem : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className={styles.itemHeader}>
                    <div className={styles.titleWrap}>
                      <span className={styles.itemSubtitle}>{item.subtitle}</span>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                    </div>
                    <div className={`${styles.iconWrap} ${isActive ? styles.rotated : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div 
                        className={styles.contentWrapper}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className={styles.contentInner}>
                          <p className={styles.itemContent}>{item.content}</p>
                          <div className={styles.btnWrap}>
                            <a href="#admissions" className="btn-premium">Inquire Curriculum</a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
