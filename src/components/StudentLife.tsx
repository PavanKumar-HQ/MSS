'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './StudentLife.module.css';

const MOSAIC_ITEMS = [
  { 
    id: 'creative', 
    title: 'Creative Arts', 
    desc: 'Fine arts, ceramics, digital graphics, and classical painting workshops.',
    width: '56%', 
    height: '420px', 
    image: '/images/art_studio.png' 
  },
  { 
    id: 'leadership', 
    title: 'Leadership Council', 
    desc: 'Student-led debates, international MUN conferences, and social assemblies.',
    width: '40%', 
    height: '340px', 
    image: '/images/seminar_discussion.png', 
    marginTop: '80px' 
  },
  { 
    id: 'research', 
    title: 'Academic Societies', 
    desc: 'Deep collaboration inside robotics, mathematics, and science clubs.',
    width: '42%', 
    height: '480px', 
    image: '/images/science_lab.png', 
    marginTop: '-80px' 
  },
  { 
    id: 'fellowship', 
    title: 'Global Fellowships', 
    desc: 'Building sportsmanship, outdoor resilience, and cross-border initiatives.',
    width: '54%', 
    height: '380px', 
    image: '/images/athletics_field.png', 
    marginTop: '20px' 
  },
];

export default function StudentLife() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="section" id="student-life">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">Student Life</span>
          <h2 className="heading-display">
            A tapestry of <span className={styles.gradientText}>rich experiences.</span>
          </h2>
          <p className="paragraph-lead" style={{ marginTop: '1.5rem', maxWidth: '600px' }}>
            Mount Senoria prepares students to lead meaningful lives. Outside the classrooms, students engage in high-level arts, athletics, and community leadership.
          </p>
        </div>

        <div className={styles.mosaic}>
          {MOSAIC_ITEMS.map((item, index) => (
            <MosaicItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MosaicItem({ item, index }: { item: any, index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <motion.div 
      ref={itemRef}
      className={styles.mosaicItem}
      style={{ 
        width: item.width, 
        height: item.height, 
        marginTop: item.marginTop || '0',
        y 
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <div className={`glass-card ${styles.itemInner}`}>
        <div className={styles.imageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={item.image} 
            alt={item.title} 
            className={styles.image}
          />
        </div>
        <div className={`glass-card ${styles.cardOverlay}`}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemDesc}>{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
