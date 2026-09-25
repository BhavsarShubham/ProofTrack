import type { Shipment, DisruptionScenario, PillarFeature, IntegrationPartner, PricingPlan, Testimonial } from '../types';

export const liveShipments: Shipment[] = [
  {
    id: 'SHP-8921',
    trackingCode: 'LPX-CN-SHA-LAX-89',
    origin: {
      city: 'Shanghai',
      port: 'Yangshan Deep-Water Port',
      country: 'CN',
      coordinates: [76, 42],
    },
    destination: {
      city: 'Los Angeles',
      port: 'Port of Long Beach',
      country: 'US',
      coordinates: [18, 38],
    },
    mode: 'ocean',
    carrier: 'Maersk Triple-E Class',
    vesselOrFlight: 'MV Nordic Horizon',
    cargo: 'Lithium Battery Modules & EV Inverters',
    containerCount: 420,
    weightTons: 8400,
    eta: 'Oct 02, 14:30 UTC',
    status: 'on-schedule',
    progressPercent: 68,
    telemetry: {
      temperature: '21.4°C (Safe band)',
      humidity: '48%',
      fuelEfficiency: '+14% Eco-Speed Optim',
      co2Saved: '320 MT',
    },
    aiActionNote: 'Auto-trimmed route based on NOAA North Pacific wave telemetry. Saved 18 hours.',
    riskScore: 8,
  },
  {
    id: 'SHP-9043',
    trackingCode: 'LPX-SGP-ROT-104',
    origin: {
      city: 'Singapore',
      port: 'Jurong Port Terminal',
      country: 'SG',
      coordinates: [72, 54],
    },
    destination: {
      city: 'Rotterdam',
      port: 'Euromax Gateway',
      country: 'NL',
      coordinates: [48, 28],
    },
    mode: 'ocean',
    carrier: 'CMA CGM Jacques Saadé',
    vesselOrFlight: 'CMA CGM Palais',
    cargo: 'Critical Precision Robotics & Microcontrollers',
    containerCount: 260,
    weightTons: 5200,
    eta: 'Oct 08, 09:00 UTC',
    status: 'rerouted',
    progressPercent: 44,
    telemetry: {
      temperature: '19.8°C',
      humidity: '52%',
      fuelEfficiency: '+8% LNG Dual-Fuel',
      co2Saved: '410 MT',
    },
    aiActionNote: 'Autonomous AI rerouting around Bab-el-Mandeb risk zone via Cape of Good Hope. Avoided 11-day standoff.',
    riskScore: 24,
  },
  {
    id: 'SHP-7712',
    trackingCode: 'LPX-FRA-ORD-44',
    origin: {
      city: 'Frankfurt',
      port: 'CargoCity South FRA',
      country: 'DE',
      coordinates: [50, 29],
    },
    destination: {
      city: 'Chicago',
      port: "O'Hare Int'l Cargo Hub",
      country: 'US',
      coordinates: [24, 34],
    },
    mode: 'air',
    carrier: 'Lufthansa Cargo B777F',
    vesselOrFlight: 'LH 8220 Heavy',
    cargo: 'Temperature-Sensitive Oncology Biologics',
    containerCount: 8,
    weightTons: 64,
    eta: 'Today, 21:15 UTC',
    status: 'on-schedule',
    progressPercent: 82,
    telemetry: {
      temperature: '4.2°C (Cryo-monitored)',
      humidity: '35%',
      vibration: '0.04g (Ultra-stable)',
      co2Saved: '18 MT via SAF Blend',
    },
    aiActionNote: 'FAA expedited gate slot booked autonomously. Cold-chain chain of custody verified on cryptographic ledger.',
    riskScore: 3,
  },
  {
    id: 'SHP-6320',
    trackingCode: 'LPX-QRO-DTW-18',
    origin: {
      city: 'Querétaro',
      port: 'Bajío Logistics Corridor',
      country: 'MX',
      coordinates: [20, 44],
    },
    destination: {
      city: 'Detroit',
      port: 'Automotive Mega-Hub',
      country: 'US',
      coordinates: [26, 33],
    },
    mode: 'road',
    carrier: 'Knight-Swift Smart Fleet',
    vesselOrFlight: 'Autonomous Unit #KW-709',
    cargo: 'Tier-1 Powertrain Wire Harness Assemblies',
    containerCount: 14,
    weightTons: 190,
    eta: 'Tomorrow, 06:40 UTC',
    status: 'on-schedule',
    progressPercent: 55,
    telemetry: {
      fuelEfficiency: '8.4 MPG (Class 8 Hybrid)',
      temperature: '22.0°C',
      vibration: '0.12g',
    },
    aiActionNote: 'C-TPAT FAST lane pre-dispatch approval granted. Laredo border bottleneck bypassed.',
    riskScore: 12,
  },
  {
    id: 'SHP-5198',
    trackingCode: 'LPX-TYO-DXB-92',
    origin: {
      city: 'Tokyo',
      port: 'Yokohama Port',
      country: 'JP',
      coordinates: [84, 38],
    },
    destination: {
      city: 'Dubai',
      port: 'Jebel Ali Logistics Hub',
      country: 'AE',
      coordinates: [61, 41],
    },
    mode: 'ocean',
    carrier: 'ONE Network Express',
    vesselOrFlight: 'ONE Apus Sister',
    cargo: 'Consumer Electronics & Solid State Drives',
    containerCount: 310,
    weightTons: 4900,
    eta: 'Oct 05, 11:20 UTC',
    status: 'on-schedule',
    progressPercent: 61,
    telemetry: {
      temperature: '23.1°C',
      humidity: '44%',
      fuelEfficiency: '+11% route trimmed',
    },
    aiActionNote: 'Bunker fuel optimization engaged. Real-time typhoon bypass active.',
    riskScore: 15,
  },
];

export const disruptionScenarios: DisruptionScenario[] = [
  {
    id: 'scn-1',
    title: 'Long Beach Terminal Berth Congestion & Crane Outage',
    severity: 'Critical',
    location: 'Port of Long Beach / LA Pier 400',
    affectedLanes: 'Transpacific Eastbound (Asia → US West Coast)',
    delayWithoutAI: '12.4 Days average dwell',
    resolvedInWithAI: '3.2 Minutes (Autonomous Divert)',
    costSaved: '$184,000 demurrage per shipment',
    carbonSaved: '220 MT CO2',
    description: 'Unplanned crane mechanical failure coupled with unexpected railhead container accumulation creates severe berth queuing.',
    steps: [
      {
        phase: 'Step 1: Detection',
        timestamp: '11:02:14 UTC',
        title: 'Satellite Synthetic Aperture Radar & Port Queue Spike Alert',
        detail: 'AI ingests terminal AIS signals & crane cycle velocity, detecting impending 14-ship anchorage queue 72 hours before carrier bulletin.',
        status: 'completed',
      },
      {
        phase: 'Step 2: Simulation',
        timestamp: '11:02:45 UTC',
        title: 'Generative Digital Twin Evaluates 6 Multimodal Alternatives',
        detail: 'Simulates Oakland diversion vs. Port of Tacoma rail intermodal vs. air-bridging critical stock. Tacoma intermodal selected with 98.6% confidence.',
        status: 'completed',
      },
      {
        phase: 'Step 3: Execution',
        timestamp: '11:03:30 UTC',
        title: 'Autonomous Carrier Spot Booking & BNSF Rail Allocation',
        detail: 'Smart agent locks slot with BNSF intermodal ramp and dispatches automated electronic amendment to customs broker.',
        status: 'completed',
      },
      {
        phase: 'Step 4: Stakeholder Sync',
        timestamp: '11:05:00 UTC',
        title: 'Real-Time ERP Synced & Factory Production Preserved',
        detail: 'SAP S/4HANA production plan adjusted dynamically without plant shutdown.',
        status: 'completed',
      },
    ],
  },
  {
    id: 'scn-2',
    title: 'Red Sea & Suez Canal Geopolitical Transit Exclusion',
    severity: 'Severe',
    location: 'Bab-el-Mandeb Strait & Gulf of Aden',
    affectedLanes: 'Asia → Europe & Mediterranean maritime corridors',
    delayWithoutAI: '16.8 Days stranded + $4,500/FEU war surcharge',
    resolvedInWithAI: 'Immediate auto-reroute via Good Hope',
    costSaved: '$620,000 across fleet batch',
    carbonSaved: 'Optimized speed cuts excess emissions 32%',
    description: 'Sudden regional naval security alerts close safe transit windows through the Bab-el-Mandeb bottleneck.',
    steps: [
      {
        phase: 'Step 1: Threat Ingestion',
        timestamp: '04:15:20 UTC',
        title: 'Naval Intelligence API & War Risk Underwriter Feed',
        detail: 'Underwriter alerts and Lloyd’s List Intelligence feed trigger auto-threat rule for 18 vessels en route.',
        status: 'completed',
      },
      {
        phase: 'Step 2: Micro-Speed Routing',
        timestamp: '04:16:10 UTC',
        title: 'Bunker Consumption vs. Speed Curve Optimization',
        detail: 'Calculates optimal 18.5 knot cruising speed around Cape of Good Hope, synchronizing port arrival windows at Rotterdam.',
        status: 'completed',
      },
      {
        phase: 'Step 3: Contractual Hedging',
        timestamp: '04:17:42 UTC',
        title: 'Dynamic Hedging of Bunker Spot Index',
        detail: 'Fuel hedging agent locks Singapore bunker price before market surge.',
        status: 'completed',
      },
      {
        phase: 'Step 4: Continuous Telematics',
        timestamp: '04:19:00 UTC',
        title: 'Container Telemetry Active across Southern Ocean',
        detail: 'Shock and temperature profiles relayed via Starlink low-latency satellite link.',
        status: 'completed',
      },
    ],
  },
  {
    id: 'scn-3',
    title: 'Cold-Chain Biological Cargo Temperature Excursion',
    severity: 'Severe',
    location: 'Munich Airport Cold-Storage Hub Transfer',
    affectedLanes: 'EU Bio-Pharma → North America Clinical Trial Centers',
    delayWithoutAI: '$2.8M biological batch spoiled',
    resolvedInWithAI: '14 Minutes to Autonomous Intervention',
    costSaved: '$2,800,000 product salvage value',
    carbonSaved: 'Zero waste reproduction avoided',
    description: 'Dry-ice sublimation rate exceeds ambient threshold due to tarmac heat wave during tarmac ground handling.',
    steps: [
      {
        phase: 'Step 1: Sensor Trigger',
        timestamp: '14:22:04 UTC',
        title: 'BLE 5.3 Sensor Detects +0.8°C Spike Above Setpoint',
        detail: 'Cellular IoT sensor in pallet #BIO-994 detects thermal seal breach before product degradation begins.',
        status: 'completed',
      },
      {
        phase: 'Step 2: Emergency Protocol',
        timestamp: '14:24:18 UTC',
        title: 'Munich Ramp Rapid Response Team Dispatched',
        detail: 'Automated webhook triggers tarmac handler priority ticket with exact GPS coordinates and dry-ice recharge kit.',
        status: 'completed',
      },
      {
        phase: 'Step 3: Compliance Audit',
        timestamp: '14:32:00 UTC',
        title: 'FDA 21 CFR Part 11 Audit Trail Generated',
        detail: 'Cryptographic immutable proof generated showing cold-chain integrity was preserved continuously.',
        status: 'completed',
      },
      {
        phase: 'Step 4: Sign-off',
        timestamp: '14:36:10 UTC',
        title: 'Quality Assurance Released for Immediate Takeoff',
        detail: 'Flight manifest updated and receiver clinical trial pharmacist alerted.',
        status: 'completed',
      },
    ],
  },
];

export const platformPillars: PillarFeature[] = [
  {
    id: 'control-tower',
    title: 'Autonomous Digital Twin',
    badge: 'Real-Time Orchestration',
    headline: 'Unified Multi-Modal Visibility Across Every Ocean, Sky, and Road',
    description: 'Break data silos across 100+ carriers, 40+ shipping lines, and legacy TMS systems. LogiPulse synthesizes millions of GPS pings, AIS maritime telemetry, weather maps, and customs milestones into an interactive living digital twin.',
    metrics: [
      { label: 'Tracking Accuracy', value: '99.94%', trend: '+4.2%' },
      { label: 'ETA Variance', value: '< 28 Mins', trend: '-82%' },
      { label: 'Automated Actions', value: '88.2%', trend: 'Autonomous' },
    ],
    bulletPoints: [
      'Continuous real-time AIS, ADS-B flight telematics, and ELD truck telemetry',
      'Millisecond-level container-level geofencing at 850+ global seaports & railheads',
      'Digital Bill of Lading (eBL) cryptographic verification and workflow triggers',
      'Automated customs milestone predictions preventing demurrage fees',
    ],
    codeSnippetTitle: 'logipulse.telemetry.stream',
    codeSnippet: `// Autonomous Digital Twin Stream
const stream = await logipulse.vessels.subscribe({
  lane: 'PACIFIC_NORTHWEST_CORRIDOR',
  telemetry: ['ais', 'eta_p50', 'bunker_burn_rate'],
  aiGuardrails: {
    maxAllowableDelayHours: 6,
    autoRerouteAction: 'OPTIMAL_COST_LATENCY'
  }
});

stream.on('anomaly_detected', async (event) => {
  const recommendation = await logipulse.agents.solve(event);
  await recommendation.executeAutonomousMitigation();
});`,
  },
  {
    id: 'ai-agents',
    title: 'Agentic Disruption Resolver',
    badge: 'Self-Healing Supply Chain',
    headline: 'AI Agents that Don’t Just Alert You—They Resolve Bottlenecks Autonomously',
    description: 'Traditional software sends spammy alert emails when a ship is late. LogiPulse deploys autonomous AI agents that analyze alternative carriers, negotiate spot pricing, re-file customs paperwork, and notify downstream logistics without human latency.',
    metrics: [
      { label: 'Resolution Speed', value: '3.4 Mins', trend: 'vs 48 hrs manual' },
      { label: 'Demurrage Reduction', value: '-76%', trend: 'Avg client' },
      { label: 'Labor Hours Saved', value: '14,200 hrs', trend: 'per year' },
    ],
    bulletPoints: [
      'Multi-agent debate engine evaluates cost vs. transit time trade-offs',
      'Dynamic spot freight spot auctioning across pre-vetted carrier pool',
      'Automated SLA penalty enforcement with automated clawback receipts',
      'Human-in-the-loop executive override controls with single-click sign-off',
    ],
    codeSnippetTitle: 'logipulse.agent.resolve',
    codeSnippet: `// Agentic Disruption Resolution Engine
const agent = new LogiPulseDisruptionAgent({
  enterprisePolicy: 'CRITICAL_PARTS_SLA_FIRST',
  maxSpotPremiumAllowed: '15%'
});

const outcome = await agent.resolveDisruption({
  disruptionId: 'PORT_CONGESTION_LAX_PIER_400',
  affectedContainers: ['TGHU991024-1', 'MSKU882910-4']
});

console.log('Action Taken:', outcome.autonomousAction);
// Output: "Rerouted to Tacoma rail corridor. Cost delta: -$12,400. ETA preserved."`,
  },
  {
    id: 'freight-auction',
    title: 'Dynamic Spot Bidding & TMS',
    badge: 'Procurement Intelligence',
    headline: 'Instant Multi-Modal Freight Contracting with Algorithmic Margin Defense',
    description: 'Harness predictive index pricing. When contract capacity tightens, our automated procurement engine bids out capacity across 12,000+ verified carriers, locking optimal rates with zero broker markups.',
    metrics: [
      { label: 'Spot Freight Savings', value: '18.4%', trend: 'vs DAT Index' },
      { label: 'Tender Acceptance', value: '98.9%', trend: '+21%' },
      { label: 'Billing Discrepancies', value: '0.02%', trend: '-99%' },
    ],
    bulletPoints: [
      'Direct integration with major ocean carriers (Maersk, MSC, CMA CGM, ONE, Hapag-Lloyd)',
      'Automated 3-way freight invoice auditing against bill of lading and rate card',
      'Predictive 90-day spot rate forecasting powered by global macro trade flows',
      'Instant carbon-indexed tender options for corporate sustainability goals',
    ],
    codeSnippetTitle: 'logipulse.tms.tender',
    codeSnippet: `// Algorithmic Spot Tender
const tender = await logipulse.tms.createDynamicAuction({
  originPort: 'SGP_JURONG',
  destinationPort: 'ROT_EUROMAX',
  cargoType: 'DRY_40HC',
  targetDeparture: '2026-10-15',
  esgPreference: 'LOWEST_CARBON_INTENSITY'
});

const winningBid = await tender.awaitAutonomousClose({ timeoutMs: 180000 });
console.log('Booked Carrier:', winningBid.carrier, 'Rate:', winningBid.rateUsd);`,
  },
  {
    id: 'sustainability',
    title: 'Scope 3 Carbon Accounting',
    badge: 'ISO 14083 Certified',
    headline: 'Granular Well-to-Wake CO2 Emissions Intelligence and Green Corridors',
    description: 'Satisfy European CSRD, SEC climate rules, and customer sustainability pledges. Get audited container-by-container emissions calculations based on vessel deadweight, fuel blend (MGO, LNG, Methanol), and load factor.',
    metrics: [
      { label: 'Carbon Avoided', value: '42,800 MT', trend: '2026 YTD' },
      { label: 'ESG Audit Time', value: '1 Click', trend: 'vs 4 months' },
      { label: 'Biofuel Corridor Utilization', value: '38%', trend: '+150% YoY' },
    ],
    bulletPoints: [
      'Certified calculation engine adhering to GLEC Framework v3 and ISO 14083',
      'Alternative green lane suggestions (Intermodal electrified rail vs. long-haul diesel)',
      'Direct integration with maritime carbon credit registries for net-zero offsetting',
      'Automated supplier ESG scorecards and compliance reports',
    ],
    codeSnippetTitle: 'logipulse.carbon.audit',
    codeSnippet: `// Scope 3 Carbon Calculation
const audit = await logipulse.esg.computeEmissions({
  shipmentId: 'SHP-8921',
  standard: 'ISO_14083',
  granularity: 'WELL_TO_WAKE'
});

console.log('CO2e Intensity:', audit.metricTonsCo2e, 'Reduction Options:', audit.greenCorridorAlternatives);`,
  },
];

export const integrationPartners: IntegrationPartner[] = [
  { name: 'SAP S/4HANA', category: 'ERP & Core', icon: 'Database', type: 'Certified Bi-Directional Connector', latency: '< 150ms sync', description: 'Real-time sales order, PO milestone, and material requirement planning (MRP) synchronization.' },
  { name: 'Oracle Cloud SCM', category: 'ERP & Core', icon: 'Server', type: 'Native Enterprise App', latency: '< 200ms sync', description: 'Automates replenishment, global trade management, and warehouse execution.' },
  { name: 'Microsoft Dynamics 365', category: 'ERP & Core', icon: 'Layers', type: 'Direct Azure Service Bus', latency: 'Real-time', description: 'Synchronizes inventory availability and fulfillment statuses directly to finance.' },
  { name: 'FourKites Network', category: 'TMS & Visibility', icon: 'Compass', type: 'Telemetry Relay', latency: '< 50ms', description: 'High-density telematics ingestion across North American and European surface freight.' },
  { name: 'project44 Movement', category: 'TMS & Visibility', icon: 'Radio', type: 'API Pipeline', latency: '< 100ms', description: 'Global air and maritime ocean tracking telemetry aggregation.' },
  { name: 'Maersk Ocean API', category: 'Carriers & Lines', icon: 'Ship', type: 'Direct Carrier Integration', latency: 'Instant', description: 'Electronic booking confirmation, container milestones, and dynamic spot pricing.' },
  { name: 'CMA CGM Direct EDI', category: 'Carriers & Lines', icon: 'Anchor', type: 'EDI 204/214/310/856', latency: 'Real-time', description: 'Autonomous tender submission and electronic bill of lading processing.' },
  { name: 'Samsara Telematics', category: 'IoT & Hardware', icon: 'Cpu', type: 'IoT Gateway', latency: '1 sec streaming', description: 'Sub-second GPS, cold-chain reefer telemetry, and driver safety alerts.' },
  { name: 'Sensitech Cryo-Track', category: 'IoT & Hardware', icon: 'Activity', type: 'Pharma Cold-Chain BLE', latency: 'Sub-minute', description: 'Continuous temperature, shock, and tilt reporting for vaccines and biologics.' },
  { name: 'Manhattan Associates', category: 'TMS & Visibility', icon: 'Box', type: 'WMS Connector', latency: 'Real-time', description: 'Yard management, cross-dock orchestration, and dock door scheduling.' },
  { name: 'Descartes Customs', category: 'ERP & Core', icon: 'FileCheck', type: 'Regulatory Gateway', latency: 'Automated', description: 'Instant Automated Commercial Environment (ACE) customs release updates.' },
  { name: 'Kuehne+Nagel Seaexplorer', category: 'Carriers & Lines', icon: 'Navigation', type: 'Vessel AIS Network', latency: '< 5 mins', description: 'Predictive port dwell and vessel voyage schedule intelligence.' },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Growth Visibility',
    description: 'For fast-growing manufacturers & brands seeking end-to-end multi-modal shipment visibility.',
    monthlyPrice: 1490,
    annualPrice: 1190,
    features: [
      'Up to 1,500 active shipments / month',
      'Real-time ocean, air, and truck visibility',
      'Standard ETA predictions (95% accuracy)',
      'Basic ERP integration (Webhooks & REST)',
      'Standard email & Slack disruption alerts',
      'GLEC Carbon emissions estimation',
      'Standard support (8x5 SLA)',
    ],
    ctaText: 'Start 14-Day Free Pilot',
  },
  {
    id: 'enterprise',
    name: 'Autonomous Control Tower',
    description: 'For mid-to-large global supply chain leaders requiring autonomous mitigation and digital twin modeling.',
    monthlyPrice: 3890,
    annualPrice: 3100,
    popular: true,
    badge: 'Most Popular',
    features: [
      'Up to 15,000 active shipments / month',
      'Autonomous AI Disruption Resolver & Auto-Reroute',
      'Hyper-accurate ETA predictions (< 30 min variance)',
      'Native SAP, Oracle & Microsoft Dynamics connectors',
      'Dynamic spot freight auctioning engine',
      'ISO 14083 certified Scope 3 accounting',
      'Cold-chain IoT sensor telemetry ingestion',
      'Dedicated Customer Success Architect & 24/7 SLA',
    ],
    ctaText: 'Deploy Control Tower',
  },
  {
    id: 'sovereign',
    name: 'Global Sovereign Grid',
    description: 'Tailored for Fortune 500 multinationals, defense logistics, and global mega-enterprises.',
    monthlyPrice: 8900,
    annualPrice: 7200,
    badge: 'Enterprise Grade',
    features: [
      'Unlimited monthly shipments & custom lanes',
      'Custom trained AI models on proprietary supplier data',
      'Private cloud / On-Premise VPC deployment (AWS / Azure / GCP)',
      'Automated multi-carrier tender & contract settling',
      'Custom EDI 204/214/304 mapping & legacy mainframe bridge',
      'FedRAMP, SOC2 Type II, ISO 27001 audited security',
      '99.99% uptime guarantee with financial SLA penalties',
      '15-minute emergency response executive hotline',
    ],
    ctaText: 'Contact Enterprise Sales',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'LogiPulse’s autonomous agent caught the Long Beach terminal crane outage 72 hours before carrier alerts went out. It automatically rerouted 340 containers to Tacoma, saving us over $2.4M in plant downtime penalties.',
    author: 'Elena Rostova',
    role: 'SVP of Global Supply Chain',
    company: 'Apex Industrial Automation',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    statNumber: '$2.4M',
    statLabel: 'Downtime Penalties Avoided',
  },
  {
    quote: 'Our cold-chain pharmaceutical cargo has a zero-tolerance excursion policy. LogiPulse’s sub-second sensor streaming and automated triage saved three irreplaceable vaccine shipments across European hubs.',
    author: 'Dr. Marcus Vance',
    role: 'Global Logistics Director',
    company: 'Novis BioPharma Europe',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    statNumber: '100%',
    statLabel: 'Cold-Chain Integrity SLA',
  },
  {
    quote: 'Switching from manual spreadsheet tracking to LogiPulse was like turning on radar in pitch black darkness. Our dispatcher workload dropped by 65%, and on-time freight performance hit 99.4%.',
    author: 'Kareem Al-Mansoor',
    role: 'Chief Operating Officer',
    company: 'Horizon Trans-Oceanic Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    statNumber: '-65%',
    statLabel: 'Manual Dispatch Overhead',
  },
];
