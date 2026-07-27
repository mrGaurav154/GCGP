import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, BrainCircuit, Cloud, Database, PenTool, Megaphone, Headset, GraduationCap } from 'lucide-react';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import { services } from '../../data/siteData';

// One icon per service, in the same order as `services` in siteData.js.
const icons = [Code2, Smartphone, BrainCircuit, Cloud, Database, PenTool, Megaphone, Headset, GraduationCap];

// Cycled per card so the hover state isn't the same color on every tile —
// same brand palette used across the site (primary/secondary/accent/success)
// plus a few complementary tones for variety.
const accentColors = ['#0D9488', '#D97706', '#E11D48', '#16A34A', '#EA580C', '#C026D3', '#7C3AED', '#DB2777', '#65A30D'];

export default function ServicesPage() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <section className="relative pt-32 pb-16 bg-gradient-radial-glow">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-4xl sm:text-5xl leading-tight"
              >
                Software services, <span className="text-gradient">built around your team.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-text-secondary leading-relaxed"
              >
                From product engineering to cloud, AI and ongoing support — we work as an extension
                of your engineering team.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-px">
            <StaggerGroup className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
              {services.map((s, i) => {
                const Icon = icons[i] || Code2;
                const accent = accentColors[i % accentColors.length];
                return (
                  <StaggerItem key={s.title}>
                    <div
                      className="industry-tile h-full rounded-2xl p-7"
                      style={{ '--accent': accent }}
                    >
                      <div className="industry-tile-icon w-11 h-11 rounded-full flex items-center justify-center mb-5">
                        <Icon size={20} />
                      </div>
                      <h3 className="industry-tile-title font-display font-semibold text-lg mb-3">{s.title}</h3>
                      <p className="industry-tile-desc text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                Have a project in mind?
              </h2>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
