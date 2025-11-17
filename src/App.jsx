import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Vibrant Agency. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex items-center gap-6">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#work" className="hover:text-slate-900">Process</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App