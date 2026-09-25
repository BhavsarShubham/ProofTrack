export type TransportMode = 'ocean' | 'air' | 'road' | 'rail' | 'cold-chain';

export type ShipmentStatus = 'on-schedule' | 'rerouted' | 'customs-hold' | 'critical-delay' | 'delivered';

export interface TelemetryData {
  temperature?: string;
  humidity?: string;
  vibration?: string;
  fuelEfficiency?: string;
  co2Saved?: string;
}

export interface Shipment {
  id: string;
  trackingCode: string;
  origin: {
    city: string;
    port: string;
    country: string;
    coordinates: [number, number]; // [x%, y%] for map placement
  };
  destination: {
    city: string;
    port: string;
    country: string;
    coordinates: [number, number];
  };
  mode: TransportMode;
  carrier: string;
  vesselOrFlight: string;
  cargo: string;
  containerCount: number;
  weightTons: number;
  eta: string;
  status: ShipmentStatus;
  progressPercent: number;
  telemetry: TelemetryData;
  aiActionNote?: string;
  riskScore: number; // 0-100
}

export interface DisruptionScenario {
  id: string;
  title: string;
  severity: 'Critical' | 'Severe' | 'Moderate';
  location: string;
  affectedLanes: string;
  delayWithoutAI: string;
  resolvedInWithAI: string;
  costSaved: string;
  carbonSaved: string;
  description: string;
  steps: {
    phase: string;
    timestamp: string;
    title: string;
    detail: string;
    status: 'completed' | 'active' | 'pending';
  }[];
}

export interface PillarFeature {
  id: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string; trend: string }[];
  bulletPoints: string[];
  codeSnippetTitle: string;
  codeSnippet: string;
}

export interface IntegrationPartner {
  name: string;
  category: 'ERP & Core' | 'TMS & Visibility' | 'Carriers & Lines' | 'IoT & Hardware';
  icon: string;
  type: string;
  latency: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  statNumber: string;
  statLabel: string;
}
