'use client';

import { motion } from 'framer-motion';
import styles from './NewsEvents.module.css';

const EVENTS = [
  {
    day: '15',
    month: 'OCT',
    title: 'Admissions Open Seminar',
    time: '10:00 AM - 12:30 PM // Grand Library'
  },
  {
    day: '22',
    month: 'NOV',
    title: 'Mount Senoria Innovation Forum',
    time: '02:00 PM - 05:00 PM // Science Wing'
  },
  {
    day: '08',
    month: 'DEC',
    title: 'Annual Orchestra Concert',
    time: '07:00 PM - 09:30 PM // Assembly Hall'
  }
];

const ARTICLES = [
  {
    date: 'OCT 05, 2026',
    title: 'Mount Senoria Students Win National Robotics Tournament',
    summary: 'Our junior design group secured first place in engineering and software controls at the Annual Robotics League.'
  },
  {
    date: 'SEP 18, 2026',
    title: 'Academic Board Expands Advanced Placement Pathways',
    summary: 'Starting next semester, Mount Senoria will offer 4 new collegiate courses in economics, computational physics, and history.'
  }
];

export default function NewsEvents() {
  return (
    <section className="section" id="news-events">
      <div className="container">
        <div className={styles.layout}>
          {/* Upcoming Events Column */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="heading-sub">Upcoming Events</span>
            <h3 className={styles.colTitle}>Academic Calendar</h3>
            
            <div className={styles.list}>
              {EVENTS.map((event, index) => (
                <div key={index} className={`glass-card glass-card-hover ${styles.eventCard}`}>
                  <div className={styles.dateBadge}>
                    <span className={styles.day}>{event.day}</span>
                    <span className={styles.month}>{event.month}</span>
                  </div>
                  <div className={styles.eventInfo}>
                    <h4 className={styles.eventTitle}>{event.title}</h4>
                    <span className={styles.eventTime}>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Press & Articles Column */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="heading-sub">Latest News</span>
            <h3 className={styles.colTitle}>Press & Press Releases</h3>
            
            <div className={styles.list}>
              {ARTICLES.map((article, index) => (
                <div key={index} className={`glass-card glass-card-hover ${styles.articleCard}`}>
                  <span className={styles.articleDate}>{article.date}</span>
                  <h4 className={styles.articleTitle}>{article.title}</h4>
                  <p className={styles.articleSummary}>{article.summary}</p>
                  <a href="#news-events" className={styles.readMore}>Read Article →</a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
