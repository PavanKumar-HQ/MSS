'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './CampusImmersion.module.css';

const SPACES = [
  { 
    title: 'The Great Library', 
    desc: 'A sanctuary of learning, housing comprehensive print and digital collections in an architecturally inspiring glass-vaulted space.',
    image: '/images/library_interior.png'
  },
  { 
    title: 'Innovation Hub', 
    desc: 'Equipped with modern science equipment, robotics prototyping areas, and computer labs to support interactive learning.',
    image: '/images/science_lab.png'
  },
  { 
    title: 'Athletic Grounds', 
    desc: 'Generous playing fields, running tracks, and athletic spaces designed to foster physical health, resilience, and fellowship.',
    image: '/images/athletics_field.png'
  }
];

export default function CampusImmersion() {
  return (
    <section className="section" id="campus" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">Our Campus</span>
          <h2 className="heading-display">
            Spaces that <span className={styles.gradientText}>inspire greatness.</span>
          </h2>
          <p className="paragraph-lead" style={{ marginTop: '1rem', maxWidth: '600px' }}>
            Mount Senoria’s physical environment is crafted to encourage academic focus, collaborative design, and personal peace.
          </p>
        </div>

        <div className={styles.spaces}>
          {SPACES.map((space, index) => (
            <SpaceItem key={index} space={space} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpaceItem({ space, index }: { space: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1]);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={containerRef} 
      className={`${styles.spaceItem} ${isEven ? styles.even : styles.odd}`}
    >
      <div className={styles.imageContainer}>
        <motion.div 
          className={styles.imageInner} 
          style={{ scale }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img 
            src={space.image} 
            alt={space.title} 
            className={styles.image}
            style={{ y }}
          />
        </motion.div>
      </div>
      
      <div className={`glass-card ${styles.card}`}>
        <span className={styles.indexTag}>0{index + 1} // SPACES</span>
        <h3 className={styles.spaceTitle}>{space.title}</h3>
        <p className={styles.spaceDesc}>{space.desc}</p>
      </div>
    </div>
  );
}
