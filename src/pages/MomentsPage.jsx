import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid, Building2, Calendar, GraduationCap, PartyPopper, Code2, Heart,
  Users, Trophy, Star, ArrowRight, ImageOff,
} from 'lucide-react';
import { momentCategories, moments } from '../data/momentsData';
import { brand } from '../data/siteData';
import { StaggerGroup, StaggerItem } from '../components/shared/Reveal';

// Maps the string icon names stored in data files to actual components,
// so momentsData.js stays plain/serializable.
const iconMap = { LayoutGrid, Building2, Calendar, GraduationCap, PartyPopper, Code2, Heart, Users, Trophy, Star };

export default function MomentsPage() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? moments : moments.filter((m) => m.category === active);

  return (
    <section className="relative pt-32 pb-24 bg-gradient-radial-glow overflow-hidden">
      <div className="container-px relative">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full"
            >
              Life at {brand.name}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display font-extrabold text-4xl sm:text-5xl leading-tight tracking-tight text-text-primary"
            >
              Moments That <span className="text-gradient">Inspire</span> Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed"
            >
              We believe in celebrating milestones, building teamwork, and creating memories that last forever.
            </motion.p>
          </div>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {momentCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                    isActive
                      ? 'border-transparent'
                      : 'text-text-primary border-stone-200 bg-white hover:border-primary/30 hover:text-primary'
                  }`}
                  style={isActive ? { color: cat.color, borderColor: `${cat.color}66`, backgroundColor: `${cat.color}1A` } : undefined}
                >
                  <Icon size={16} /> {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.06}>
            {filtered.map((m) => {
              const Icon = iconMap[m.icon] || ImageOff;
              const catColor = momentCategories.find((c) => c.id === m.category)?.color || '#0D9488';
              return (
                <StaggerItem key={m.id}>
                  <div
                    className="accent-card h-full rounded-3xl border border-stone-100 bg-white overflow-hidden shadow-sm"
                    style={{ '--accent': catColor }}
                  >
                    {/* Placeholder visual — swap for a real photo via momentsData.js `image` field */}
                    <div
                      className="relative aspect-[4/3] flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: catColor }}
                    >
                      <div className="absolute inset-0 bg-gradient-radial-glow opacity-50" />
                      <Icon size={40} className="relative text-white/90" />
                    </div>
                    <div className="p-5 flex items-start gap-3">
                      <div className="accent-icon w-9 h-9 shrink-0 rounded-xl flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="accent-title font-display font-bold text-base text-text-primary">{m.title}</h3>
                        <p className="text-sm text-text-secondary mt-0.5">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          {/* CTA — links out to Instagram for the full, ever-growing photo gallery */}
          <div className="mt-14 text-center">
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary border border-primary/30 hover:bg-primary/5 transition-colors"
            >
              View More Moments <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
