import { useState } from 'react';
import { X, CheckCircle2, Bot, ArrowRight, ShieldCheck, Building, Mail, User } from 'lucide-react';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: 'VP / Director of Supply Chain',
    monthlyVolume: '2,500 - 10,000 Shipments',
    primaryGoal: 'Autonomous Disruption Mitigation & Auto-Reroute',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 blur-[60px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-cyan-400">
                <Bot className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">
                VIP Enterprise Sandbox
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Schedule Your Executive Demo & Corridor Audit
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Experience your exact shipping lanes loaded into our Digital Twin with autonomous disruption resolution.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="sarah@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Global Logistics Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>VP / Director of Supply Chain</option>
                    <option>Head of Global Logistics & Freight</option>
                    <option>Chief Operating Officer (COO)</option>
                    <option>Procurement & Carrier Manager</option>
                    <option>Enterprise IT / SCM Architect</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Monthly Shipment Volume
                  </label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>&lt; 500 Shipments / mo</option>
                    <option>500 - 2,500 Shipments / mo</option>
                    <option>2,500 - 10,000 Shipments / mo</option>
                    <option>10,000+ Shipments / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Strategic Objective
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option>Autonomous Disruption Mitigation & Auto-Reroute</option>
                  <option>Demurrage & Detention Fine Reduction</option>
                  <option>Real-Time Cold-Chain IoT Visibility</option>
                  <option>Scope 3 Carbon Tracking (ISO 14083)</option>
                  <option>Dynamic Spot Freight Auctioning & TMS</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Allocating Dedicated Demo Environment...</span>
                  ) : (
                    <>
                      <span>Confirm 1-on-1 Walkthrough</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDA & Enterprise data privacy protected under ISO 27001.</span>
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Demonstration Environment Confirmed!
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A Principal Logistics Architect will reach out to <span className="text-cyan-300 font-mono">{formData.email}</span> within 2 hours with custom test corridors for <span className="text-white font-semibold">{formData.company}</span>.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs font-mono text-slate-400 space-y-1">
              <div>• Tenant Environment: sandbox-{formData.company.toLowerCase().replace(/\s+/g, '-')}.logipulse.ai</div>
              <div>• Initialized Core: Autonomous SCM Agent Grid v3.8</div>
              <div>• Priority Lane Audit: {formData.primaryGoal}</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Return to Platform Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
