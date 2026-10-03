import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Deterministic AI & HMS | NexAgent',
  description:
    '40 authoritative answers on NexAgent HMS, ABDM compliance, hospital bed turnaround, deterministic AI safety, WebAssembly policy gates, and enterprise automation.',
  keywords: [
    'NexAgent FAQ',
    'hospital management software India questions',
    'ABDM compliance FAQ',
    'deterministic AI FAQ',
    'AI hospital software questions',
    'hotel PMS FAQ India',
    'enterprise automation FAQ',
    'NexAgent founders FAQ',
    'Manthan Kachhadiya NexAgent',
    'Vraj Savani NexAgent',
  ],
  alternates: {
    canonical: 'https://nexagent.in/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Deterministic AI & HMS | NexAgent',
    description:
      '40 authoritative answers on NexAgent HMS, ABDM M1-M3 compliance, hospital bed turnover, deterministic AI safety, and enterprise operations.',
    url: 'https://nexagent.in/faq',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Infra FAQ - Deterministic AI & HMS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent FAQ | Deterministic AI & Hospital OS',
    description:
      'Authoritative answers on hospital management software, ABDM compliance, WebAssembly policy gates, and AI automation in India.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

const faqData = [
  {
    q: 'What is NexAgent Infra?',
    a: 'NexAgent Infra is an enterprise software company founded in 2026 that builds deterministic AI operating systems for hospitals, hotels, and core business operations. Operating globally from India, the company provides autonomous workflow infrastructure with zero hallucination risk, human-in-the-loop cryptographic sign-offs, and WebAssembly policy gates.',
  },
  {
    q: 'Who founded NexAgent Infra?',
    a: 'NexAgent Infra was founded by Manthan Kachhadiya (CEO & Chief Architect) and Vraj Savani (COO & Head of Operations). Manthan leads distributed systems architecture and deterministic runtime engineering, while Vraj oversees enterprise deployments, operational workflows, and healthcare partner scaling.',
  },
  {
    q: 'Where is NexAgent headquartered and where does it operate?',
    a: 'NexAgent Infra is headquartered in Gujarat, India, and operates globally across India, Southeast Asia, and the Middle East. Its cloud-native architecture supports both multi-tenant cloud and isolated on-premise sovereign cloud deployments.',
  },
  {
    q: 'How is NexAgent different from traditional AI agencies?',
    a: 'NexAgent is a deep-tech software product infrastructure company, not a prompt engineering agency or consulting shop. Unlike agencies wrapping third-party chatbot APIs, NexAgent engineers a proprietary 7-layer deterministic architecture governed by WebAssembly rules and cryptographic human approval gates.',
  },
  {
    q: 'What core products does NexAgent offer?',
    a: 'NexAgent offers four core enterprise products: NexAgent HMS (Hospital Management System), NexAgent Hospitality OS (Hotel PMS & Concierge), Enterprise Operations Core (Unified Workflow Engine), and Predictive Capacity Intelligence (24–48h operational demand forecasting).',
  },
  {
    q: 'How does NexAgent ensure zero hallucinations in high-stakes environments?',
    a: 'NexAgent eliminates hallucinations by replacing unstructured LLM generation with deterministic finite state machines, Pydantic/Zod schema enforcement, in-memory PHI redaction, and WebAssembly sandboxed policy boundaries. All decisions are validated against strict constraint boundaries before any database state change occurs.',
  },
  {
    q: 'How does NexAgent handle data privacy and healthcare compliance?',
    a: 'NexAgent enforces in-memory PII/PHI redaction before any reasoning engine processes data, maintains HIPAA and SOC2 alignment, and adheres to India\'s Digital Personal Data Protection (DPDP) Act 2023. No patient or guest data is ever utilized for third-party model training.',
  },
  {
    q: 'How can an enterprise or hospital get started with NexAgent?',
    a: 'Organizations can schedule an architectural briefing or use the interactive Solution Architect tool at nexagent.in/setup to scope integration requirements. Sandbox environments are typically provisioned within 48 to 72 hours for qualified enterprises.',
  },
  {
    q: 'What is NexAgent HMS?',
    a: 'NexAgent HMS is an AI-powered hospital management software operating system engineered specifically for Indian multi-specialty and corporate hospitals. It automates ESI triage, orchestrates bed turnover, processes TPA insurance claims, and provides end-to-end ABDM M1, M2, and M3 compliance.',
  },
  {
    q: 'Is NexAgent HMS ABDM compliant?',
    a: 'Yes, NexAgent HMS is fully compliant with Ayushman Bharat Digital Mission (ABDM) Milestone 1 (ABHA creation & verification), Milestone 2 (Healthcare Professional & Facility Registry), and Milestone 3 (Health Information Exchange & Consent Management via unified FHIR gateways).',
  },
  {
    q: 'How does NexAgent HMS reduce hospital bed turnaround time?',
    a: 'NexAgent HMS reduces hospital bed turnover from the industry average of 90 minutes down to 35 minutes—a 61% reduction. It automates simultaneous triggers across housekeeping, patient billing clearance, nursing handoffs, and admission desks the moment a discharge order is digitally signed.',
  },
  {
    q: 'What is NexAgent\'s Emergency Severity Index (ESI) outpatient triage system?',
    a: 'NexAgent HMS automates outpatient and emergency triage by ingesting patient vitals, symptoms, and chief complaints to compute an ESI Level 1–5 classification. The triage recommendation is presented to the triage nurse within 12 seconds with required physician cryptographic sign-off.',
  },
  {
    q: 'How does NexAgent HMS integrate with existing hospital EMRs and PACS?',
    a: 'NexAgent HMS connects to legacy EMRs, LIS (Laboratory Information Systems), and PACS imaging servers using bidirectional HL7 v2, HL7 FHIR R4, and DICOM standards. It runs as an intelligent orchestration layer on top of existing databases without requiring disruptive system overhauls.',
  },
  {
    q: 'How does NexAgent HMS accelerate TPA cashless insurance claims?',
    a: 'NexAgent HMS automates pre-authorization document aggregation, cross-checks clinical diagnosis against insurance policy exclusion rules, and submits structured e-claims directly to TPAs. This reduces pre-authorization wait times from 4–6 hours to under 22 minutes.',
  },
  {
    q: 'What is the pricing model for NexAgent HMS?',
    a: 'NexAgent HMS is priced on a predictable per-bed monthly subscription or annual software license tier based on hospital operational capacity. Custom pricing includes full ABDM gateway integration, dedicated technical onboarding, and 24/7 SLA infrastructure support.',
  },
  {
    q: 'Does NexAgent HMS replace clinical doctors and nurses?',
    a: 'No, NexAgent HMS never replaces medical staff; it functions as an operational co-pilot with mandatory human-in-the-loop governance. Every clinical triage, prescription validation, and discharge sign-off requires a licensed doctor\'s explicit approval.',
  },
  {
    q: 'What pharmacy and inventory management features are included in NexAgent HMS?',
    a: 'NexAgent HMS features real-time FEFO (First-Expired, First-Out) drug batch tracking, automatic reorder threshold calculations, electronic prescription barcode dispensing, and integrated narcotic drug logbooks compliant with CDSCO regulations.',
  },
  {
    q: 'Can NexAgent HMS operate offline during hospital network outages?',
    a: 'Yes, NexAgent HMS features local edge-node synchronization with two-phase commit protocols. Critical emergency admissions, triage, and pharmacy dispensing continue uninterrupted on local subnets during WAN outages, automatically reconciling with the central cloud once connectivity is restored.',
  },
  {
    q: 'What is deterministic AI, and why is it superior to generative AI for enterprise operations?',
    a: 'Deterministic AI is an architectural framework where identical inputs are guaranteed to yield identical, mathematically verifiable, and auditable outputs. In high-stakes healthcare and enterprise environments, deterministic AI prevents dangerous LLM hallucinations, ensuring 100% adherence to regulatory and operational rules.',
  },
  {
    q: 'What is NexAgent\'s 7-layer architecture?',
    a: 'NexAgent\'s 7-layer stack consists of: 1) Data Ingestion & Sanitization, 2) In-Memory PHI/PII Redaction, 3) Semantic Intent Parsing, 4) WebAssembly Policy Engine, 5) Cryptographic Human-in-the-Loop Gate, 6) Deterministic Action Dispatcher, and 7) Immutable Append-Only Audit Ledger.',
  },
  {
    q: 'What are WebAssembly (Wasm) policy gates in NexAgent?',
    a: 'WebAssembly policy gates are sandboxed, near-native execution micro-modules that enforce hard mathematical safety boundaries on all AI agent outputs. If an AI agent attempts to execute an action violating configured clinical protocols or financial budget limits, the Wasm sandbox immediately rejects the execution before it reaches databases.',
  },
  {
    q: 'What is the role of the immutable audit ledger in NexAgent?',
    a: 'The immutable audit ledger records every system event, AI reasoning trace, human supervisor sign-off, and database state mutation into an append-only, cryptographically hashed log. This provides tamper-proof traceability essential for NABH, JCI, HIPAA, and financial audits.',
  },
  {
    q: 'How does NexAgent achieve sub-second response times?',
    a: 'NexAgent optimizes its execution pipeline through asynchronous Rust microservices, compiled WebAssembly modules, in-memory caching via Redis clusters, and specialized edge inference models, achieving end-to-end operational dispatch latencies under 280 milliseconds.',
  },
  {
    q: 'What happens when an AI model confidence score falls below the required threshold?',
    a: 'When an inference confidence score drops below the configured safety threshold (typically 99.2% in clinical contexts), NexAgent\'s fail-safe engine automatically halts automated execution and routes the exception directly to a designated human supervisor with full context.',
  },
  {
    q: 'Does NexAgent support on-premise or sovereign cloud hosting?',
    a: 'Yes, NexAgent Infra can be deployed in sovereign national clouds (AWS Mumbai, GCP Delhi, Azure India Central), private enterprise clouds, or on-premise bare-metal Kubernetes clusters for complete data residency compliance.',
  },
  {
    q: 'How are cryptographic signatures utilized in NexAgent workflows?',
    a: 'NexAgent requires human supervisors to sign high-stakes operational overrides using Ed25519 or ECDSA cryptographic keypairs. Each signature binds the user identity, timestamp, and payload hash directly into the permanent audit trail.',
  },
  {
    q: 'What is NexAgent Hospitality OS?',
    a: 'NexAgent Hospitality OS is an autonomous hotel property management software (PMS) that combines dynamic algorithmic room pricing, 24/7 multilingual WhatsApp guest concierge, two-way OTA inventory synchronization, and smart housekeeping workflow dispatch.',
  },
  {
    q: 'How does NexAgent Hospitality OS prevent double bookings across OTAs?',
    a: 'NexAgent Hospitality OS features a bidirectional, sub-second rate and inventory synchronization engine that instantly updates Booking.com, Expedia, Agoda, and Airbnb within 450 milliseconds of any direct or third-party reservation.',
  },
  {
    q: 'How does the WhatsApp guest concierge work in NexAgent Hospitality OS?',
    a: 'The WhatsApp concierge handles guest contactless check-in, digital room key delivery, room service ordering, housekeeping requests, and local recommendations in 32 languages, automating over 78% of routine front-desk inquiries.',
  },
  {
    q: 'How does NexAgent dynamic room pricing increase hotel RevPAR?',
    a: 'NexAgent\'s dynamic revenue engine monitors local market demand, competitor occupancy, flight arrivals, weather, and seasonal booking pacing every 15 minutes, automatically adjusting room rates to maximize Revenue Per Available Room (RevPAR) by 18% to 27%.',
  },
  {
    q: 'How does NexAgent automate housekeeping task dispatch?',
    a: 'The moment a guest checks out or requests cleaning via WhatsApp, NexAgent Hospitality OS dynamically routes priority cleaning tickets to housekeeping staff mobile devices based on floor proximity, VIP status, and upcoming check-in schedules.',
  },
  {
    q: 'What is Enterprise Operations Core?',
    a: 'Enterprise Operations Core is NexAgent\'s unified workflow orchestration engine that synchronizes distributed ERPs, CRMs, relational databases, and legacy APIs into automated, error-free operational execution pipelines.',
  },
  {
    q: 'Which ERP and CRM systems does NexAgent Enterprise Core integrate with?',
    a: 'NexAgent provides native connectors for SAP S/4HANA, Oracle ERP Cloud, Microsoft Dynamics 365, Salesforce, HubSpot, Zoho, PostgreSQL, MongoDB, and enterprise Kafka streaming brokers.',
  },
  {
    q: 'How does NexAgent automate enterprise invoice processing and reconciliation?',
    a: 'NexAgent extracts line items from PDFs and EDI feeds, reconciles purchase orders with two-way and three-way match algorithms, flags discrepancies exceeding pre-set tolerances, and posts validated entries directly into enterprise ERP ledgers.',
  },
  {
    q: 'What is Predictive Capacity Intelligence?',
    a: 'Predictive Capacity Intelligence is NexAgent\'s machine learning engine that forecasts staffing requirements, inventory depletion, and facility capacity 24 to 48 hours in advance with over 94% predictive accuracy.',
  },
  {
    q: 'Can non-technical operations managers configure workflows in NexAgent?',
    a: 'Yes, NexAgent features a low-code visual workflow architect where operations leaders can define conditional routing rules, human approval thresholds, and escalation pathways without writing custom backend code.',
  },
  {
    q: 'How long does it take to implement NexAgent in a hospital or enterprise?',
    a: 'A standard NexAgent deployment takes between 14 to 30 business days, beginning with an initial 48-hour API sandbox test, followed by database mapping, policy rule definition, staff training, and parallel production dry-runs.',
  },
  {
    q: 'Does NexAgent require replacing existing IT software or hardware?',
    a: 'No, NexAgent operates as an overlay integration layer that connects securely to your existing servers, databases, and software via REST, GraphQL, HL7, and Webhooks, avoiding expensive infrastructure replacement.',
  },
  {
    q: 'What level of technical support and SLA does NexAgent provide?',
    a: 'NexAgent provides enterprise SLAs guaranteeing 99.95% cloud uptime, 15-minute emergency response windows for critical incidents, dedicated technical account managers, and continuous policy security audits.',
  },
  {
    q: 'How can I test NexAgent with my organization\'s data?',
    a: 'You can request a tailored sandbox environment with synthetic data matching your operational parameters by booking an architecture consultation at nexagent.in or completing the interactive Solution Architect at nexagent.in/setup.',
  },
];

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexagent.in/' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://nexagent.in/faq' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
