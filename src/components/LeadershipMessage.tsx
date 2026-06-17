'use client';

import { motion } from 'framer-motion';
import styles from './LeadershipMessage.module.css';

export default function LeadershipMessage() {
  return (
    <section className="section" id="leadership-message">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.layout}>
          {/* Portrait Container */}
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/headmaster_portrait.png" 
                alt="Headmaster Portrait" 
                className={styles.image}
              />
            </div>
            
            <div className={`glass-card ${styles.nameCard}`}>
              <h4 className={styles.name}>Dr. Arthur Pendelton</h4>
              <span className={styles.title}>Dean & Headmaster</span>
            </div>
          </motion.div>

          {/* Letter Content */}
          <motion.div 
            className={styles.letterWrap}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="heading-sub">Leadership Message</span>
            <h2 className={`heading-display ${styles.heading}`}>
              Cultivating the <br />
              <span className={styles.gradientText}>mind and heart.</span>
            </h2>
            
            <div className={styles.letterContent}>
              <p>
                At Mount Senoria, we believe that education is not merely the transfer of information; it is the ignition of a lifelong passion for truth, rigor, and service. Our pathways are designed to challenge the intellect while nurturing the character required to navigate and lead a complex world.
              </p>
              <p>
                We invite students to become active creators rather than passive consumers. Whether collaborating in our design thinking labs, competing on our fields, or engaging in small-group seminar discussions, Mount Senoria students learn to formulate independent critique and lead with empathy.
              </p>
              <p>
                We welcome you to explore our campus, speak with our advisors, and join a community that has championed excellence for over a century.
              </p>
            </div>

            <div className={styles.signatureSection}>
              <div className={styles.signatureText}>Arthur Pendelton</div>
              <div className={styles.signatureLine} />
              <span className={styles.signatureLabel}>Arthur Pendelton, Ph.D.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
