import { GraduationCap, Wrench, LifeBuoy } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { whyChooseUs } from '../../data/siteData';

const icons = [GraduationCap, Wrench, LifeBuoy];
const accentColors = ['#0D9488', '#D97706', '#E11D48'];

export default function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why Globe Creater"
            title="Built around outcomes, not just lectures"
            sub="Our expert trainers and up-to-date curriculum ensure you receive industry-leading education tailored to your career goals."
          />

          <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6" stagger={0.15}>
            {whyChooseUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={item.n}>
                  <div
                    className="accent-card relative h-full rounded-3xl border border-stone-100 bg-white p-8 shadow-sm"
                    style={{ '--accent': accentColors[i] }}
                  >
                    <span className="font-display text-5xl font-extrabold text-primary/10 absolute top-6 right-7">{item.n}</span>
                    <div className="accent-icon w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="accent-title font-display font-bold text-xl mb-3 text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
