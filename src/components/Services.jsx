import { Megaphone, Code2, LineChart } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Ads Management',
    desc: 'Full-funnel campaigns across Meta, Google, and LinkedIn tuned for ROAS and velocity.',
    points: ['Creative testing system', 'Offer + landing alignment', 'Daily optimization cadence']
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, modern sites engineered for conversion and brand credibility.',
    points: ['Next.js + React builds', 'Design systems + CMS', 'Speed and SEO scoring 95+']
  },
  {
    icon: LineChart,
    title: 'Tracking & Analytics',
    desc: 'Clean, reliable data pipelines so you can measure, learn, and scale with confidence.',
    points: ['GA4 + Server-side tagging', 'Attribution models', 'Dashboarding + alerts']
  }
]

function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Three pillars that compound results.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-cyan-400 text-white flex items-center justify-center">
                <s.icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services