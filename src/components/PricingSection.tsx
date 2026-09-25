import { useState } from 'react';
import { Check, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

interface PricingProps {
  onOpenPilotModal: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenPilotModal }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>TRANSPARENT ENTERPRISE LICENSING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Tiers for Global Operations
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Scale from basic visibility to full agentic autonomous self-healing. Every plan includes guaranteed SLA uptime, dedicated data isolation, and continuous AI updates.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-mono bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-blue-950/60 to-slate-900/90 border-2 border-cyan-500 shadow-2xl shadow-cyan-950/50 -translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-extrabold uppercase font-mono shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs font-mono text-slate-400">/ month</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                      {isAnnual ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Billed month-to-month'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] uppercase font-mono text-slate-400 font-semibold block">
                      Capabilities Included:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className={`p-0.5 rounded-full mt-0.5 ${
                          isPopular ? 'text-cyan-400' : 'text-blue-400'
                        }`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenPilotModal}
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Security & Compliance Guarantee */}
        <div className="mt-16 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            SOC 2 Type II Certified
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            ISO 27001 & GDPR Compliant
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            99.99% Guaranteed SLA Uptime
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Dedicated Tenant Data Isolation
          </span>
        </div>
      </div>
    </section>
  );
};
