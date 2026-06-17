'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const FAQS = [
  {
    question: "What is the admissions process for Mount Senoria School?",
    answer: "Our admissions process involves an initial application, followed by an academic review and a friendly conversation with the student and parents. We evaluate academic potential, creative enthusiasm, and collaborative character."
  },
  {
    question: "Do you offer transportation for students?",
    answer: "Yes, we offer safe and comfortable transportation services across major routes in Bengaluru. All our buses are air-conditioned and monitored with GPS tracking."
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer a wide range of extracurriculars including sports (football, basketball, swimming), performing arts (music, theater, dance), and various clubs like robotics, debate, and environment."
  },
  {
    question: "What is the student-to-teacher ratio?",
    answer: "We maintain a low student-to-teacher ratio of 6:1 to ensure personalized attention and optimal learning outcomes for every student."
  },
  {
    question: "Are there any scholarships available?",
    answer: "Yes, we award scholarships based on academic excellence, sports achievements, and exceptional talent in arts. Over 15 million in scholarships are awarded annually."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faqs">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.header}>
          <span className="heading-sub">FAQs</span>
          <h2 className="heading-display">
            Frequently Asked <span className={styles.gradientText}>Questions.</span>
          </h2>
          <p className="paragraph-lead" style={{ marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>Find answers to common questions about Mount Senoria School.</p>
        </div>
        
        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <div key={index} className={`glass-card ${styles.faqItem} ${openIndex === index ? styles.active : ''}`}>
              <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                <span className={styles.questionText}>{faq.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.faqAnswerWrapper}
                  >
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
