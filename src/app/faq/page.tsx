'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import {
  Search,
  ChevronDown,
  HelpCircle,
  Stethoscope,
  Cpu,
  Hotel,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from 'lucide-react';

interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
}

const faqs: FaqItem[] = [
  // Category 1: About NexAgent (8 questions)
  {
    id: 1,
    category: 'About NexAgent',
    question: 'What is NexAgent Infra?',
    answer:
      'NexAgent Infra is an enterprise software company founded in 2026 that builds deterministic AI operating systems for hospitals, hotels, and core business operations. Operating globally from India, the company provides autonomous workflow infrastructure with zero hallucination risk, human-in-the-loop cryptographic sign-offs, and WebAssembly policy gates.',
    linkText: 'Learn more about our mission',
    linkUrl: '/about',
  },
  {
    id: 2,
    category: 'About NexAgent',
    question: 'Who founded NexAgent Infra?',
    answer:
      'NexAgent Infra was founded by Manthan Kachhadiya (CEO & Chief Architect) and Vraj Savani (COO & Head of Operations). Manthan leads distributed systems architecture and deterministic runtime engineering, while Vraj oversees enterprise deployments, operational workflows, and healthcare partner scaling.',
    linkText: 'Meet the founders',
    linkUrl: '/about#founders',
  },
  {
    id: 3,
    category: 'About NexAgent',
    question: 'Where is NexAgent headquartered and where does it operate?',
    answer:
      'NexAgent Infra is headquartered in Gujarat, India, and operates globally across India, Southeast Asia, and the Middle East. Its cloud-native architecture supports both multi-tenant cloud and isolated on-premise sovereign cloud deployments.',
    linkText: 'Explore company details',
    linkUrl: '/about',
  },
  {
    id: 4,
    category: 'About NexAgent',
    question: 'How is NexAgent different from traditional AI agencies?',
    answer:
      'NexAgent is a deep-tech software product infrastructure company, not a prompt engineering agency or consulting shop. Unlike agencies wrapping third-party chatbot APIs, NexAgent engineers a proprietary 7-layer deterministic architecture governed by WebAssembly rules and cryptographic human approval gates.',
    linkText: 'Compare architecture vs LLMs',
    linkUrl: '/technology',
  },
  {
    id: 5,
    category: 'About NexAgent',
    question: 'What core products does NexAgent offer?',
    answer:
      'NexAgent offers four core enterprise products: NexAgent HMS (Hospital Management System), NexAgent Hospitality OS (Hotel PMS & Concierge), Enterprise Operations Core (Unified Workflow Engine), and Predictive Capacity Intelligence (24–48h operational demand forecasting).',
    linkText: 'View NexAgent HMS',
    linkUrl: '/products/hms',
  },
  {
    id: 6,
    category: 'About NexAgent',
    question: 'How does NexAgent ensure zero hallucinations in high-stakes environments?',
    answer:
      'NexAgent eliminates hallucinations by replacing unstructured LLM generation with deterministic finite state machines, Pydantic/Zod schema enforcement, in-memory PHI redaction, and WebAssembly sandboxed policy boundaries. All decisions are validated against strict constraint boundaries before any database state change occurs.',
    linkText: 'Inspect 7-layer safety stack',
    linkUrl: '/technology',
  },
  {
    id: 7,
    category: 'About NexAgent',
    question: 'How does NexAgent handle data privacy and healthcare compliance?',
    answer:
      'NexAgent enforces in-memory PII/PHI redaction before any reasoning engine processes data, maintains HIPAA and SOC2 alignment, and adheres to India\'s Digital Personal Data Protection (DPDP) Act 2023. No patient or guest data is ever utilized for third-party model training.',
    linkText: 'Read about compliance and security',
    linkUrl: '/industries/healthcare',
  },
  {
    id: 8,
    category: 'About NexAgent',
    question: 'How can an enterprise or hospital get started with NexAgent?',
    answer:
      'Organizations can schedule an architectural briefing or use the interactive Solution Architect tool at nexagent.in/setup to scope integration requirements. Sandbox environments are typically provisioned within 48 to 72 hours for qualified enterprises.',
    linkText: 'Launch Solution Architect',
    linkUrl: '/setup',
  },

  // Category 2: NexAgent HMS (10 questions)
  {
    id: 9,
    category: 'NexAgent HMS',
    question: 'What is NexAgent HMS?',
    answer:
      'NexAgent HMS is an AI-powered hospital management software operating system engineered specifically for Indian multi-specialty and corporate hospitals. It automates ESI triage, orchestrates bed turnover, processes TPA insurance claims, and provides end-to-end ABDM M1, M2, and M3 compliance.',
    linkText: 'Explore NexAgent HMS',
    linkUrl: '/products/hms',
  },
  {
    id: 10,
    category: 'NexAgent HMS',
    question: 'Is NexAgent HMS ABDM compliant?',
    answer:
      'Yes, NexAgent HMS is fully compliant with Ayushman Bharat Digital Mission (ABDM) Milestone 1 (ABHA creation & verification), Milestone 2 (Healthcare Professional & Facility Registry), and Milestone 3 (Health Information Exchange & Consent Management via unified FHIR gateways).',
    linkText: 'ABDM compliance architecture',
    linkUrl: '/products/hms',
  },
  {
    id: 11,
    category: 'NexAgent HMS',
    question: 'How does NexAgent HMS reduce hospital bed turnaround time?',
    answer:
      'NexAgent HMS reduces hospital bed turnover from the industry average of 90 minutes down to 35 minutes—a 61% reduction. It automates simultaneous triggers across housekeeping, patient billing clearance, nursing handoffs, and admission desks the moment a discharge order is digitally signed.',
    linkText: 'Bed turnover case study metrics',
    linkUrl: '/products/hms',
  },
  {
    id: 12,
    category: 'NexAgent HMS',
    question: 'What is NexAgent\'s Emergency Severity Index (ESI) outpatient triage system?',
    answer:
      'NexAgent HMS automates outpatient and emergency triage by ingesting patient vitals, symptoms, and chief complaints to compute an ESI Level 1–5 classification. The triage recommendation is presented to the triage nurse within 12 seconds with required physician cryptographic sign-off.',
    linkText: 'Outpatient triage workflow',
    linkUrl: '/industries/healthcare',
  },
  {
    id: 13,
    category: 'NexAgent HMS',
    question: 'How does NexAgent HMS integrate with existing hospital EMRs and PACS?',
    answer:
      'NexAgent HMS connects to legacy EMRs, LIS (Laboratory Information Systems), and PACS imaging servers using bidirectional HL7 v2, HL7 FHIR R4, and DICOM standards. It runs as an intelligent orchestration layer on top of existing databases without requiring disruptive system overhauls.',
    linkText: 'Review HL7/FHIR integrations',
    linkUrl: '/technology',
  },
  {
    id: 14,
    category: 'NexAgent HMS',
    question: 'How does NexAgent HMS accelerate TPA cashless insurance claims?',
    answer:
      'NexAgent HMS automates pre-authorization document aggregation, cross-checks clinical diagnosis against insurance policy exclusion rules, and submits structured e-claims directly to TPAs. This reduces pre-authorization wait times from 4–6 hours to under 22 minutes.',
    linkText: 'TPA claim automation',
    linkUrl: '/products/hms',
  },
  {
    id: 15,
    category: 'NexAgent HMS',
    question: 'What is the pricing model for NexAgent HMS?',
    answer:
      'NexAgent HMS is priced on a predictable per-bed monthly subscription or annual software license tier based on hospital operational capacity. Custom pricing includes full ABDM gateway integration, dedicated technical onboarding, and 24/7 SLA infrastructure support.',
    linkText: 'Calculate pricing in Solution Architect',
    linkUrl: '/setup',
  },
  {
    id: 16,
    category: 'NexAgent HMS',
    question: 'Does NexAgent HMS replace clinical doctors and nurses?',
    answer:
      'No, NexAgent HMS never replaces medical staff; it functions as an operational co-pilot with mandatory human-in-the-loop governance. Every clinical triage, prescription validation, and discharge sign-off requires a licensed doctor\'s explicit approval.',
    linkText: 'Human-in-the-loop safety protocol',
    linkUrl: '/technology',
  },
  {
    id: 17,
    category: 'NexAgent HMS',
    question: 'What pharmacy and inventory management features are included in NexAgent HMS?',
    answer:
      'NexAgent HMS features real-time FEFO (First-Expired, First-Out) drug batch tracking, automatic reorder threshold calculations, electronic prescription barcode dispensing, and integrated narcotic drug logbooks compliant with CDSCO regulations.',
    linkText: 'Pharmacy management specs',
    linkUrl: '/products/hms',
  },
  {
    id: 18,
    category: 'NexAgent HMS',
    question: 'Can NexAgent HMS operate offline during hospital network outages?',
    answer:
      'Yes, NexAgent HMS features local edge-node synchronization with two-phase commit protocols. Critical emergency admissions, triage, and pharmacy dispensing continue uninterrupted on local subnets during WAN outages, automatically reconciling with the central cloud once connectivity is restored.',
    linkText: 'Offline edge deployment guide',
    linkUrl: '/technology',
  },

  // Category 3: Deterministic AI & Architecture (8 questions)
  {
    id: 19,
    category: 'Deterministic AI & Architecture',
    question: 'What is deterministic AI, and why is it superior to generative AI for enterprise operations?',
    answer:
      'Deterministic AI is an architectural framework where identical inputs are guaranteed to yield identical, mathematically verifiable, and auditable outputs. In high-stakes healthcare and enterprise environments, deterministic AI prevents dangerous LLM hallucinations, ensuring 100% adherence to regulatory and operational rules.',
    linkText: 'Deterministic vs Generative architecture',
    linkUrl: '/technology',
  },
  {
    id: 20,
    category: 'Deterministic AI & Architecture',
    question: 'What is NexAgent\'s 7-layer architecture?',
    answer:
      'NexAgent\'s 7-layer stack consists of: 1) Data Ingestion & Sanitization, 2) In-Memory PHI/PII Redaction, 3) Semantic Intent Parsing, 4) WebAssembly Policy Engine, 5) Cryptographic Human-in-the-Loop Gate, 6) Deterministic Action Dispatcher, and 7) Immutable Append-Only Audit Ledger.',
    linkText: 'Interactive 7-layer stack demo',
    linkUrl: '/technology',
  },
  {
    id: 21,
    category: 'Deterministic AI & Architecture',
    question: 'What are WebAssembly (Wasm) policy gates in NexAgent?',
    answer:
      'WebAssembly policy gates are sandboxed, near-native execution micro-modules that enforce hard mathematical safety boundaries on all AI agent outputs. If an AI agent attempts to execute an action violating configured clinical protocols or financial budget limits, the Wasm sandbox immediately rejects the execution before it reaches databases.',
    linkText: 'Wasm security specifications',
    linkUrl: '/technology',
  },
  {
    id: 22,
    category: 'Deterministic AI & Architecture',
    question: 'What is the role of the immutable audit ledger in NexAgent?',
    answer:
      'The immutable audit ledger records every system event, AI reasoning trace, human supervisor sign-off, and database state mutation into an append-only, cryptographically hashed log. This provides tamper-proof traceability essential for NABH, JCI, HIPAA, and financial audits.',
    linkText: 'Audit ledger architecture',
    linkUrl: '/technology',
  },
  {
    id: 23,
    category: 'Deterministic AI & Architecture',
    question: 'How does NexAgent achieve sub-second response times?',
    answer:
      'NexAgent optimizes its execution pipeline through asynchronous Rust microservices, compiled WebAssembly modules, in-memory caching via Redis clusters, and specialized edge inference models, achieving end-to-end operational dispatch latencies under 280 milliseconds.',
    linkText: 'Infrastructure benchmarks',
    linkUrl: '/technology',
  },
  {
    id: 24,
    category: 'Deterministic AI & Architecture',
    question: 'What happens when an AI model confidence score falls below the required threshold?',
    answer:
      'When an inference confidence score drops below the configured safety threshold (typically 99.2% in clinical contexts), NexAgent\'s fail-safe engine automatically halts automated execution and routes the exception directly to a designated human supervisor with full context.',
    linkText: 'Human-in-the-loop workflows',
    linkUrl: '/solutions/workflow-automation',
  },
  {
    id: 25,
    category: 'Deterministic AI & Architecture',
    question: 'Does NexAgent support on-premise or sovereign cloud hosting?',
    answer:
      'Yes, NexAgent Infra can be deployed in sovereign national clouds (AWS Mumbai, GCP Delhi, Azure India Central), private enterprise clouds, or on-premise bare-metal Kubernetes clusters for complete data residency compliance.',
    linkText: 'Deployment options',
    linkUrl: '/setup',
  },
  {
    id: 26,
    category: 'Deterministic AI & Architecture',
    question: 'How are cryptographic signatures utilized in NexAgent workflows?',
    answer:
      'NexAgent requires human supervisors to sign high-stakes operational overrides using Ed25519 or ECDSA cryptographic keypairs. Each signature binds the user identity, timestamp, and payload hash directly into the permanent audit trail.',
    linkText: 'Cryptographic sign-off details',
    linkUrl: '/technology',
  },

  // Category 4: Hospitality OS (5 questions)
  {
    id: 27,
    category: 'Hospitality OS',
    question: 'What is NexAgent Hospitality OS?',
    answer:
      'NexAgent Hospitality OS is an autonomous hotel property management software (PMS) that combines dynamic algorithmic room pricing, 24/7 multilingual WhatsApp guest concierge, two-way OTA inventory synchronization, and smart housekeeping workflow dispatch.',
    linkText: 'View Hospitality OS features',
    linkUrl: '/products/hospitality',
  },
  {
    id: 28,
    category: 'Hospitality OS',
    question: 'How does NexAgent Hospitality OS prevent double bookings across OTAs?',
    answer:
      'NexAgent Hospitality OS features a bidirectional, sub-second rate and inventory synchronization engine that instantly updates Booking.com, Expedia, Agoda, and Airbnb within 450 milliseconds of any direct or third-party reservation.',
    linkText: 'OTA channel manager specs',
    linkUrl: '/products/hospitality',
  },
  {
    id: 29,
    category: 'Hospitality OS',
    question: 'How does the WhatsApp guest concierge work in NexAgent Hospitality OS?',
    answer:
      'The WhatsApp concierge handles guest contactless check-in, digital room key delivery, room service ordering, housekeeping requests, and local recommendations in 32 languages, automating over 78% of routine front-desk inquiries.',
    linkText: 'WhatsApp concierge demo',
    linkUrl: '/products/hospitality',
  },
  {
    id: 30,
    category: 'Hospitality OS',
    question: 'How does NexAgent dynamic room pricing increase hotel RevPAR?',
    answer:
      'NexAgent\'s dynamic revenue engine monitors local market demand, competitor occupancy, flight arrivals, weather, and seasonal booking pacing every 15 minutes, automatically adjusting room rates to maximize Revenue Per Available Room (RevPAR) by 18% to 27%.',
    linkText: 'RevPAR optimization engine',
    linkUrl: '/products/hospitality',
  },
  {
    id: 31,
    category: 'Hospitality OS',
    question: 'How does NexAgent automate housekeeping task dispatch?',
    answer:
      'The moment a guest checks out or requests cleaning via WhatsApp, NexAgent Hospitality OS dynamically routes priority cleaning tickets to housekeeping staff mobile devices based on floor proximity, VIP status, and upcoming check-in schedules.',
    linkText: 'Housekeeping dispatch automation',
    linkUrl: '/products/hospitality',
  },

  // Category 5: Enterprise Automation (5 questions)
  {
    id: 32,
    category: 'Enterprise Automation',
    question: 'What is Enterprise Operations Core?',
    answer:
      'Enterprise Operations Core is NexAgent\'s unified workflow orchestration engine that synchronizes distributed ERPs, CRMs, relational databases, and legacy APIs into automated, error-free operational execution pipelines.',
    linkText: 'Explore Enterprise Operations Core',
    linkUrl: '/solutions/workflow-automation',
  },
  {
    id: 33,
    category: 'Enterprise Automation',
    question: 'Which ERP and CRM systems does NexAgent Enterprise Core integrate with?',
    answer:
      'NexAgent provides native connectors for SAP S/4HANA, Oracle ERP Cloud, Microsoft Dynamics 365, Salesforce, HubSpot, Zoho, PostgreSQL, MongoDB, and enterprise Kafka streaming brokers.',
    linkText: 'View enterprise integrations',
    linkUrl: '/solutions/workflow-automation',
  },
  {
    id: 34,
    category: 'Enterprise Automation',
    question: 'How does NexAgent automate enterprise invoice processing and reconciliation?',
    answer:
      'NexAgent extracts line items from PDFs and EDI feeds, reconciles purchase orders with two-way and three-way match algorithms, flags discrepancies exceeding pre-set tolerances, and posts validated entries directly into enterprise ERP ledgers.',
    linkText: 'Invoice reconciliation automation',
    linkUrl: '/solutions/workflow-automation',
  },
  {
    id: 35,
    category: 'Enterprise Automation',
    question: 'What is Predictive Capacity Intelligence?',
    answer:
      'Predictive Capacity Intelligence is NexAgent\'s machine learning engine that forecasts staffing requirements, inventory depletion, and facility capacity 24 to 48 hours in advance with over 94% predictive accuracy.',
    linkText: 'Predictive intelligence features',
    linkUrl: '/technology',
  },
  {
    id: 36,
    category: 'Enterprise Automation',
    question: 'Can non-technical operations managers configure workflows in NexAgent?',
    answer:
      'Yes, NexAgent features a low-code visual workflow architect where operations leaders can define conditional routing rules, human approval thresholds, and escalation pathways without writing custom backend code.',
    linkText: 'Workflow designer preview',
    linkUrl: '/solutions/workflow-automation',
  },

  // Category 6: Onboarding & Integration (4 questions)
  {
    id: 37,
    category: 'Onboarding & Integration',
    question: 'How long does it take to implement NexAgent in a hospital or enterprise?',
    answer:
      'A standard NexAgent deployment takes between 14 to 30 business days, beginning with an initial 48-hour API sandbox test, followed by database mapping, policy rule definition, staff training, and parallel production dry-runs.',
    linkText: 'See onboarding timeline',
    linkUrl: '/setup',
  },
  {
    id: 38,
    category: 'Onboarding & Integration',
    question: 'Does NexAgent require replacing existing IT software or hardware?',
    answer:
      'No, NexAgent operates as an overlay integration layer that connects securely to your existing servers, databases, and software via REST, GraphQL, HL7, and Webhooks, avoiding expensive infrastructure replacement.',
    linkText: 'Architecture integration specs',
    linkUrl: '/technology',
  },
  {
    id: 39,
    category: 'Onboarding & Integration',
    question: 'What level of technical support and SLA does NexAgent provide?',
    answer:
      'NexAgent provides enterprise SLAs guaranteeing 99.95% cloud uptime, 15-minute emergency response windows for critical incidents, dedicated technical account managers, and continuous policy security audits.',
    linkText: 'Contact support team',
    linkUrl: '/about',
  },
  {
    id: 40,
    category: 'Onboarding & Integration',
    question: 'How can I test NexAgent with my organization\'s data?',
    answer:
      'You can request a tailored sandbox environment with synthetic data matching your operational parameters by booking an architecture consultation at nexagent.in or completing the interactive Solution Architect at nexagent.in/setup.',
    linkText: 'Launch Solution Architect',
    linkUrl: '/setup',
  },
];

const categories = [
  'All Questions',
  'About NexAgent',
  'NexAgent HMS',
  'Deterministic AI & Architecture',
  'Hospitality OS',
  'Enterprise Automation',
  'Onboarding & Integration',
];

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<number[]>([1, 9, 19]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All Questions' || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col font-sans selection:bg-white/20 selection:text-white">
      <Navbar onOpenStrategyCall={() => setIsModalOpen(true)} activePath="/faq" />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-white/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-mono text-zinc-300">
              <HelpCircle className="w-3.5 h-3.5 text-white" />
              <span>40 Authoritative Answers · GEO & Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Clear, factual answers regarding NexAgent HMS, deterministic AI architecture, ABDM compliance, hospital bed turnaround, and enterprise automation.
            </p>

            {/* Search Box */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. ABDM, bed turnaround, WebAssembly, pricing)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
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

          {/* FAQ Items Count */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
            <span>
              Showing <strong className="text-white">{filteredFaqs.length}</strong> of 40 questions
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpenIds(filteredFaqs.map((f) => f.id))}
                className="hover:text-white transition-colors"
              >
                Expand all
              </button>
              <span>·</span>
              <button
                onClick={() => setOpenIds([])}
                className="hover:text-white transition-colors"
              >
                Collapse all
              </button>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 border border-white/10 rounded-2xl bg-white/[0.02]">
                <p className="text-zinc-400 text-sm">No questions matched &quot;{searchQuery}&quot;.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Questions');
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-white/20 bg-white/[0.05]'
                        : 'border-white/[0.08] bg-white/[0.02] hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 select-none"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 border border-white/[0.06]">
                            {faq.category}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">Q{faq.id}</span>
                        </div>
                        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {faq.question}
                        </h2>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-white text-black' : 'text-zinc-400'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                        <p>{faq.answer}</p>
                        {faq.linkText && faq.linkUrl && (
                          <div className="mt-4 pt-3 border-t border-white/[0.06]">
                            <Link
                              href={faq.linkUrl}
                              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-medium group transition-colors"
                            >
                              <span>{faq.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Conversion Card */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Have a specific architecture question?</h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Our engineering team and founders personally review operational workflows for hospitals, hotels, and enterprise infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-md"
              >
                Schedule Architecture Consultation
              </button>
              <Link
                href="/setup"
                className="px-6 py-3 rounded-full bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.12] transition-all text-sm font-semibold"
              >
                Open Solution Architect
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
