'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './DayAtSchool.module.css';

const TIMELINE = [
  { time: '08:00 AM', title: 'Morning Gathering', desc: 'Starting the day with intent, community reflection, and academic orientation.' },
  { time: '09:30 AM', title: 'Core Academics', desc: 'Deep collaborative learning in literature, advanced math, and structural sciences.' },
  { time: '11:45 AM', title: 'Innovation Hour', desc: 'Hands-on project work in design thinking, coding, and prototyping spaces.' },
  { time: '01:00 PM', title: 'Fellowship Lunch', desc: 'Relaxing over fresh, chef-prepared meals with peers and advisors.' },
  { time: '02:30 PM', title: 'Athletics & Artistry', desc: 'Cultivating teamwork on the courts and imaginative projects in the studios.' },
  { time: '04:00 PM', title: 'Leadership Clubs', desc: 'Student-led council debates, campus initiatives, and community service.' }
];

export default function DayAtSchool() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Use scrollX for horizontal scrolling progress
  const { scrollXProgress } = useScroll({
    container: scrollRef
  });

  return (
    <section className="section" id="day-at-school">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">A Day at Mount Senoria</span>
          <h2 className="heading-display">
            The rhythm of <span className={styles.gradientText}>our day.</span>
          </h2>
          <p className="paragraph-lead" style={{ marginTop: '1rem', maxWidth: '600px' }}>
            Follow a student's daily path through academics, creation, collaboration, and leadership.
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineScroll} ref={scrollRef}>
            <div className={styles.timelineContent}>
              {/* Horizontal progress line */}
              <div className={styles.lineContainer}>
                <div className={styles.lineBackground} />
                <motion.div 
                  className={styles.lineFill} 
                  style={{ scaleX: scrollXProgress, transformOrigin: 'left' }} 
                />
              </div>

              <div className={styles.events}>
                {TIMELINE.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} scrollRef={scrollRef} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, scrollRef }: { item: any, index: number, scrollRef: any }) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={itemRef} 
      className={`${styles.item} ${isEven ? styles.even : styles.odd}`}
      initial={{ opacity: 0, y: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef, once: true, margin: "100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className={styles.dotContainer}>
        <span className={styles.timeTag}>{item.time}</span>
        <div className={styles.dotOuter}>
          <div className={styles.dotInner} />
        </div>
      </div>
      
      <div className={`glass-card ${styles.card}`}>
        <div className={styles.numberBadge}>0{index + 1}</div>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemDesc}>{item.desc}</p>
      </div>
    </motion.div>
  );
}
