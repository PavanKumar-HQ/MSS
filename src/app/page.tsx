import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import DayAtSchool from '@/components/DayAtSchool';
import WhyChooseUs from '@/components/WhyChooseUs';
import CampusImmersion from '@/components/CampusImmersion';
import Academics from '@/components/Academics';
import StudentLife from '@/components/StudentLife';
import ResultsAchievements from '@/components/ResultsAchievements';
import Testimonials from '@/components/Testimonials';
import LeadershipMessage from '@/components/LeadershipMessage';
import NewsEvents from '@/components/NewsEvents';
import Admissions from '@/components/Admissions';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Experience />
      <DayAtSchool />
      <WhyChooseUs />
      <CampusImmersion />
      <Academics />
      <StudentLife />
      <ResultsAchievements />
      <Testimonials />
      <LeadershipMessage />
      <NewsEvents />
      <Admissions />
    </main>
  );
}
