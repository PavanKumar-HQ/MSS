'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Experience.module.css';

const PANELS = [
  {
    id: 'learning',
    title: 'Academic Rigor',
    subtitle: 'Cultivating deep, structured thinking and intellectual exploration in a modern environment.',
    image: '/images/library_interior.png',
  },
  {
    id: 'sports',
    title: 'Athletic Excellence',
    subtitle: 'Building physical discipline, resilience, and leadership on and off the field.',
    image: '/images/athletics_field.png',
  },
  {
    id: 'arts',
    title: 'Creative Expression',
    subtitle: 'Fostering imagination and artistic voice through classical and modern disciplines.',
    image: '/images/art_studio.png',
  },
  {
    id: 'innovation',
    title: 'Future-Ready Labs',
    subtitle: 'Merging theory with experiment in state-of-the-art robotics and science hubs.',
    image: '/images/science_lab.png',
  },
  {
    id: 'community',
    title: 'Global Community',
    subtitle: 'Nurturing diverse global perspectives and enduring bonds in an inclusive environment.',
    image: '/images/seminar_discussion.png',
  }
];

export default function Experience() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section ref={targetRef} className={styles.section} id="experience">
      <div className={styles.stickyContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="heading-sub">The Experience</span>
            <h2 className="heading-display">
              Five pillars of <br />
              <span className={styles.gradientText}>Mount Senoria excellence.</span>
            </h2>
          </div>
          
          <motion.div style={{ x }} className={styles.scrollContent}>
            {PANELS.map((panel, index) => (
              <div key={panel.id} className={`glass-card ${styles.panel}`}>
                <div className={styles.panelContent}>
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={panel.image} 
                      alt={panel.title} 
                      className={styles.image}
                    />
                    <span className={styles.panelNumber}>0{index + 1}</span>
                  </div>
                  <div className={styles.textContent}>
                    <h3 className={styles.panelTitle}>{panel.title}</h3>
                    <p className={styles.panelSubtitle}>{panel.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
