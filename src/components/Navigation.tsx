'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ x: "-50%", y: -100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Mount Senoria Logo" width={36} height={36} className={styles.logoImage} />
          <span>MOUNT SENORIA <span className={styles.logoSec}>SCHOOL</span></span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="#experience" className={styles.link}>Experience</Link>
          <Link href="#academics" className={styles.link}>Academics</Link>
          <Link href="#campus" className={styles.link}>Campus</Link>
          <Link href="#student-life" className={styles.link}>Student Life</Link>
        </nav>

        <Link href="#admissions" className={styles.cta}>
          Admissions
        </Link>
      </div>
    </motion.header>
  );
}
