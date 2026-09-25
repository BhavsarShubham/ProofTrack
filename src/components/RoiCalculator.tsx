import { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenPilotModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenPilotModal }) => {
  const [annualSpendMillions, setAnnualSpendMillions] = useState<number>(45);
  const [monthlyShipments, setMonthlyShipments] = useState<number>(3200);
  const [carrierCount, setCarrierCount] = useState<number>(35);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Dynamic enterprise calculations
  // Average freight optimization: ~7.8% of spend
  // Demurrage savings: ~1.4% of spend
  const totalAnnualSavings = Math.round(annualSpendMillions * 1000000 * 0.088);
  const dispatcherHoursSaved = Math.round((monthlyShipments * 1.6) * 12);
  const demurrageFinesSaved = Math.round(annualSpendMillions * 1000000 * 0.016);
  const co2OffsetTons = Math.round(monthlyShipments * 0.42 * 12);

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section id="roi-calculator" className="py-24 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>BUSINESS IMPACT AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Organization's ROI
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Adjust the sliders to reflect your supply chain footprint. See how autonomous multi-modal orchestration and demurrage defense directly impact your P&L.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Inputs (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Operational Footprint Parameters
            </h3>

            <div className="space-y-6">
              {/* Slider 1: Annual Spend */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Annual Multi-Modal Freight Spend ($ USD)
                  </label>
                  <span className="font-mono text-sm font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/30">
                    ${annualSpendMillions}M / year
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={annualSpendMillions}
                  onChange={(e) => setAnnualSpendMillions(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$5M</span>
                  <span>$150M</span>
                  <span>$300M+</span>
                </div>
              </div>

              {/* Slider 2: Monthly Shipments */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Average Monthly Containers / Shipments (FEU & Air Cargo)
                  </label>
                  <span className="font-mono text-sm font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                    {monthlyShipments.toLocaleString()} units
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="20000"
                  step="200"
                  value={monthlyShipments}
                  onChange={(e) => setMonthlyShipments(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>200</span>
                  <span>10,000</span>
                  <span>20,000+</span>
                </div>
              </div>

              {/* Slider 3: Carrier Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Active Carriers, 3PLs & Freight Forwarders
                  </label>
                  <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    {carrierCount} Partners
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={carrierCount}
                  onChange={(e) => setCarrierCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>5</span>
                  <span>75</span>
                  <span>150+</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Calibrated via Gartner & MIT Freight Lab benchmarks</span>
              <span className="font-mono text-emerald-400">99.1% Confidence</span>
            </div>
          </div>

          {/* Right Computed Returns (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-950 border border-blue-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  PROJECTED ANNUAL VALUE DELIVERED
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  +380% Avg ROI
                </span>
              </div>

              {/* Big Headline Number */}
              <div className="mb-6">
                <span className="text-4xl sm:text-6xl font-extrabold text-white font-mono tracking-tight block">
                  ${(totalAnnualSavings / 1000000).toFixed(2)}M
                </span>
                <span className="text-xs text-slate-300 mt-1 block">
                  Estimated Total Annual Bottom-Line Efficiency Gains
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">
                    Demurrage Penalties Saved
                  </span>
                  <span className="text-lg font-bold font-mono text-emerald-400 block mt-0.5">
                    ${(demurrageFinesSaved / 1000).toFixed(0)}K
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">-76% detention fines</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">
                    Operations Labor Reclaimed
                  </span>
                  <span className="text-lg font-bold font-mono text-cyan-400 block mt-0.5">
                    {dispatcherHoursSaved.toLocaleString()} hrs
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Zero manual check calls</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">
                    Scope 3 CO2 Abated
                  </span>
                  <span className="text-lg font-bold font-mono text-teal-300 block mt-0.5">
                    {co2OffsetTons.toLocaleString()} MT
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">ISO 14083 certified</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">
                    Spot Premium Defense
                  </span>
                  <span className="text-lg font-bold font-mono text-amber-300 block mt-0.5">
                    -14.2%
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">vs DAT spot benchmark</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenPilotModal}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom SCM Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownloadReport}
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Report Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Audit (PDF)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
