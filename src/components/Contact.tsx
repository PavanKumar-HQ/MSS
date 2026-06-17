'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section" id="contact">
      <div className={styles.glow} />
      <div className="container">
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <span className="heading-sub">Get in Touch</span>
          <h2 className="heading-display">
            We are here to <span style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>help.</span>
          </h2>
        </div>
        <div className={styles.layout}>
          
          {/* Left Side: Contact Info */}
          <motion.div 
            className={`glass-card ${styles.infoCard}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.infoTitle}>Contact Information</h2>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className={styles.textWrap}>
                  <span className={styles.label}>ADDRESS</span>
                  <p className={styles.value}>3rd Main Rd, Laggere, Bengaluru, Karnataka 560058</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className={styles.textWrap}>
                  <span className={styles.label}>PHONE</span>
                  <p className={styles.valueStrong}>99722 35286</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className={styles.textWrap}>
                  <span className={styles.label}>EMAIL</span>
                  <p className={styles.valueStrong}>info@mountsenoria.edu.in</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className={styles.textWrap}>
                  <span className={styles.label}>OFFICE HOURS</span>
                  <p className={styles.value}>Monday – Saturday: 8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            className={`glass-card ${styles.formCard}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={styles.formTitle}>Send us a Message</h2>

            {submitted ? (
              <motion.div 
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputWrap}>
                  <label className={styles.label}>FULL NAME</label>
                  <input type="text" placeholder="John Doe" className={styles.input} required 
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputWrap}>
                    <label className={styles.label}>EMAIL ADDRESS</label>
                    <input type="email" placeholder="john@example.com" className={styles.input} required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className={styles.inputWrap}>
                    <label className={styles.label}>PHONE NUMBER</label>
                    <input type="text" placeholder="+91" className={styles.input} required
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                </div>

                <div className={styles.inputWrap}>
                  <label className={styles.label}>YOUR MESSAGE</label>
                  <textarea placeholder="How can we help you?" className={styles.textarea} rows={4} required
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="btn-premium" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
