import { TrendingUp, Clock, DollarSign, Leaf } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '99.8%',
      label: 'On-Time In-Full (OTIF)',
      subtext: '+14% improvement over legacy TMS',
      accent: 'from-blue-500 to-cyan-400',
    },
    {
      icon: DollarSign,
      value: '$184M+',
      label: 'Demurrage & Spot Waste Saved',
      subtext: 'Across 14,000 global lanes',
      accent: 'from-emerald-400 to-teal-400',
    },
    {
      icon: Clock,
      value: '3.2 Mins',
      label: 'Disruption Resolution Time',
      subtext: 'vs. 48 hours industry manual triage',
      accent: 'from-amber-400 to-orange-400',
    },
    {
      icon: Leaf,
      value: '-42%',
      label: 'Carbon Intensity (Scope 3)',
      subtext: 'ISO 14083 certified multimodal routing',
      accent: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section className="relative py-12 border-y border-slate-800 bg-slate-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${m.accent} bg-opacity-10 text-white shadow-md`}>
                    <Icon className="w-5 h-5 text-slate-100" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    VERIFIED ROI
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-2">
                  {m.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {m.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
