import { useState } from 'react';
import { 
  Bot, 
  AlertTriangle, 
  CheckCircle2, 
  Play, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { disruptionScenarios } from '../data/mockData';

export const DisruptionSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(disruptionScenarios[0].id);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationCompleted, setSimulationCompleted] = useState(false);

  const scenario = disruptionScenarios.find((s) => s.id === activeScenarioId) || disruptionScenarios[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationCompleted(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationCompleted(true);
    }, 1800);
  };

  return (
    <section id="disruptions" className="py-24 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>AGENTIC AUTONOMOUS SELF-HEALING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Watch the AI Disruption Resolver in Action
          </h2>
          <p className="text-slate-400 text-base mt-3">
            When maritime choke points, port strikes, or temperature excursions strike, human dispatchers take 48+ hours. LogiPulse evaluates multimodal solutions and executes mitigations in under 4 minutes.
          </p>
        </div>

        {/* Interactive Scenario Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {disruptionScenarios.map((scn) => {
            const isActive = scn.id === activeScenarioId;
            return (
              <button
                key={scn.id}
                onClick={() => {
                  setActiveScenarioId(scn.id);
                  setSimulationCompleted(false);
                }}
                className={`text-left p-5 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                    scn.severity === 'Critical' 
                      ? 'bg-red-500/15 text-red-400 border border-red-500/30' 
                      : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  }`}>
                    {scn.severity} Bottleneck
                  </span>
                  <span className="text-xs font-mono text-slate-500">ID: {scn.id.toUpperCase()}</span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-2">
                  {scn.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-1">
                  {scn.location}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Detailed Resolution Board */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />

          {/* Top Comparison Banner: Legacy TMS vs LogiPulse AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-red-500/20">
              <span className="text-xs text-red-400 font-mono flex items-center gap-1.5 uppercase">
                <AlertTriangle className="w-3.5 h-3.5" />
                Without Autonomous AI
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">
                {scenario.delayWithoutAI}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Stalled in terminal queues, compounding demurrage fees.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/50 to-cyan-950/40 border border-cyan-500/30">
              <span className="text-xs text-cyan-300 font-mono flex items-center gap-1.5 uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                LogiPulse Autonomous Fix
              </span>
              <p className="text-xl sm:text-2xl font-bold text-cyan-300 font-mono mt-1">
                {scenario.resolvedInWithAI}
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Self-healing reroute executed via alternate corridor.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20 flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-400 uppercase font-mono">Net Cost Preserved</span>
                  <p className="text-lg font-bold text-white font-mono">{scenario.costSaved}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-cyan-400 uppercase font-mono">CO2 Avoided</span>
                  <p className="text-lg font-bold text-cyan-300 font-mono">{scenario.carbonSaved}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                Live Resolution Orchestration Pipeline
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Affected Corridor: <span className="text-slate-200 font-semibold">{scenario.affectedLanes}</span>
              </p>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 self-start md:self-auto disabled:opacity-50 cursor-pointer"
            >
              {isSimulating ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Agent Evaluating Multimodal Matrix...</span>
                </>
              ) : simulationCompleted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Re-run Autonomous Simulation</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Autonomous AI Resolution</span>
                </>
              )}
            </button>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
            {scenario.steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  isSimulating && idx === 1
                    ? 'bg-blue-900/30 border-blue-500 animate-pulse'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">
                    {step.phase}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {step.timestamp}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-white mb-2 line-clamp-2">
                  {step.title}
                </h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Autonomous Verification Passed</span>
                </div>
              </div>
            ))}
          </div>

          {simulationCompleted && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulation Complete: Alternative slot locked with BNSF Rail. Customs amendment broadcasted to broker within 3.2 minutes.</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-300">
                100% SLA Maintained
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
