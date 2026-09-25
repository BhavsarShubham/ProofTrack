import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { LiveControlTower } from './components/LiveControlTower';
import { DisruptionSimulator } from './components/DisruptionSimulator';
import { PlatformPillars } from './components/PlatformPillars';
import { RoiCalculator } from './components/RoiCalculator';
import { IntegrationsGrid } from './components/IntegrationsGrid';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { PilotModal } from './components/PilotModal';
import { Footer } from './components/Footer';

export function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  const handleOpenPilotModal = () => {
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  const handleExploreControlTower = () => {
    const el = document.getElementById('control-tower');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenPilotModal={handleOpenPilotModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenPilotModal={handleOpenPilotModal}
          onExploreControlTower={handleExploreControlTower}
        />

        {/* Live Metrics Counter Bar */}
        <MetricsBar />

        {/* Centerpiece: Interactive Autonomous Control Tower */}
        <LiveControlTower />

        {/* AI Autonomous Disruption Resolver Simulator */}
        <DisruptionSimulator />

        {/* Platform Technical Pillars */}
        <PlatformPillars />

        {/* Interactive Dynamic ROI Calculator */}
        <RoiCalculator onOpenPilotModal={handleOpenPilotModal} />

        {/* 250+ Enterprise Integrations Ecosystem */}
        <IntegrationsGrid />

        {/* Enterprise Testimonials & Social Proof */}
        <Testimonials />

        {/* Transparent Enterprise Pricing Plans */}
        <PricingSection onOpenPilotModal={handleOpenPilotModal} />
      </main>

      {/* Footer */}
      <Footer onOpenPilotModal={handleOpenPilotModal} />

      {/* Pilot Demonstration Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
      />
    </div>
  );
}

export default App;
