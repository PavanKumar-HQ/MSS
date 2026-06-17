'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Admissions.module.css';

export default function Admissions() {
  const [activeTab, setActiveTab] = useState<'process' | 'documents' | 'eligibility'>('process');
  const [form, setForm] = useState({ studentName: '', grade: 'LKG', parentName: '', contact: '', priorSchool: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.studentName && form.parentName && form.contact) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section" id="admissions">
      <div className={styles.glow} />
      <div className="container">
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <span className="heading-sub">Admissions</span>
          <h2 className="heading-display">
            Join the <span style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mount Senoria</span> family.
          </h2>
          <p className="paragraph-lead" style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            We look forward to welcoming new students into our vibrant learning community.
          </p>
        </div>
        <div className={styles.layout}>
          
          {/* Left Side: Tabs & Info */}
          <div className={`glass-card ${styles.infoCard}`}>
            <div className={styles.tabsHeader}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'process' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('process')}
              >
                Process
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'documents' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('documents')}
              >
                Documents
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'eligibility' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('eligibility')}
              >
                Eligibility
              </button>
            </div>

            <div className={styles.tabContent}>
              <AnimatePresence mode="wait">
                {activeTab === 'process' && (
                  <motion.div 
                    key="process"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.contentPane}
                  >
                    <ul className={styles.processList}>
                      <li>
                        <span className={styles.stepNum}>1</span>
                        <svg className={styles.stepIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>Visit or contact us for an application form</span>
                      </li>
                      <li>
                        <span className={styles.stepNum}>2</span>
                        <svg className={styles.stepIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        <span>Submit application with required documents</span>
                      </li>
                      <li>
                        <span className={styles.stepNum}>3</span>
                        <svg className={styles.stepIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                        <span>Attend the interaction/assessment session</span>
                      </li>
                      <li>
                        <span className={styles.stepNum}>4</span>
                        <svg className={styles.stepIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                        <span>Receive admission confirmation</span>
                      </li>
                      <li>
                        <span className={styles.stepNum}>5</span>
                        <svg className={styles.stepIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                        <span>Complete fee payment and enrollment</span>
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'documents' && (
                  <motion.div 
                    key="documents"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.contentPane}
                  >
                    <ul className={styles.docList}>
                      <li><span className={styles.checkIcon}>✓</span> Birth Certificate</li>
                      <li><span className={styles.checkIcon}>✓</span> Transfer Certificate (if applicable)</li>
                      <li><span className={styles.checkIcon}>✓</span> Report Card / Progress Report</li>
                      <li><span className={styles.checkIcon}>✓</span> Passport-size photographs (4 nos.)</li>
                      <li><span className={styles.checkIcon}>✓</span> Aadhar Card of student and parent</li>
                      <li><span className={styles.checkIcon}>✓</span> Address proof</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'eligibility' && (
                  <motion.div 
                    key="eligibility"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.contentPane}
                  >
                    <div className={styles.eligibilityContent}>
                      <p>Admission is granted based on the child's age, previous academic records, and performance during the interaction session.</p>
                      <br/>
                      <p><strong>Age Criteria:</strong></p>
                      <ul>
                        <li>LKG: 3.5 to 4.5 years</li>
                        <li>UKG: 4.5 to 5.5 years</li>
                        <li>Grade 1: 5.5 to 6.5 years</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="tel:9972235286" className={styles.callButton}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call: 99722 35286
            </a>
          </div>

          {/* Right Side: Form */}
          <div className={`glass-card ${styles.formCard}`}>
            <div className={styles.formHeader}>
              <div className={styles.formIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h2 className={styles.formTitle}>Apply Online</h2>
            </div>

            {submitted ? (
              <motion.div 
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Application Submitted</h3>
                <p>Thank you. Our admissions team will review your details and contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.inputWrap}>
                    <label className={styles.label}>STUDENT'S NAME</label>
                    <input type="text" placeholder="Full name" className={styles.input} required 
                      value={form.studentName} onChange={e => setForm({...form, studentName: e.target.value})} />
                  </div>
                  <div className={styles.inputWrap}>
                    <label className={styles.label}>GRADE APPLIED FOR</label>
                    <input type="text" placeholder="LKG" className={styles.input} required
                      value={form.grade} onChange={e => setForm({...form, grade: e.target.value})} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputWrap}>
                    <label className={styles.label}>PARENT'S NAME</label>
                    <input type="text" placeholder="Parent name" className={styles.input} required
                      value={form.parentName} onChange={e => setForm({...form, parentName: e.target.value})} />
                  </div>
                  <div className={styles.inputWrap}>
                    <label className={styles.label}>CONTACT NUMBER</label>
                    <input type="text" placeholder="+91" className={styles.input} required
                      value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} />
                  </div>
                </div>

                <div className={styles.inputWrap}>
                  <label className={styles.label}>PRIOR SCHOOL (OPTIONAL)</label>
                  <input type="text" placeholder="Previous school name" className={styles.input}
                    value={form.priorSchool} onChange={e => setForm({...form, priorSchool: e.target.value})} />
                </div>

                <div className={styles.inputWrap}>
                  <label className={styles.label}>NOTES / QUERIES</label>
                  <textarea placeholder="Any special requirements..." className={styles.textarea} rows={3}
                    value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}></textarea>
                </div>

                <button type="submit" className="btn-premium" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                  Submit Application →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
