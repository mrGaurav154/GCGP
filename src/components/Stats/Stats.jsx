import Counter from '../shared/Counter';
import Reveal, { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { stats } from '../../data/siteData';

export default function Stats() {
  return (
    <section className="relative -mt-1 py-6">
      <div className="container-px">
        <div className="relative mx-auto max-w-6xl">
          {/* decorative blurred color blobs */}
          <span className="absolute -top-14 -left-10 w-56 h-56 rounded-full bg-emerald-500/25 blur-3xl pointer-events-none" />
          <span className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full bg-teal-500/25 blur-3xl pointer-events-none" />
          <span className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-green-400/20 blur-3xl pointer-events-none" />

          <Reveal direction="zoom">
            <div className="relative overflow-hidden rounded-3xl frosted-gradient-bar px-6 sm:px-10 py-10 grid md:grid-cols-2 gap-10 items-center">
              {/* Left: tagline + stat counters */}
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2.15rem] text-white leading-snug tracking-tight">
                  Your Goals, Our Courses, <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text text-transparent">Their Results.</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-emerald-100/80 max-w-sm">
                  A career-focused curriculum built to turn ambition into an offer letter.
                </p>

                <StaggerGroup className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6" stagger={0.12}>
                  {stats.map((s) => (
                    <StaggerItem key={s.label}>
                      <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-300 drop-shadow-[0_2px_10px_rgba(52,211,153,0.3)]">
                        <Counter end={s.value} duration={2.4} suffix={s.suffix} />
                      </div>
                      <div className="mt-1 text-xs sm:text-sm font-medium text-emerald-200/90">{s.label}</div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              {/* Right: animated 3D growth illustration */}
              <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] border border-emerald-400/30 shadow-2xl shadow-emerald-950/60">
                <video
                  className="w-full h-full object-cover"
                  src="/video/growth-graph.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
