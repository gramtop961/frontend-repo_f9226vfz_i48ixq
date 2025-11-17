function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(900px_500px_at_10%_-10%,rgba(59,130,246,0.5),transparent),radial-gradient(700px_400px_at_90%_120%,rgba(236,72,153,0.4),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to scale without the guesswork?</h2>
            <p className="mt-3 text-slate-200 max-w-2xl">Tell us where you want to go. We’ll build the roadmap — ads, web, and tracking working together.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Your email" className="h-12 rounded-lg px-4 bg-white/90 border border-white/60 placeholder-slate-500" />
              <button className="h-12 rounded-lg px-6 bg-white text-slate-900 font-semibold hover:translate-y-[-1px] shadow-sm hover:shadow-md transition">Get the playbook</button>
            </form>
            <p className="mt-3 text-sm text-slate-300">No spam. 1-2 emails a month with tactics that actually work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;