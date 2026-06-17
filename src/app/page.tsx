import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import DayAtSchool from '@/components/DayAtSchool';
import WhyChooseUs from '@/components/WhyChooseUs';
import CampusImmersion from '@/components/CampusImmersion';
import Academics from '@/components/Academics';
import StudentLife from '@/components/StudentLife';
import GalleryAlbums from '@/components/GalleryAlbums';
import ResultsAchievements from '@/components/ResultsAchievements';
import Testimonials from '@/components/Testimonials';
import LeadershipMessage from '@/components/LeadershipMessage';
import NewsEvents from '@/components/NewsEvents';
import FAQ from '@/components/FAQ';
import Admissions from '@/components/Admissions';
import Location from '@/components/Location';
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
      <GalleryAlbums />
      <ResultsAchievements />
      <Testimonials />
      <LeadershipMessage />
      <NewsEvents />
      <FAQ />
      <Admissions />
      <Location />
    </main>
  );
}
