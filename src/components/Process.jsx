const steps = [
  {
    k: '01',
    title: 'Discover',
    desc: 'Deep-dive into goals, audience, and constraints. We align on KPIs and success definitions.'
  },
  {
    k: '02',
    title: 'Design',
    desc: 'Messaging, creative, and experience architecture that set the foundation for scale.'
  },
  {
    k: '03',
    title: 'Deploy',
    desc: 'Launch with tracking dialed. Weekly sprints to test, learn, and compound wins.'
  }
]

function Process() {
  return (
    <section id="work" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How we work</h2>
          <p className="mt-3 text-slate-600">A simple, transparent cadence designed for outcomes.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.k} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-xs font-semibold text-slate-600">{s.k}</span>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process