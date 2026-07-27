import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, GraduationCap, Users, Star, CheckCircle2, Rocket, Code2, Smartphone, BrainCircuit, Cloud, Database, PenTool, Megaphone, Headset, Briefcase, Quote, Mail } from 'lucide-react';
import SectionHeading from '../../components/shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import Companies from '../../components/Companies/Companies';
import { brand, services } from '../../data/siteData';
import { industries } from '../../data/corporateData';
import Globe3D from '../../components/shared/Globe3D';
import { useSplash } from '../../context/SplashContext';
import sagarUmalkarImg from '../../assets/sagar-umalkar.png';

// One icon per service, in the same order as `services` in siteData.js.
const serviceIcons = [Code2, Smartphone, BrainCircuit, Cloud, Database, PenTool, Megaphone, Headset];

// Cycled per card so the hover state isn't the same color on every tile —
// same brand palette used across the site (primary/secondary/accent/success)
// plus a few complementary tones for variety.
const accentColors = ['#0D9488', '#D97706', '#E11D48', '#16A34A', '#EA580C', '#C026D3', '#7C3AED', '#DB2777', '#65A30D'];

// Founder profile stats — icon, value, label, and a color to tint each card.
const founderStats = [
  { icon: Briefcase, value: '20+', label: 'Years Experience', color: '#0D9488' },
  { icon: GraduationCap, value: '500+', label: 'Students Trained', color: '#10B981' },
  { icon: Code2, value: '50+', label: 'Software Projects', color: '#C026D3' },
  { icon: Users, value: '150+', label: 'Corporate Clients', color: '#F59E0B' },
];

export default function LandingHome() {
  const { splashFinished } = useSplash();
  const titlePart1 = "We Build Software,";
  const titlePart2 = "And The Engineers Behind It.";

  const sentenceVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.2,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.15
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-radial-glow">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-28 left-[8%] w-14 h-14 rounded-2xl bg-primary/10 animate-float hidden md:block" />
          <span className="absolute top-24 right-[10%] w-16 h-16 rounded-3xl bg-secondary/10 animate-float-slow hidden md:block" />
          <span className="absolute bottom-16 right-[6%] w-10 h-10 rounded-full bg-success/15 animate-float hidden md:block" />
        </div>

        <div className="container-px relative">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center relative">
            <div className="relative z-20 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6"
              >
              </motion.div>

              <motion.h1
                variants={sentenceVariants}
                initial="hidden"
                animate={splashFinished ? "visible" : "hidden"}
                className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-text-primary"
              >
                {titlePart1.split(" ").map((word, wIdx) => (
                  <span key={`w1-${wIdx}`} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, cIdx) => (
                      <motion.span key={`c1-${wIdx}-${cIdx}`} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                    <motion.span variants={letterVariants} className="inline-block">
                      {"\u00A0"}
                    </motion.span>
                  </span>
                ))}
                <span className="text-gradient">
                  {titlePart2.split(" ").map((word, wIdx, arr) => (
                    <span key={`w2-${wIdx}`} className="inline-block whitespace-nowrap">
                      {word.split("").map((char, cIdx) => (
                        <motion.span key={`c2-${wIdx}-${cIdx}`} variants={letterVariants} className="inline-block">
                          {char}
                        </motion.span>
                      ))}
                      {wIdx < arr.length - 1 && (
                        <motion.span variants={letterVariants} className="inline-block">
                          {"\u00A0"}
                        </motion.span>
                      )}
                    </span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Globe Creater partners with businesses across High Tech, Healthcare, Manufacturing,
                Financial Services and the Public Sector to deliver custom software — and trains the
                next generation of developers through our Industrial Training programs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors">
                  Talk to Us <ArrowRight size={18} />
                </Link>
                <Link to="/industrial-training" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-primary border border-stone-200 hover:border-primary/40 hover:text-primary transition-colors bg-white/70">
                  Explore Industrial Training
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: "-120vw", opacity: 0 }}
              animate={splashFinished ? { x: 0, opacity: 1 } : { x: "-120vw", opacity: 0 }}
              transition={{ duration: 2.0, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 lg:relative lg:inset-auto flex justify-center items-center pointer-events-none lg:pointer-events-auto z-0 lg:z-10 lg:col-span-5 select-none"
            >
              <div className="opacity-15 lg:opacity-100 transition-opacity duration-300 relative flex items-center justify-center">
                {/* Floating stats card placed BEHIND the 3D globe on the right */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={splashFinished ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute right-[-30px] sm:right-[-60px] lg:right-[-90px] top-1/2 -transtone-y-1/2 bg-white/30 backdrop-blur-md border border-white/60 rounded-3xl shadow-xl shadow-stone-900/5 p-5 sm:p-6 w-[160px] sm:w-[185px] space-y-4 text-center z-0 pointer-events-auto"
                >
                  <div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">100+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider mt-1">Enterprise Clients</div>
                  </div>
                  <div className="h-[1px] bg-stone-900/10 w-3/4 mx-auto" />
                  <div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">5+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider mt-1">Projects</div>
                  </div>
                  <div className="h-[1px] bg-stone-900/10 w-3/4 mx-auto" />
                  <div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">2+</div>
                    <div className="text-[10px] sm:text-xs font-bold text-stone-700 uppercase tracking-wider mt-1">Years Experience</div>
                  </div>
                </motion.div>

                {/* 3D Globe rendered IN FRONT of the card */}
                <div
                  className="w-[345px] h-[345px] md:scale-110 lg:scale-125 xl:scale-135 transition-all duration-300 relative z-10 pointer-events-none"
                  style={{ perspective: '1100px' }}
                >
                  <Globe3D />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rotating client marquee */}
      <Companies title="Our Clients" />

      {/* Services teaser */}
      <section className="relative section-pad">
        <div className="container-px relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="What We Do"
              title="End-To-End Software Services."
              sub="From product engineering to cloud and AI, we work as an extension of your team."
            />
            <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
              {services.slice(0, 8).map((s, i) => {
                const Icon = serviceIcons[i] || serviceIcons[0];
                const accent = accentColors[i % accentColors.length];
                return (
                  <StaggerItem key={s.title}>
                    <div
                      className="industry-tile h-full rounded-2xl p-6"
                      style={{ '--accent': accent }}
                    >
                      <div className="industry-tile-icon w-10 h-10 rounded-full flex items-center justify-center mb-4">
                        <Icon size={18} />
                      </div>
                      <h3 className="industry-tile-title font-display font-semibold text-base mb-2">{s.title}</h3>
                      <p className="industry-tile-desc text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
            <div className="mt-10 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary">
                View all services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries teaser */}
      <section className="relative overflow-hidden section-pad bg-gradient-to-br from-teal-50 via-white to-amber-50">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"></div>
        <div className="container-px relative z-10">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Industries"
              title="Domain Experience That Matters."
              sub="We've delivered software across these industries — and know the workflows that come with them."
            />
            <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.1}>
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                const accent = accentColors[i % accentColors.length];
                return (
                  <StaggerItem key={ind.title}>
                    <Link
                      to="/industries"
                      className="industry-tile h-full block rounded-2xl p-7"
                      style={{ '--accent': accent }}
                    >
                      <span className="industry-tile-icon w-12 h-12 rounded-full flex items-center justify-center mb-5">
                        <Icon size={22} />
                      </span>
                      <h3 className="industry-tile-title font-display font-semibold text-base mb-2">{ind.title}</h3>
                      <p className="industry-tile-desc text-sm leading-relaxed">{ind.desc}</p>
                      <span className="industry-tile-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary">
                        Learn More <ArrowRight size={15} />
                      </span>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Industrial Training CTA */}
      <section className="section-pad bg-white">
        <div className="container-px">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-primary p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Looking to build your tech career instead?
              </h2>
              <p className="mt-3 text-white/85 text-sm sm:text-base leading-relaxed">
                Our Industrial Training programs — Full Stack, Data Science, DevOps & Digital
                Marketing — come with live projects and placement support.
              </p>
            </div>
            <Link
              to="/industrial-training"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary bg-white shrink-0"
            >
              Explore Industrial Training <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Founder teaser */}
      {/* About / Founder teaser */}
      <section className="section-pad bg-bg-dark text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <span className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="container-px relative z-10">
          <div className="mx-auto max-w-6xl rounded-3xl bg-stone-900/60 border border-stone-800/80 p-8 md:p-12 lg:p-14 backdrop-blur-md shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Left Column: Photo, name, quote, socials */}
              <div className="lg:col-span-4">
                <div className="rounded-3xl overflow-hidden border border-stone-700/40">
                  <img
                    src={sagarUmalkarImg}
                    alt="Sagar Umalkar"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-display font-extrabold text-2xl text-white">Sagar Umalkar</h3>
                  <p className="text-gradient font-semibold text-sm mt-1 leading-snug">
                    Founder &amp; CEO<br />Globe Creater
                  </p>
                </div>

                {/* <div className="mt-6 rounded-2xl bg-stone-950/40 border border-stone-800/50 p-5 relative">
                  <Quote size={22} className="text-primary/40 absolute top-4 left-4" />
                  <p className="text-stone-300 text-sm italic leading-relaxed pl-2">
                    Building innovative software solutions while empowering the next generation of technology professionals.
                  </p>
                </div> */}

                {/* <div className="mt-6 flex items-center gap-3 justify-center">
                  <span className="text-xs text-stone-400 font-semibold">Follow</span>
                  <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs hover:opacity-90 transition-opacity">
                    in
                  </a>
                  <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-stone-700 transition-colors">
                    <Code2 size={15} />
                  </a>
                  <a href="#" aria-label="Email" className="w-9 h-9 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-stone-700 transition-colors">
                    <Mail size={15} />
                  </a>
                </div> */}
              </div>

              {/* Right Column: Eyebrow, heading, passage, stats */}
              <div className="lg:col-span-8 text-center">
                <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold tracking-wider uppercase text-primary mb-5">
                  <span className="w-6 h-px bg-primary/50" />
                  Meet Our Founder
                  <span className="w-6 h-px bg-primary/50" />
                </div>

                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                  The Visionary Behind<br />
                  <span className="text-gradient">Globe Creater</span>
                </h2>

                <p className="mt-5 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  With over two decades of experience in software development, enterprise solutions, and technical
                  education, Sagar Umalkar founded <span className="text-gradient font-semibold">Globe Creater</span> with
                  a vision to bridge the gap between industry and education.
                </p>

                <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {founderStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl bg-stone-950/40 border border-stone-800/50 p-5 text-center"
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${stat.color}1A`, color: stat.color }}
                        >
                          <Icon size={20} />
                        </div>
                        <div className="font-display font-extrabold text-2xl text-white">{stat.value}</div>
                        <div className="text-xs text-stone-400 mt-1 leading-snug">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}