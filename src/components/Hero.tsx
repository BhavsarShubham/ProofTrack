import { 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Bot, 
  Zap, 
  Anchor, 
  Plane, 
  Truck,
  Boxes
} from 'lucide-react';

interface HeroProps {
  onOpenPilotModal: () => void;
  onExploreControlTower: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPilotModal, onExploreControlTower }) => {
  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-radial-glow">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs text-slate-300 shadow-lg shadow-blue-950/30 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-cyan-300">LogiPulse 3.0 Platform:</span>
            <span>Autonomous Multi-Modal Rerouting & Digital Twin Engine</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400 ml-1" />
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Predict disruptions.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              Orchestrate freight.
            </span>{' '}
            Accelerate global commerce.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            The autonomous supply chain operating system unifying multi-modal logistics, warehouse intelligence, real-time freight telematics, and agentic risk mitigation in one living digital twin.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              id="hero-launch-control-tower-btn"
              onClick={onExploreControlTower}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Live Control Tower</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-schedule-pilot-btn"
              onClick={onOpenPilotModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 shadow-md backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Schedule Executive Demo</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 14083 & GLEC Scope 3 Certified</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Sub-3-minute Autonomous Disruption Recovery</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>12,000+ Verified Ocean & Fleet Carriers</span>
            </div>
          </div>
        </div>

        {/* High-Impact Visual / Holographic Control Center Demo Card */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Outer glow ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 rounded-3xl blur-lg opacity-35 group-hover:opacity-60 transition duration-1000"></div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 bg-slate-900/95 shadow-2xl">
            {/* Window title bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline">
                  logipulse-global-control-tower.live — Digital Twin Engine
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  FEED SYNCHRONIZED
                </span>
                <span className="text-xs text-slate-400 font-mono hidden md:inline">Latency: 42ms</span>
              </div>
            </div>

            {/* Visual Canvas with Generated Image & Interactive Overlays */}
            <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <img
                src="/images/supply_chain_hero.jpg"
                alt="LogiPulse Autonomous Global Supply Chain Digital Twin Visualization"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                loading="eager"
              />

              {/* Dark subtle gradient overlay to enhance text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Dynamic Hologram Card 1: Autonomous Reroute */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs p-3 sm:p-4 rounded-xl glass-panel border border-cyan-500/30 shadow-2xl backdrop-blur-xl animate-float">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30 font-semibold">
                    <Bot className="w-3 h-3" />
                    AGENT DISRUPTION TRIAGE
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">12s ago</span>
                </div>
                <p className="text-xs font-semibold text-white">
                  Port Congestion at Long Beach Berth 400
                </p>
                <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                  Autonomous agent reallocated 420 FEU containers to Tacoma Intermodal.
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono pt-2 border-t border-white/10 text-emerald-400">
                  <span>Downtime Saved: 8.5 Days</span>
                  <span className="font-bold">+$184K ROI</span>
                </div>
              </div>

              {/* Floating Dynamic Hologram Card 2: Cold-Chain Telemetry */}
              <div className="hidden sm:block absolute bottom-6 right-6 max-w-xs p-4 rounded-xl glass-panel border border-blue-500/30 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30 font-semibold">
                    <Plane className="w-3 h-3" />
                    LH-8220 BIOLOGICS AIR-CARGO
                  </span>
                  <span className="text-emerald-400 text-xs font-bold font-mono">99.9% SAFE</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-left mt-2">
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase font-mono">Core Temp</span>
                    <span className="text-xs font-bold text-white font-mono">4.2°C (Cryo)</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                    <span className="text-[9px] text-slate-400 block uppercase font-mono">Vibration G-Force</span>
                    <span className="text-xs font-bold text-cyan-300 font-mono">0.04g (Stable)</span>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-slate-300 flex items-center justify-between">
                  <span>ETA O'Hare Hub: 21:15 UTC</span>
                  <span className="text-blue-400 font-mono font-medium">FDA 21-CFR-11</span>
                </div>
              </div>

              {/* Interactive Quick Bar at bottom of graphic */}
              <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-2">
                <div className="glass-panel px-3 py-1.5 rounded-lg border border-slate-700/80 text-xs text-slate-200 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs">Vessels: 4,890</span>
                  <span className="text-slate-500">|</span>
                  <span className="font-mono text-xs">Air Freighters: 1,240</span>
                  <span className="text-slate-500">|</span>
                  <span className="font-mono text-xs">Smart Fleet: 8,762</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Logos / Proof Row */}
        <div className="mt-20 border-t border-slate-800/80 pt-10 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-8">
            Powering Mission-Critical Freight Operations for Global Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-300 hover:text-white transition-colors">
              <Anchor className="w-5 h-5 text-blue-400" />
              <span>NORDIC OCEANS</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg text-slate-300 hover:text-white transition-colors">
              <Plane className="w-5 h-5 text-cyan-400" />
              <span>AERO-CARGO INTL</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg text-slate-300 hover:text-white transition-colors">
              <Truck className="w-5 h-5 text-indigo-400" />
              <span>APEX INTERMODAL</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg text-slate-300 hover:text-white transition-colors">
              <Boxes className="w-5 h-5 text-amber-400" />
              <span>GLOBAL SUPPLY CO</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-lg text-slate-300 hover:text-white transition-colors">
              <Globe2 className="w-5 h-5 text-emerald-400" />
              <span>TRANS-EURASIA GRID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
