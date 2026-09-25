import { Quote, Star, Award } from 'lucide-react';
import { testimonials } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ENTERPRISE PROVEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by the Architects of Global Commerce
          </h2>
          <p className="text-slate-400 text-base mt-3">
            See how multinational manufacturers, pharmaceutical distributors, and ocean forwarders conquer volatility with LogiPulse.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-white">{t.author}</h3>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                    <p className="text-[10px] text-blue-400 font-medium">{t.company}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg font-bold font-mono text-cyan-400 block">{t.statNumber}</span>
                  <span className="text-[9px] uppercase font-mono text-slate-400 block">{t.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
