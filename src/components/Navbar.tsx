import { useState, useEffect } from 'react';
import { 
  Boxes, 
  ChevronRight, 
  Menu, 
  X, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenPilotModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPilotModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Control Tower', href: '#control-tower' },
    { name: 'Disruption Resolver', href: '#disruptions' },
    { name: 'Platform Pillars', href: '#features' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      {/* Top System Health Notification Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-emerald-400 font-medium">LIVE TELEMETRY:</span>
            <span>14,892 Multimodal Shipments Synced across 840 Global Ports</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>SOC2 Type II & FedRAMP In Compliance</span>
            </span>
            <span className="h-3 w-px bg-slate-700" />
            <a 
              href="#disruptions" 
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors"
            >
              <span>Explore AI Autonomous Rerouting</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-blue-950/20 py-3' 
            : 'bg-transparent border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Boxes className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white font-sans">
                    Logi<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pulse</span>
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 font-semibold tracking-wider">
                    AI 3.0
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                  Autonomous SCM Grid
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button 
                onClick={onOpenPilotModal}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
              >
                Sign In
              </button>

              <button
                id="header-request-pilot-btn"
                onClick={onOpenPilotModal}
                className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-slate-950 hover:bg-slate-900 transition-colors text-white font-medium">
                  <span>Schedule Enterprise Pilot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-2 backdrop-blur-2xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPilotModal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Request Live Demonstration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
