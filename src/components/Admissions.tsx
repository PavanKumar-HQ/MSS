'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Admissions.module.css';

export default function Admissions() {
  const [form, setForm] = useState({ name: '', email: '', grade: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section" id="admissions">
      <div className={styles.glow} />
      <div className="container">
        <div className={`glass-card ${styles.card}`}>
          <div className={styles.layout}>
            {/* Steps Section */}
            <div className={styles.stepsSide}>
              <span className="heading-sub">Admissions</span>
              <h2 className={`heading-display ${styles.heading}`}>
                Begin your <br />
                <span className={styles.gradientText}>journey here.</span>
              </h2>
              <p className={styles.sub}>
                Our admissions process is crafted to evaluate scholastic potential, creative enthusiasm, and collaborative character.
              </p>

              <div className={styles.stepsList}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>01</span>
                  <div className={styles.stepText}>
                    <h4 className={styles.stepTitle}>Submit Inquiry</h4>
                    <p className={styles.stepDesc}>Tell us about your child’s interests and academic path.</p>
                  </div>
                </div>
                
                <div className={styles.step}>
                  <span className={styles.stepNumber}>02</span>
                  <div className={styles.stepText}>
                    <h4 className={styles.stepTitle}>Campus Visit</h4>
                    <p className={styles.stepDesc}>Schedule an offline tour and meet our department mentors.</p>
                  </div>
                </div>
                
                <div className={styles.step}>
                  <span className={styles.stepNumber}>03</span>
                  <div className={styles.stepText}>
                    <h4 className={styles.stepTitle}>Scholastic Review</h4>
                    <p className={styles.stepDesc}>A developmental assessment and friendly conversation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className={styles.formSide}>
              <div className={`glass-card ${styles.formCard}`}>
                {submitted ? (
                  <motion.div 
                    className={styles.successState}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={styles.successIcon}>✓</div>
                    <h3>Inquiry Submitted</h3>
                    <p>Thank you. An admissions advisor will contact you within one business day with the digital prospectus.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <h3 className={styles.formTitle}>Request Prospectus</h3>
                    
                    <div className={styles.inputWrap}>
                      <label htmlFor="name" className={styles.label}>Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        placeholder="John Doe" 
                        className={styles.input}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.inputWrap}>
                      <label htmlFor="email" className={styles.label}>Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        placeholder="john@example.com" 
                        className={styles.input}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.inputWrap}>
                      <label htmlFor="grade" className={styles.label}>Grade Entering</label>
                      <select 
                        id="grade" 
                        className={styles.select}
                        value={form.grade}
                        onChange={(e) => setForm({ ...form, grade: e.target.value })}
                      >
                        <option value="">Select Grade</option>
                        <option value="primary">Primary Academy (K-5)</option>
                        <option value="middle">Middle School (6-8)</option>
                        <option value="high">High School (9-12)</option>
                      </select>
                    </div>

                    <button type="submit" className="btn-premium" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                      Submit Inquiry →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
