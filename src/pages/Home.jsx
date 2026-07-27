import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Courses from '../components/Courses/Courses';
import Roadmap from '../components/Roadmap/Roadmap';
import Certification from '../components/Certification/Certification';
import Companies from '../components/Companies/Companies';
import Placements from '../components/Placements/Placements';
import Batches from '../components/Batches/Batches';
import Projects from '../components/Projects/Projects';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Stats />
      <WhyChooseUs />
      <Courses limit={6} />
      <Roadmap />
      <Certification />
      <Placements />
      <Batches />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
