import { Menu, Rocket, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-cyan-400 animate-pulse" />
          <span className="font-semibold text-slate-800 text-lg tracking-tight">Vibrant Agency</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#work" className="hover:text-slate-900 transition">Process</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:translate-y-[-1px] transition-all">
          <Phone size={18} />
          <span>Free Strategy Call</span>
        </a>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/70 border border-white/40 text-slate-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;