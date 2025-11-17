import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast (pointer-events-none so Spline stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-700 bg-white/70 backdrop-blur rounded-full px-3 py-1 border border-white/50 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Performance-first marketing studio
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Scale your growth with ads, web, and tracking that actually work
        </h1>
        <p className="mt-4 max-w-2xl text-slate-700 text-lg">
          We design high-converting websites, run profit-focused ad campaigns, and implement bulletproof analytics so you always know what moves the needle.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-medium shadow-md hover:shadow-lg hover:translate-y-[-1px] transition-all">
            Book a strategy call
          </a>
          <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/80 backdrop-blur border border-white/70 text-slate-800 font-medium hover:bg-white transition">
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;