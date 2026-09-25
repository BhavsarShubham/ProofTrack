import { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Leaf, 
  Check, 
  Copy, 
  Terminal
} from 'lucide-react';
import { platformPillars } from '../data/mockData';

export const PlatformPillars: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(platformPillars[0].id);
  const [copied, setCopied] = useState(false);

  const pillar = platformPillars.find((p) => p.id === activePillarId) || platformPillars[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pillar.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'control-tower': return <Layers className="w-4 h-4" />;
      case 'ai-agents': return <Cpu className="w-4 h-4" />;
      case 'freight-auction': return <Zap className="w-4 h-4" />;
      case 'sustainability': return <Leaf className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="features" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTED FOR ENTERPRISE RESILIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Autonomous SCM Stack
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Engineered from the ground up to replace fragmented legacy TMS and ERP spreadsheets with proactive, AI-agentic intelligence.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {platformPillars.map((p) => {
            const isActive = p.id === activePillarId;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillarId(p.id)}
                className={`px-5 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {getPillarIcon(p.id)}
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Pillar Showcase Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold mb-3">
                {pillar.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {pillar.headline}
              </h3>
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {pillar.description}
              </p>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 my-6 pt-4 border-t border-slate-800">
                {pillar.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">{m.label}</span>
                    <span className="text-lg sm:text-xl font-bold font-mono text-white block mt-0.5">{m.value}</span>
                    <span className="text-[10px] font-mono text-cyan-400 block">{m.trend}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5">
                {pillar.bulletPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-1 rounded-full bg-blue-500/10 text-blue-400 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-300 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Developer & Telemetry Preview (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                {/* Code Window Header */}
                <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-mono text-xs text-slate-300 font-semibold">
                      {pillar.codeSnippetTitle}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Code Content */}
                <pre className="p-4 text-xs font-mono text-cyan-300/90 overflow-x-auto leading-relaxed whitespace-pre bg-slate-950">
                  <code>{pillar.codeSnippet}</code>
                </pre>

                <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SDK v3.8 • Typed TypeScript SDK
                  </span>
                  <a href="#integrations" className="text-blue-400 hover:text-blue-300 font-medium">
                    Docs & APIs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
