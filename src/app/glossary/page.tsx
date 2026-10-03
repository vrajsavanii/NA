'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import {
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Hotel,
  Cpu,
  Layers,
  Lock,
} from 'lucide-react';

interface GlossaryTerm {
  term: string;
  category: 'Healthcare' | 'Architecture' | 'Hospitality' | 'Security';
  definition: string;
  howNexAgentUsesIt: string;
  linkText: string;
  linkUrl: string;
}

const terms: GlossaryTerm[] = [
  {
    term: 'Deterministic AI',
    category: 'Architecture',
    definition:
      'An architectural AI framework where identical inputs are mathematically guaranteed to produce identical, auditable, and rule-compliant outputs without random generative variability.',
    howNexAgentUsesIt:
      'NexAgent replaces black-box LLM generation with deterministic finite state machines and WebAssembly policy gates, ensuring zero hallucinations across clinical triage, billing, and reservation workflows.',
    linkText: 'Explore Deterministic Architecture',
    linkUrl: '/technology',
  },
  {
    term: 'Human-in-the-Loop (HITL)',
    category: 'Architecture',
    definition:
      'A governance architecture where high-stakes autonomous recommendations require explicit cryptographic sign-off from human specialists before state modification occurs.',
    howNexAgentUsesIt:
      'NexAgent enforces frictionless human approval gates for critical actions—such as ESI Level 1/2 clinical triage, high-value invoice approvals, and patient discharge sign-offs.',
    linkText: 'Learn about HITL governance',
    linkUrl: '/technology',
  },
  {
    term: 'ABDM (Ayushman Bharat Digital Mission)',
    category: 'Healthcare',
    definition:
      'The Indian government digital health initiative establishing unified digital infrastructure including ABHA ID, Healthcare Professional Registry, and consent-driven health data exchange.',
    howNexAgentUsesIt:
      'NexAgent HMS provides out-of-the-box ABDM Milestone 1, 2, and 3 certification, facilitating instant ABHA paperless registration, doctor registry syncing, and secure FHIR record sharing.',
    linkText: 'Read about ABDM compliance in NexAgent HMS',
    linkUrl: '/products/hms',
  },
  {
    term: 'HL7 (Health Level Seven)',
    category: 'Healthcare',
    definition:
      'An international set of data exchange standards facilitating the transfer of clinical and administrative data between hospital information systems and diagnostic devices.',
    howNexAgentUsesIt:
      'NexAgent HMS ingests bidirectional HL7 v2 ADT (Admission, Discharge, Transfer) and ORU (Observation Result) messages from legacy hospital systems with zero disruption.',
    linkText: 'Inspect hospital integration layers',
    linkUrl: '/industries/healthcare',
  },
  {
    term: 'FHIR (Fast Healthcare Interoperability Resources)',
    category: 'Healthcare',
    definition:
      'A next-generation, RESTful healthcare data interoperability standard developed by HL7 that structures electronic health records as modular JSON and XML resources.',
    howNexAgentUsesIt:
      'NexAgent standardizes all clinical entities—patients, conditions, observations, and encounter timelines—as FHIR R4 resources for seamless interoperability with national health networks.',
    linkText: 'View FHIR specifications in HMS',
    linkUrl: '/products/hms',
  },
  {
    term: 'ESI Triage (Emergency Severity Index)',
    category: 'Healthcare',
    definition:
      'A five-level emergency department triage algorithm categorizing incoming patients from Level 1 (immediate resuscitation) to Level 5 (non-urgent) based on acuity and expected resource needs.',
    howNexAgentUsesIt:
      'NexAgent HMS ingests real-time vitals and chief complaints to compute an ESI level within 12 seconds, alerting duty physicians instantly when critical red flags are detected.',
    linkText: 'See ESI triage automation',
    linkUrl: '/products/hms',
  },
  {
    term: 'Bed Turnover Time',
    category: 'Healthcare',
    definition:
      'The total elapsed duration between a patient discharge order and the physical preparation and assignment of that clean bed to the next admitted patient.',
    howNexAgentUsesIt:
      'NexAgent HMS synchronizes billing, nursing handoffs, and housekeeping dispatch simultaneously upon discharge, reducing bed turnover from 90 minutes to 35 minutes.',
    linkText: 'Check bed turnover case studies',
    linkUrl: '/products/hms',
  },
  {
    term: 'WebAssembly (Wasm) Policy Gate',
    category: 'Architecture',
    definition:
      'A high-performance, memory-safe sandboxed execution boundary that enforces immutable algorithmic constraints on AI agent outputs before database execution.',
    howNexAgentUsesIt:
      'NexAgent compiles policy rules (such as max discount limits or drug contraindications) into WebAssembly micro-modules that strictly gate all automated database writes.',
    linkText: 'Inspect WebAssembly policy gates',
    linkUrl: '/technology',
  },
  {
    term: 'PHI (Protected Health Information) Redaction',
    category: 'Security',
    definition:
      'The automated masking or tokenization of sensitive medical identifiers (names, phone numbers, Aadhaar, ABHA) prior to cloud processing to guarantee privacy.',
    howNexAgentUsesIt:
      'NexAgent scrubs 18 HIPAA and DPDP identifiers in volatile RAM before passing telemetry through reasoning pipelines, ensuring raw patient identities never leave secure boundaries.',
    linkText: 'Read security and privacy protocols',
    linkUrl: '/about',
  },
  {
    term: 'Immutable Audit Ledger',
    category: 'Security',
    definition:
      'An append-only, cryptographically hashed transactional journal that permanently records every system event, AI inference, and supervisor authorization for audit compliance.',
    howNexAgentUsesIt:
      'Every routing decision, policy validation, and human sign-off is committed to NexAgent\'s append-only ledger, generating court-admissible audit trails for NABH and legal compliance.',
    linkText: 'Explore audit ledger architecture',
    linkUrl: '/technology',
  },
  {
    term: 'RevPAR (Revenue Per Available Room)',
    category: 'Hospitality',
    definition:
      'The primary financial benchmark metric in hospitality calculated by multiplying a hotel\'s Average Daily Rate (ADR) by its occupancy rate.',
    howNexAgentUsesIt:
      'NexAgent Hospitality OS optimizes room tariffs dynamically every 15 minutes based on local demand surges and competitor availability, boosting RevPAR by 18% to 27%.',
    linkText: 'Review Hospitality OS pricing engine',
    linkUrl: '/products/hospitality',
  },
  {
    term: 'Two-Way OTA Synchronization',
    category: 'Hospitality',
    definition:
      'Real-time bidirectional inventory and rate mirroring between a hotel property management system and Online Travel Agencies (OTAs) to eliminate double bookings.',
    howNexAgentUsesIt:
      'NexAgent Hospitality OS synchronizes room inventory across Booking.com, Expedia, Agoda, and Airbnb in sub-450ms, guaranteeing zero overbookings during peak seasons.',
    linkText: 'See OTA channel synchronization',
    linkUrl: '/products/hospitality',
  },
  {
    term: 'Predictive Capacity Intelligence',
    category: 'Architecture',
    definition:
      'Machine learning algorithms that analyze historical admission trends, seasonality, and clinical velocity to forecast ward occupancy and staffing needs 24 to 48 hours in advance.',
    howNexAgentUsesIt:
      'NexAgent empowers hospital COOs and hotel general managers to pre-emptively adjust nursing shifts and housekeeping rosters before capacity bottlenecks emerge.',
    linkText: 'Learn about Capacity Intelligence',
    linkUrl: '/technology',
  },
  {
    term: 'Two-Phase Commit (2PC)',
    category: 'Architecture',
    definition:
      'A distributed transaction protocol ensuring that multiple independent databases and microservices either commit a coordinated state update simultaneously or roll back cleanly.',
    howNexAgentUsesIt:
      'NexAgent uses 2PC across billing gateways, pharmacy stock records, and room inventories to ensure financial records and physical inventory never fall out of sync.',
    linkText: 'Examine enterprise reliability standards',
    linkUrl: '/technology',
  },
  {
    term: 'Electronic Medical Record (EMR / EHR)',
    category: 'Healthcare',
    definition:
      'A digital version of a patient\'s medical chart maintaining clinical history, diagnoses, medications, lab test results, and immunization records.',
    howNexAgentUsesIt:
      'NexAgent acts as an intelligent orchestration layer on top of your existing EMR, pulling diagnostic records and pushing verified physician sign-offs without vendor lock-in.',
    linkText: 'Inspect EMR interoperability',
    linkUrl: '/products/hms',
  },
  {
    term: 'TPA (Third-Party Administrator) Claims',
    category: 'Healthcare',
    definition:
      'The administrative process through which hospitals submit cashless health insurance pre-authorizations and settlement paperwork to insurance intermediaries for approval.',
    howNexAgentUsesIt:
      'NexAgent HMS automates document packet aggregation and ICD-10 diagnostic validation, slashing pre-auth wait times from hours to under 22 minutes.',
    linkText: 'Review TPA claims automation',
    linkUrl: '/products/hms',
  },
  {
    term: 'NABH (National Accreditation Board for Hospitals)',
    category: 'Healthcare',
    definition:
      'The premier healthcare quality standards accreditation body in India certifying hospital clinical protocols, patient safety, and administrative excellence.',
    howNexAgentUsesIt:
      'NexAgent HMS maintains automated clinical documentation checklists, prescription audit logs, and infection control tracking that fulfill NABH digital requirements.',
    linkText: 'View NABH compliance features',
    linkUrl: '/industries/healthcare',
  },
  {
    term: 'FEFO Inventory Management',
    category: 'Healthcare',
    definition:
      'First-Expired, First-Out logistics scheduling that ensures pharmaceuticals with the earliest expiration dates are dispensed before newly acquired stock batches.',
    howNexAgentUsesIt:
      'NexAgent HMS tracks medication expiration dates at the batch barcode level, eliminating stock wastage and automatically reordering critical life-saving drugs.',
    linkText: 'Explore pharmacy management',
    linkUrl: '/products/hms',
  },
  {
    term: 'WhatsApp Guest Concierge',
    category: 'Hospitality',
    definition:
      'An automated conversational interface enabling hotel guests to complete contactless check-in, request amenities, and submit room service orders via WhatsApp messaging.',
    howNexAgentUsesIt:
      'NexAgent Hospitality OS automates over 78% of routine guest front-desk requests in 32 languages, routing complex needs directly to on-duty staff.',
    linkText: 'Inspect WhatsApp concierge capabilities',
    linkUrl: '/products/hospitality',
  },
  {
    term: 'Hospital Operating System (Hospital OS)',
    category: 'Healthcare',
    definition:
      'A unified digital software core that coordinates outpatient registration, bed management, clinical documentation, billing, pharmacy, and diagnostic departments into a synchronized workflow.',
    howNexAgentUsesIt:
      'NexAgent HMS is built as a complete Hospital OS that integrates clinical and administrative workflows into a single responsive operational control panel.',
    linkText: 'Discover NexAgent HMS',
    linkUrl: '/products/hms',
  },
  {
    term: 'Dynamic Pricing Engine',
    category: 'Hospitality',
    definition:
      'An algorithmic revenue management system that continuously adjusts room rates based on real-time competitor rates, demand spikes, local events, and pacing velocity.',
    howNexAgentUsesIt:
      'NexAgent Hospitality OS monitors local market signals 24/7 to update room tariffs across direct websites and all connected OTAs automatically.',
    linkText: 'Check Hospitality OS pricing demo',
    linkUrl: '/products/hospitality',
  },
  {
    term: 'Outpatient Department (OPD) Flow Optimization',
    category: 'Healthcare',
    definition:
      'Algorithmic queue management that dynamically redistributes patient waitlists across doctor consultation chambers and diagnostic counters to minimize total waiting time.',
    howNexAgentUsesIt:
      'NexAgent HMS reduces outpatient wait times by up to 42% through smart appointment pacing and real-time SMS/WhatsApp queue updates for patients.',
    linkText: 'OPD queue optimization in HMS',
    linkUrl: '/industries/healthcare',
  },
  {
    term: 'Inpatient Department (IPD) Orchestration',
    category: 'Healthcare',
    definition:
      'The coordinated management of inpatient admissions, clinical rounds, medication charting, nursing shifts, and discharge clearances across hospital wards.',
    howNexAgentUsesIt:
      'NexAgent HMS provides ward nurses and duty doctors with interactive digital ward dashboards, unifying vital sign charting and medication schedules.',
    linkText: 'See IPD orchestration workflows',
    linkUrl: '/products/hms',
  },
  {
    term: 'Zero Trust Security Architecture',
    category: 'Security',
    definition:
      'A cybersecurity paradigm requiring strict identity verification and continuous authorization for every user, device, and API call, regardless of network location.',
    howNexAgentUsesIt:
      'NexAgent isolates every tenant environment, signs each RPC call with ephemeral tokens, and strictly gates database mutations behind role-based access controls.',
    linkText: 'Read about our security architecture',
    linkUrl: '/technology',
  },
  {
    term: 'LLM Hallucination Mitigation',
    category: 'Architecture',
    definition:
      'Engineering guardrails that constrain neural network outputs through schema validation, knowledge graphs, and mathematical policy boundaries to prevent fabricated assertions.',
    howNexAgentUsesIt:
      'NexAgent avoids unrestrained generative text in mission-critical flows, relying on strongly-typed JSON schemas validated against deterministic WebAssembly policy gates.',
    linkText: 'Learn how we stop hallucinations',
    linkUrl: '/technology',
  },
  {
    term: 'Channel Manager',
    category: 'Hospitality',
    definition:
      'A hospitality software module that distributes inventory and room rates across multiple distribution channels, including OTAs, Global Distribution Systems, and direct web booking engines.',
    howNexAgentUsesIt:
      'NexAgent Hospitality OS includes a built-in channel manager with sub-second sync latencies, eliminating the need for expensive third-party channel manager subscriptions.',
    linkText: 'Hospitality OS channel manager',
    linkUrl: '/products/hospitality',
  },
  {
    term: 'PACS / DICOM Imaging Integration',
    category: 'Healthcare',
    definition:
      'Picture Archiving and Communication Systems integrated with the Digital Imaging and Communications in Medicine standard for storing, retrieving, and reviewing radiological images.',
    howNexAgentUsesIt:
      'NexAgent HMS embeds zero-footprint web DICOM viewers directly inside the patient medical record, allowing physicians to inspect CT, MRI, and X-ray scans instantly.',
    linkText: 'Review diagnostic integrations',
    linkUrl: '/products/hms',
  },
  {
    term: 'Enterprise Operations Core',
    category: 'Architecture',
    definition:
      'A central workflow automation substrate that eliminates cross-departmental friction by orchestrating data movement and business logic across legacy ERPs and CRMs.',
    howNexAgentUsesIt:
      'NexAgent Enterprise Core coordinates multi-step business logic across SAP, Oracle, Salesforce, and custom SQL databases with full rollback safety.',
    linkText: 'Explore Enterprise Operations Core',
    linkUrl: '/solutions/workflow-automation',
  },
  {
    term: 'Edge Computing Node',
    category: 'Architecture',
    definition:
      'On-premise compute infrastructure located within a hospital or hotel facility that processes sensitive telemetry and runs local operations during internet outages.',
    howNexAgentUsesIt:
      'NexAgent deploys lightweight local edge daemons that allow clinical staff to continue admissions, triage, and medication dispensing even when external internet connections drop.',
    linkText: 'See edge architecture specs',
    linkUrl: '/technology',
  },
  {
    term: 'DPDP Act 2023 (Digital Personal Data Protection)',
    category: 'Security',
    definition:
      'India\'s comprehensive data privacy legislation governing the lawful collection, processing, storage, and cross-border transfer of citizens\' digital personal data.',
    howNexAgentUsesIt:
      'NexAgent is engineered in India to comply fully with DPDP statutory provisions, featuring consent logging, citizen data localization, and complete data deletion protocols.',
    linkText: 'Learn about Indian regulatory compliance',
    linkUrl: '/about',
  },
];

const categoryFilters = ['All Categories', 'Healthcare', 'Architecture', 'Hospitality', 'Security'];

export default function GlossaryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Alphabet letters present in terms
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    terms.forEach((t) => letters.add(t.term[0].toUpperCase()));
    return Array.from(letters).sort();
  }, []);

  const filteredTerms = useMemo(() => {
    return terms.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.howNexAgentUsesIt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter =
        !selectedLetter || item.term[0].toUpperCase() === selectedLetter;

      return matchesCategory && matchesSearch && matchesLetter;
    });
  }, [selectedCategory, searchQuery, selectedLetter]);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col font-sans selection:bg-white/20 selection:text-white">
      <Navbar onOpenStrategyCall={() => setIsModalOpen(true)} activePath="/glossary" />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-white/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-mono text-zinc-300">
              <BookOpen className="w-3.5 h-3.5 text-white" />
              <span>30 Operational Term Definitions · DefinedTermSet Schema</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise AI & Healthcare Glossary
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Standardized terminology for healthcare IT directors, hospital COOs, hotel revenue managers, and enterprise architects evaluating deterministic AI.
            </p>

            {/* Search Box */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search glossary terms (e.g. ABDM, ESI, Wasm, RevPAR)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedLetter(null);
                  }}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.05] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white/30 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categoryFilters.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* A-Z Letter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 pb-4 border-b border-white/[0.08]">
            <button
              onClick={() => setSelectedLetter(null)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                selectedLetter === null
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              ALL
            </button>
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
              const isAvailable = availableLetters.includes(letter);
              const isSelected = selectedLetter === letter;

              return (
                <button
                  key={letter}
                  disabled={!isAvailable}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                    isSelected
                      ? 'bg-white text-black font-bold'
                      : isAvailable
                      ? 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                      : 'text-zinc-600 cursor-not-allowed opacity-40'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
            <span>
              Showing <strong className="text-white">{filteredTerms.length}</strong> of 30 definitions
            </span>
            {(selectedCategory !== 'All Categories' || searchQuery || selectedLetter) && (
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSearchQuery('');
                  setSelectedLetter(null);
                }}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Glossary Term Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.length === 0 ? (
              <div className="col-span-full text-center py-16 border border-white/10 rounded-2xl bg-white/[0.02]">
                <p className="text-zinc-400 text-sm">No terms matched your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                    setSelectedLetter(null);
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredTerms.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-lg font-bold text-white tracking-tight">{item.term}</h2>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 border border-white/[0.06]">
                        {item.category}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="text-zinc-300 leading-relaxed">{item.definition}</p>
                      <div className="pt-2 border-t border-white/[0.06]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                          How NexAgent Uses It:
                        </span>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          {item.howNexAgentUsesIt}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <Link
                      href={item.linkUrl}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white font-medium group transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Looking for custom integration requirements?</h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Our engineering team helps hospital networks and enterprises architect compliant, zero-hallucination deterministic workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-md"
              >
                Schedule Architecture Consultation
              </button>
              <Link
                href="/faq"
                className="px-6 py-3 rounded-full bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.12] transition-all text-sm font-semibold"
              >
                Read 40 Core FAQs
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenStrategyCall={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
