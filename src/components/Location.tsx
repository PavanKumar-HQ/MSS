'use client';
import { motion } from 'framer-motion';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section className="section" id="location" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className={styles.header} style={{ textAlign: 'center' }}>
          <span className="heading-sub">Location</span>
          <h2 className="heading-display">
            Visit Our <span className={styles.gradientText}>Campus.</span>
          </h2>
          <p className="paragraph-lead" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Laggere, Bengaluru, Karnataka
          </p>
        </div>

        <div className={styles.layout}>
          <motion.div 
            className={`glass-card ${styles.mapContainer}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.4878566367!2d77.5133642!3d13.0039757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d78907b22a9%3A0xc3f3458ceaa8e693!2sLaggere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718621430000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div 
            className={`glass-card ${styles.qrCard}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.qrWrapper}>
              <div className={styles.qrCode}>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=Mount+Senoria+School+Bengaluru" alt="QR Code" width="140" height="140" />
                 <div className={styles.qrPin}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
                 </div>
              </div>
            </div>
            
            <h3 className={styles.qrTitle}>Scan to Navigate</h3>
            <p className={styles.qrDesc}>Scan this QR code with your phone camera to quickly get directions to our school.</p>
            
            <div className={styles.divider} />
            
            <div className={styles.addressBox}>
               <span className={styles.addressLabel}>CAMPUS ADDRESS</span>
               <p className={styles.addressText}>3rd Main Rd, Laggere, Bengaluru, 560058</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
