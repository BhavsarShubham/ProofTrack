import { useState } from 'react';
import { 
  Ship, 
  Plane, 
  Truck, 
  Boxes, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Thermometer, 
  Compass, 
  FileText, 
  RotateCcw,
  Zap
} from 'lucide-react';
import { liveShipments } from '../data/mockData';
import type { Shipment, TransportMode } from '../types';

export const LiveControlTower: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShipment, setSelectedShipment] = useState<Shipment>(liveShipments[0]);
  const [activeActionNotification, setActiveActionNotification] = useState<string | null>(null);

  // Filter shipments
  const filteredShipments = liveShipments.filter((s) => {
    const matchesMode = selectedMode === 'all' || s.mode === selectedMode;
    const matchesSearch = 
      s.trackingCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.origin.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.destination.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.cargo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.carrier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMode && matchesSearch;
  });

  const handleSimulateAction = (actionName: string) => {
    setActiveActionNotification(`Triggered: ${actionName} for shipment ${selectedShipment.trackingCode}`);
    setTimeout(() => {
      setActiveActionNotification(null);
    }, 4000);
  };

  const getModeIcon = (mode: TransportMode) => {
    switch (mode) {
      case 'ocean': return <Ship className="w-4 h-4 text-cyan-400" />;
      case 'air': return <Plane className="w-4 h-4 text-blue-400" />;
      case 'road': return <Truck className="w-4 h-4 text-emerald-400" />;
      case 'cold-chain': return <Thermometer className="w-4 h-4 text-purple-400" />;
      default: return <Boxes className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'on-schedule':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            ON SCHEDULE
          </span>
        );
      case 'rerouted':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            AUTONOMOUS REROUTE
          </span>
        );
      case 'customs-hold':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            CUSTOMS CLEARING
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
            IN TRANSIT
          </span>
        );
    }
  };

  return (
    <section id="control-tower" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE DIGITAL TWIN ORCHESTRATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Autonomous Control Tower
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-3">
              Experience real-time telematics ingestion across international sea lanes, air-cargo routes, and smart truckload corridors. Click any shipment to inspect AI telemetry and execute live autonomous mitigations.
            </p>
          </div>

          {/* Quick status counter */}
          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl shadow-lg">
            <div className="flex flex-col px-3 border-r border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">Total Synced</span>
              <span className="text-lg font-bold text-white font-mono">14,892</span>
            </div>
            <div className="flex flex-col px-3 border-r border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400">On Time</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">99.4%</span>
            </div>
            <div className="flex flex-col px-3">
              <span className="text-[10px] uppercase font-mono text-slate-400">Auto-Reroutes</span>
              <span className="text-lg font-bold text-cyan-400 font-mono">124</span>
            </div>
          </div>
        </div>

        {/* Action feedback toast */}
        {activeActionNotification && (
          <div className="mb-6 p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-xs flex items-center justify-between shadow-xl animate-fade-in">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{activeActionNotification}</span>
            </div>
            <span className="text-[10px] font-mono bg-cyan-900/60 px-2 py-0.5 rounded text-cyan-300">
              Success
            </span>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          {/* Mode Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'All Modes', count: liveShipments.length },
              { id: 'ocean', label: 'Ocean Freight', icon: Ship },
              { id: 'air', label: 'Air Cargo', icon: Plane },
              { id: 'road', label: 'Fleet / Road', icon: Truck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedMode(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  selectedMode === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by code, city, carrier..."
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Main Grid: Left Interactive Map & Shipment Table / Right Telemetry Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map + Active Shipments (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive World Map Grid Visualizer */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                    Global Multi-Modal Corridor Mesh
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Click any active node to inspect
                </span>
              </div>

              {/* Vector SVG World Map with dynamic lanes and pinging nodes */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 rounded-xl border border-slate-800/80 overflow-hidden p-2">
                {/* Subtle map coordinate grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />

                <svg className="w-full h-full" viewBox="0 0 100 60" fill="none">
                  {/* Continental rough backdrop lines */}
                  <path
                    d="M 12,18 Q 20,15 30,22 Q 26,38 18,48 Q 10,35 12,18 Z"
                    fill="rgba(30, 41, 59, 0.4)"
                    stroke="rgba(71, 85, 105, 0.3)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M 45,15 Q 56,12 60,25 Q 52,42 46,55 Q 40,35 45,15 Z"
                    fill="rgba(30, 41, 59, 0.4)"
                    stroke="rgba(71, 85, 105, 0.3)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M 64,18 Q 85,15 90,32 Q 80,48 68,45 Q 60,30 64,18 Z"
                    fill="rgba(30, 41, 59, 0.4)"
                    stroke="rgba(71, 85, 105, 0.3)"
                    strokeWidth="0.5"
                  />

                  {/* Dynamic Glowing Shipping Lanes */}
                  {/* Lane 1: Shanghai -> Los Angeles (Transpacific) */}
                  <path
                    d="M 76,42 Q 45,10 18,38"
                    stroke={selectedShipment.id === 'SHP-8921' ? '#38bdf8' : 'rgba(56, 189, 248, 0.3)'}
                    strokeWidth={selectedShipment.id === 'SHP-8921' ? '1.2' : '0.6'}
                    strokeDasharray="2,1"
                    className="transition-all duration-300"
                  />
                  {/* Lane 2: Singapore -> Rotterdam (Eurasia via Cape) */}
                  <path
                    d="M 72,54 Q 60,65 48,28"
                    stroke={selectedShipment.id === 'SHP-9043' ? '#22d3ee' : 'rgba(34, 211, 238, 0.3)'}
                    strokeWidth={selectedShipment.id === 'SHP-9043' ? '1.2' : '0.6'}
                    strokeDasharray="2,1"
                  />
                  {/* Lane 3: Frankfurt -> Chicago (Transatlantic Air) */}
                  <path
                    d="M 50,29 Q 36,22 24,34"
                    stroke={selectedShipment.id === 'SHP-7712' ? '#818cf8' : 'rgba(129, 140, 248, 0.3)'}
                    strokeWidth={selectedShipment.id === 'SHP-7712' ? '1.2' : '0.6'}
                    strokeDasharray="1.5,1.5"
                  />
                  {/* Lane 4: Queretaro -> Detroit (Road Freight) */}
                  <path
                    d="M 20,44 L 26,33"
                    stroke={selectedShipment.id === 'SHP-6320' ? '#34d399' : 'rgba(52, 211, 153, 0.3)'}
                    strokeWidth={selectedShipment.id === 'SHP-6320' ? '1.2' : '0.6'}
                  />
                  {/* Lane 5: Tokyo -> Dubai */}
                  <path
                    d="M 84,38 Q 72,36 61,41"
                    stroke={selectedShipment.id === 'SHP-5198' ? '#fbbf24' : 'rgba(251, 191, 36, 0.3)'}
                    strokeWidth={selectedShipment.id === 'SHP-5198' ? '1.2' : '0.6'}
                  />

                  {/* Pulsing Port / Cargo Nodes */}
                  {liveShipments.map((shp) => {
                    const isSelected = selectedShipment.id === shp.id;
                    return (
                      <g 
                        key={shp.id} 
                        onClick={() => setSelectedShipment(shp)}
                        className="cursor-pointer group"
                      >
                        {/* Origin Node */}
                        <circle
                          cx={shp.origin.coordinates[0]}
                          cy={shp.origin.coordinates[1]}
                          r={isSelected ? 2.5 : 1.5}
                          fill={isSelected ? '#38bdf8' : '#64748b'}
                          className="transition-all duration-300"
                        />
                        {/* Destination Node */}
                        <circle
                          cx={shp.destination.coordinates[0]}
                          cy={shp.destination.coordinates[1]}
                          r={isSelected ? 2.5 : 1.5}
                          fill={isSelected ? '#22d3ee' : '#64748b'}
                        />

                        {isSelected && (
                          <circle
                            cx={shp.origin.coordinates[0]}
                            cy={shp.origin.coordinates[1]}
                            r={4}
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="0.5"
                            className="animate-ping origin-center"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Map Floating HUD Info */}
                <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-800 rounded-lg px-2.5 py-1 text-[10px] font-mono text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Selected Lane: {selectedShipment.origin.city} → {selectedShipment.destination.city}</span>
                </div>
              </div>
            </div>

            {/* Shipment Selection List */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                  Live Multimodal Manifest ({filteredShipments.length} Active)
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Sorted by Priority Risk Score
                </span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {filteredShipments.map((shp) => {
                  const isSelected = selectedShipment.id === shp.id;
                  return (
                    <div
                      key={shp.id}
                      onClick={() => setSelectedShipment(shp)}
                      className={`p-4 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-blue-950/40 border-l-4 border-blue-500' 
                          : 'hover:bg-slate-800/40 border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                          {getModeIcon(shp.mode)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-white">
                              {shp.trackingCode}
                            </span>
                            {getStatusBadge(shp.status)}
                          </div>
                          <p className="text-xs text-slate-300 font-medium mt-1">
                            {shp.origin.city} ({shp.origin.country}) → {shp.destination.city} ({shp.destination.country})
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            {shp.carrier} • {shp.cargo}
                          </p>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800 text-right">
                        <span className="text-xs font-mono text-white font-semibold">
                          ETA: {shp.eta}
                        </span>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[10px] text-slate-400">Transit:</span>
                          <span className="text-[10px] font-mono font-bold text-cyan-400">
                            {shp.progressPercent}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Deep Telemetry Inspector & AI Autonomous Action Engine (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <Activity className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400">TELEMETRY INSPECTOR</span>
                    <h3 className="text-sm font-bold text-white font-mono">{selectedShipment.trackingCode}</h3>
                  </div>
                </div>
                {getStatusBadge(selectedShipment.status)}
              </div>

              {/* Progress & Milestone */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400">Route Progress</span>
                  <span className="font-mono font-bold text-cyan-400">{selectedShipment.progressPercent}% Completed</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${selectedShipment.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Origin / Destination Details Card */}
              <div className="mt-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Origin Terminal</span>
                  <p className="text-xs font-semibold text-white mt-0.5">{selectedShipment.origin.city}</p>
                  <p className="text-[11px] text-slate-400 truncate">{selectedShipment.origin.port}</p>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Destination Terminal</span>
                  <p className="text-xs font-semibold text-white mt-0.5">{selectedShipment.destination.city}</p>
                  <p className="text-[11px] text-slate-400 truncate">{selectedShipment.destination.port}</p>
                </div>
              </div>

              {/* Cargo & Vessel Specs */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[9px] uppercase font-mono text-slate-400 block">Vessel/Flight</span>
                  <span className="text-xs font-semibold text-slate-200 truncate block mt-0.5">{selectedShipment.vesselOrFlight}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[9px] uppercase font-mono text-slate-400 block">Volume</span>
                  <span className="text-xs font-semibold text-slate-200 block mt-0.5">{selectedShipment.containerCount} Units</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[9px] uppercase font-mono text-slate-400 block">Payload</span>
                  <span className="text-xs font-semibold text-slate-200 block mt-0.5">{selectedShipment.weightTons} Tons</span>
                </div>
              </div>

              {/* IoT Live Sensor Telemetry */}
              <div className="mt-5">
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-2.5 block">
                  IoT Sensor Stream
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {selectedShipment.telemetry.temperature && (
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                        Temperature
                      </span>
                      <span className="font-mono text-xs font-bold text-white">
                        {selectedShipment.telemetry.temperature}
                      </span>
                    </div>
                  )}

                  {selectedShipment.telemetry.fuelEfficiency && (
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        Efficiency
                      </span>
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        {selectedShipment.telemetry.fuelEfficiency}
                      </span>
                    </div>
                  )}

                  {selectedShipment.telemetry.co2Saved && (
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        CO2 Avoided
                      </span>
                      <span className="font-mono text-xs font-bold text-cyan-400">
                        {selectedShipment.telemetry.co2Saved}
                      </span>
                    </div>
                  )}

                  {selectedShipment.telemetry.humidity && (
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Humidity</span>
                      <span className="font-mono text-xs font-bold text-slate-200">
                        {selectedShipment.telemetry.humidity}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Autonomous Decision Log */}
              {selectedShipment.aiActionNote && (
                <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-blue-950/60 to-cyan-950/40 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-bold text-white font-mono">
                      LogiPulse Autonomous Decision Note
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedShipment.aiActionNote}
                  </p>
                </div>
              )}

              {/* Action Buttons to interact directly */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => handleSimulateAction('Autonomous Weather & Berth Re-Optimization')}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Execute AI Dynamic Reroute Simulation</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSimulateAction('Cryptographic e-Bill of Lading Exported')}
                    className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>Export eBL Docket</span>
                  </button>
                  <button
                    onClick={() => handleSimulateAction('Customs Automated Clearance Re-Check')}
                    className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verify Customs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
