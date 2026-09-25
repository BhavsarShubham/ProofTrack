import { useState } from 'react';
import { 
  Boxes, 
  ArrowRight, 
  Send, 
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onOpenPilotModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPilotModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-20 pb-12 overflow-hidden">
      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-cyan-900/40 border border-blue-500/40 shadow-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/20 inline-block mb-3">
                DEPLOY AUTONOMOUS ORCHESTRATION
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to stop firefighting and start predicting?
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Connect your first 5 corridors in less than 48 hours. Zero setup friction, full bi-directional ERP integration, and instant autonomous bottleneck recovery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                id="footer-request-pilot-btn"
                onClick={onOpenPilotModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Executive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#control-tower"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition-colors flex items-center justify-center cursor-pointer"
              >
                <span>Explore Live Grid</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Info & Newsletter (Col 1 & 2 on mobile) */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Boxes className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight font-sans">
                Logi<span className="text-cyan-400">Pulse</span> AI
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              The autonomous supply chain operating system. Unifying multi-modal telematics, digital twin visibility, and generative AI disruption recovery for modern global enterprises.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="max-w-sm">
              <span className="text-[11px] font-mono text-slate-300 block mb-2 font-medium">
                Subscribe to Global Freight Telematics Weekly
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="executive@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 mt-1.5">
                  <CheckCircle2 className="w-3 h-3" /> Subscribed to weekly intelligence briefs!
                </span>
              )}
            </form>
          </div>

          {/* Nav Column 1: Platform */}
          <div>
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block mb-4">
              Platform
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#control-tower" className="hover:text-cyan-400 transition-colors">Digital Twin Control Tower</a></li>
              <li><a href="#disruptions" className="hover:text-cyan-400 transition-colors">AI Disruption Resolver</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Dynamic Spot Freight TMS</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Scope 3 Carbon (ISO 14083)</a></li>
              <li><a href="#control-tower" className="hover:text-cyan-400 transition-colors">Cold-Chain Cryo-Telematics</a></li>
              <li><a href="#integrations" className="hover:text-cyan-400 transition-colors">Universal ERP Connector</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Solutions */}
          <div>
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block mb-4">
              Solutions
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">Automotive & EV Corridors</a></li>
              <li><a href="#control-tower" className="hover:text-cyan-400 transition-colors">Pharma & Life Sciences</a></li>
              <li><a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">High-Tech & Semiconductors</a></li>
              <li><a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">Retail & FMCG Omnichannel</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Global Freight Forwarders</a></li>
              <li><a href="#roi-calculator" className="hover:text-cyan-400 transition-colors">Cold-Chain Compliance</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Trust & Compliance */}
          <div>
            <span className="text-xs uppercase font-mono text-white font-bold tracking-wider block mb-4">
              Trust & System
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">SOC 2 Type II Security</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">ISO 27001 Certified</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">FedRAMP Readiness</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">GLEC Carbon Framework</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Enterprise SLA Guarantee</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Privacy & GDPR Shield</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: System Pulse & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-emerald-400">All Global Control Nodes Operational (99.99%)</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 LogiPulse AI Technologies Inc. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors" aria-label="X / Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 0 0 1.59-1.59c0-.88-.71-1.59-1.59-1.59a1.59 1.59 0 0 0-1.59 1.59c0 .88.71 1.59 1.59 1.59m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
