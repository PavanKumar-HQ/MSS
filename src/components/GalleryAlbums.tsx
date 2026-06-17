'use client';
import { motion } from 'framer-motion';
import styles from './GalleryAlbums.module.css';

const ALBUMS = [
  { title: "Geniusphere", count: 4, image: "/images/art_studio.png" },
  { title: "Christmas Celebration", count: 4, image: "/images/seminar_discussion.png" },
  { title: "Independence Day", count: 6, image: "/images/athletics_field.png" },
  { title: "Sankranti Celebration", count: 6, image: "/images/campus_exterior.png" },
  { title: "School Trip", count: 9, image: "/images/library_interior.png" },
  { title: "Science Exhibition", count: 5, image: "/images/science_lab.png" },
  { title: "Annual Day", count: 5, image: "/images/headmaster_portrait.png" },
  { title: "Sports Day", count: 14, image: "/images/art_studio.png" }
];

export default function GalleryAlbums() {
  return (
    <section className="section" id="gallery">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">Gallery</span>
          <h2 className="heading-display" style={{ marginTop: '0.5rem' }}>
            Memories from <span className={styles.gradientText}>Mount Senoria.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {ALBUMS.map((album, index) => (
            <motion.div 
              key={index} 
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={album.image} alt={album.title} className={styles.image} />
                <div className={styles.badge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  <span>{album.count}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{album.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
