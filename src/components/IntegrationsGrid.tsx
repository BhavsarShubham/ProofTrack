import React, { useState } from 'react';
import { 
  Network, 
  Database, 
  Server, 
  Layers, 
  Compass, 
  Radio, 
  Ship, 
  Anchor, 
  Cpu, 
  Activity, 
  Box, 
  FileCheck, 
  Navigation,
  ArrowRight
} from 'lucide-react';
import { integrationPartners } from '../data/mockData';

export const IntegrationsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'ERP & Core', 'TMS & Visibility', 'Carriers & Lines', 'IoT & Hardware'];

  const filteredPartners = selectedCategory === 'All'
    ? integrationPartners
    : integrationPartners.filter((p) => p.category === selectedCategory);

  const getPartnerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-teal-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-purple-400" />;
      case 'Ship': return <Ship className="w-5 h-5 text-cyan-400" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Box': return <Box className="w-5 h-5 text-amber-400" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-blue-400" />;
      default: return <Network className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="integrations" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>250+ ENTERPRISE INTEGRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seamless Plug & Play Connectivity
          </h2>
          <p className="text-slate-400 text-base mt-3">
            LogiPulse sits smoothly on top of your existing IT investments. Connect SAP, Oracle, Ocean Shipping Lines, and IoT trackers with zero rip-and-replace disruption.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPartners.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getPartnerIcon(p.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {p.latency}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white font-sans group-hover:text-blue-400 transition-colors">
                  {p.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  {p.type}
                </span>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-[10px] font-mono uppercase text-slate-500">{p.category}</span>
                <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-medium">
                  Active Sync
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">
              Have proprietary warehouse systems or custom legacy AS/400 mainframes?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Our Universal Connector bridges custom EDI 204/214/310 specs, AS2 gateways, and Kafka microservices in days.
            </p>
          </div>
          <a
            href="#pricing"
            className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/20"
          >
            <span>Explore Custom Connectors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
