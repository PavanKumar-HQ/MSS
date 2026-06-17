'use client';

import { motion } from 'framer-motion';
import styles from './NewsEvents.module.css';

const EVENTS = [
  {
    day: '26',
    month: 'JANUARY',
    fullDate: 'JANUARY 26, 2026',
    title: 'Annual Day',
    summary: 'View memories and highlights from our spectacular annual day celebrations.',
    image: '/images/seminar_discussion.png'
  },
  {
    day: '20',
    month: 'FEBRUARY',
    fullDate: 'FEBRUARY 20, 2026',
    title: 'Sports Day',
    summary: 'View memories and highlights from our energetic sports day events and tournaments.',
    image: '/images/athletics_field.png'
  },
  {
    day: '15',
    month: 'MARCH',
    fullDate: 'MARCH 15, 2026',
    title: 'Science Fair',
    summary: 'View projects and highlights from our spectacular annual science and robotics fair.',
    image: '/images/science_lab.png'
  }
];

export default function NewsEvents() {
  return (
    <section className="section" id="news-events" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="heading-sub">Updates</span>
            <h2 className="heading-display">
              Latest <span className={styles.gradientText}>Events.</span>
            </h2>
            <p className="paragraph-lead" style={{ marginTop: '1rem' }}>What's happening at Mount Senoria</p>
          </div>
          <a href="#" className={styles.viewAll}>View all →</a>
        </div>

        <div className={styles.grid}>
          {EVENTS.map((event, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
            >
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={event.image} alt={event.title} className={styles.image} />
                <div className={styles.dateBadgeOverlay}>
                  <span className={styles.badgeMonth}>{event.month}</span>
                  <span className={styles.badgeDay}>{event.day}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardSummary}>{event.summary}</p>
                <div className={styles.divider} />
                <div className={styles.cardFooter}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.calendarIcon}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className={styles.footerDate}>{event.fullDate}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
