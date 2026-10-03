import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI & Healthcare Glossary | 30 Key Terms | NexAgent',
  description:
    'Authoritative glossary of 30 enterprise operational terms: Deterministic AI, ABDM M1-M3, HL7/FHIR, ESI Triage, Bed Turnover, WebAssembly Policy Gates, and RevPAR.',
  keywords: [
    'Deterministic AI glossary',
    'ABDM compliance terms',
    'HL7 FHIR definitions',
    'ESI triage meaning',
    'hospital bed turnover definition',
    'WebAssembly policy gates',
    'RevPAR AI dynamic pricing',
    'NexAgent terminology',
    'healthcare IT glossary India',
  ],
  alternates: {
    canonical: 'https://nexagent.in/glossary',
  },
  openGraph: {
    title: 'Enterprise AI & Healthcare Glossary | NexAgent Infra',
    description:
      'Definitions for 30 high-stakes operational terms across healthcare IT, hospitality tech, and deterministic AI architecture.',
    url: 'https://nexagent.in/glossary',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Glossary - Deterministic AI & Healthcare Terms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI & Healthcare Glossary | NexAgent',
    description:
      'Definitions for 30 operational terms: ABDM, ESI Triage, HL7/FHIR, Bed Turnover, and WebAssembly Policy Gates.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

const termsList = [
  {
    name: 'Deterministic AI',
    description:
      'An architectural AI framework where identical inputs are mathematically guaranteed to produce identical, auditable, and rule-compliant outputs without random generative variability.',
  },
  {
    name: 'Human-in-the-Loop (HITL)',
    description:
      'A governance architecture where high-stakes autonomous recommendations require explicit cryptographic sign-off from human specialists before state modification occurs.',
  },
  {
    name: 'ABDM (Ayushman Bharat Digital Mission)',
    description:
      'The Indian government digital health initiative establishing unified digital infrastructure including ABHA ID, Healthcare Professional Registry, and consent-driven health data exchange.',
  },
  {
    name: 'HL7 (Health Level Seven)',
    description:
      'An international set of data exchange standards facilitating the transfer of clinical and administrative data between hospital information systems and diagnostic devices.',
  },
  {
    name: 'FHIR (Fast Healthcare Interoperability Resources)',
    description:
      'A next-generation, RESTful healthcare data interoperability standard developed by HL7 that structures electronic health records as modular JSON and XML resources.',
  },
  {
    name: 'ESI Triage (Emergency Severity Index)',
    description:
      'A five-level emergency department triage algorithm categorizing incoming patients from Level 1 (immediate resuscitation) to Level 5 (non-urgent) based on acuity and expected resource needs.',
  },
  {
    name: 'Bed Turnover Time',
    description:
      'The total elapsed duration between a patient discharge order and the physical preparation and assignment of that clean bed to the next admitted patient.',
  },
  {
    name: 'WebAssembly (Wasm) Policy Gate',
    description:
      'A high-performance, memory-safe sandboxed execution boundary that enforces immutable algorithmic constraints on AI agent outputs before database execution.',
  },
  {
    name: 'PHI (Protected Health Information) Redaction',
    description:
      'The automated masking or tokenization of sensitive medical identifiers (names, phone numbers, Aadhaar, ABHA) prior to cloud processing to guarantee privacy.',
  },
  {
    name: 'Immutable Audit Ledger',
    description:
      'An append-only, cryptographically hashed transactional journal that permanently records every system event, AI inference, and supervisor authorization for audit compliance.',
  },
  {
    name: 'RevPAR (Revenue Per Available Room)',
    description:
      'The primary financial benchmark metric in hospitality calculated by multiplying a hotel\'s Average Daily Rate (ADR) by its occupancy rate.',
  },
  {
    name: 'Two-Way OTA Synchronization',
    description:
      'Real-time bidirectional inventory and rate mirroring between a hotel property management system and Online Travel Agencies (OTAs) to eliminate double bookings.',
  },
  {
    name: 'Predictive Capacity Intelligence',
    description:
      'Machine learning algorithms that analyze historical admission trends, seasonality, and clinical velocity to forecast ward occupancy and staffing needs 24 to 48 hours in advance.',
  },
  {
    name: 'Two-Phase Commit (2PC)',
    description:
      'A distributed transaction protocol ensuring that multiple independent databases and microservices either commit a coordinated state update simultaneously or roll back cleanly.',
  },
  {
    name: 'Electronic Medical Record (EMR / EHR)',
    description:
      'A digital version of a patient\'s medical chart maintaining clinical history, diagnoses, medications, lab test results, and immunization records.',
  },
  {
    name: 'TPA (Third-Party Administrator) Claims',
    description:
      'The administrative process through which hospitals submit cashless health insurance pre-authorizations and settlement paperwork to insurance intermediaries for approval.',
  },
  {
    name: 'NABH (National Accreditation Board for Hospitals)',
    description:
      'The premier healthcare quality standards accreditation body in India certifying hospital clinical protocols, patient safety, and administrative excellence.',
  },
  {
    name: 'FEFO Inventory Management',
    description:
      'First-Expired, First-Out logistics scheduling that ensures pharmaceuticals with the earliest expiration dates are dispensed before newly acquired stock batches.',
  },
  {
    name: 'WhatsApp Guest Concierge',
    description:
      'An automated conversational interface enabling hotel guests to complete contactless check-in, request amenities, and submit room service orders via WhatsApp messaging.',
  },
  {
    name: 'Hospital Operating System (Hospital OS)',
    description:
      'A unified digital software core that coordinates outpatient registration, bed management, clinical documentation, billing, pharmacy, and diagnostic departments into a synchronized workflow.',
  },
  {
    name: 'Dynamic Pricing Engine',
    description:
      'An algorithmic revenue management system that continuously adjusts room rates based on real-time competitor rates, demand spikes, local events, and pacing velocity.',
  },
  {
    name: 'Outpatient Department (OPD) Flow Optimization',
    description:
      'Algorithmic queue management that dynamically redistributes patient waitlists across doctor consultation chambers and diagnostic counters to minimize total waiting time.',
  },
  {
    name: 'Inpatient Department (IPD) Orchestration',
    description:
      'The coordinated management of inpatient admissions, clinical rounds, medication charting, nursing shifts, and discharge clearances across hospital wards.',
  },
  {
    name: 'Zero Trust Security Architecture',
    description:
      'A cybersecurity paradigm requiring strict identity verification and continuous authorization for every user, device, and API call, regardless of network location.',
  },
  {
    name: 'LLM Hallucination Mitigation',
    description:
      'Engineering guardrails that constrain neural network outputs through schema validation, knowledge graphs, and mathematical policy boundaries to prevent fabricated assertions.',
  },
  {
    name: 'Channel Manager',
    description:
      'A hospitality software module that distributes inventory and room rates across multiple distribution channels, including OTAs, Global Distribution Systems, and direct web booking engines.',
  },
  {
    name: 'PACS / DICOM Imaging Integration',
    description:
      'Picture Archiving and Communication Systems integrated with the Digital Imaging and Communications in Medicine standard for storing, retrieving, and reviewing radiological images.',
  },
  {
    name: 'Enterprise Operations Core',
    description:
      'A central workflow automation substrate that eliminates cross-departmental friction by orchestrating data movement and business logic across legacy ERPs and CRMs.',
  },
  {
    name: 'Edge Computing Node',
    description:
      'On-premise compute infrastructure located within a hospital or hotel facility that processes sensitive telemetry and runs local operations during internet outages.',
  },
  {
    name: 'DPDP Act 2023 (Digital Personal Data Protection)',
    description:
      'India\'s comprehensive data privacy legislation governing the lawful collection, processing, storage, and cross-border transfer of citizens\' digital personal data.',
  },
];

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://nexagent.in/glossary#terms',
    name: 'NexAgent Enterprise AI & Healthcare IT Glossary',
    description:
      'Authoritative definitions of deterministic AI, hospital operations, ABDM compliance, and enterprise automation terminology.',
    url: 'https://nexagent.in/glossary',
    hasDefinedTerm: termsList.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.name,
      description: term.description,
      inDefinedTermSet: 'https://nexagent.in/glossary#terms',
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexagent.in/' },
      { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://nexagent.in/glossary' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
