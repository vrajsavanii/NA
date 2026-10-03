import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospital Management Software India | ABDM HMS | NexAgent',
  description:
    'NexAgent HMS is India\'s AI hospital management software. Automates ESI triage, reduces bed turnaround to 35 min, ABDM M1/M2/M3 compliant, HL7/FHIR, TPA claims. Book a demo.',
  keywords: [
    'hospital management software India',
    'best HMS software India',
    'AI hospital software India',
    'ABDM compliant HMS',
    'ABDM M1 M2 M3 hospital software',
    'ESI triage automation India',
    'hospital bed turnover system',
    'HL7 FHIR integration India',
    'TPA cashless claims software',
    'NexAgent HMS',
    'deterministic AI HMS India',
    'hospital management system ABDM India',
  ],
  alternates: {
    canonical: 'https://nexagent.in/products/hms',
  },
  openGraph: {
    title: 'Hospital Management Software India | ABDM HMS | NexAgent',
    description:
      'NexAgent HMS: AI-powered hospital management software for India. ESI triage, 35-min bed turnaround, ABDM M1/M2/M3 compliant, HL7/FHIR integration, TPA claims automation.',
    url: 'https://nexagent.in/products/hms',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent HMS - Hospital Management Software India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Management Software India | NexAgent HMS',
    description:
      'AI HMS for Indian hospitals. 35-min bed turnaround, ABDM M1/M2/M3, ESI triage automation. 100% physician-in-the-loop. Book a sandbox demo.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

export default function HmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hmsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexagent.in/' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://nexagent.in/#products' },
          { '@type': 'ListItem', position: 3, name: 'Hospital Management Software (HMS)', item: 'https://nexagent.in/products/hms' },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://nexagent.in/products/hms#product',
        name: 'NexAgent HMS',
        alternateName: ['NexAgent Hospital Management System', 'NexAgent HMS Software India', 'ABDM Compliant HMS India'],
        applicationCategory: 'HealthApplication',
        applicationSubCategory: 'Hospital Management Software',
        operatingSystem: 'Cloud, Web',
        description:
          'NexAgent HMS is the AI-powered hospital management software built for Indian hospitals. It reduces bed turnaround to 35 minutes, automates ESI outpatient triage, processes TPA cashless claims, and is fully ABDM M1/M2/M3 compliant with HL7/FHIR integration and human-in-the-loop physician approval on all high-stakes decisions.',
        featureList: [
          'ESI 5-level outpatient triage automation',
          '35-minute bed turnover orchestration (vs 90-min industry average)',
          'ABDM M1/M2/M3 compliance (Ayushman Bharat Digital Mission)',
          'HL7/FHIR healthcare data integration',
          'TPA cashless claims processing',
          'Digital pharmacy formulary management',
          'Human-in-the-loop physician approval gates',
          'Predictive 24-48h ward capacity forecasting',
          'Immutable append-only audit ledger',
          'In-memory PHI redaction before AI reasoning',
          'WebAssembly policy engine for zero-hallucination decisions',
        ],
        url: 'https://nexagent.in/products/hms',
        offers: {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', price: 'Contact for pricing', priceCurrency: 'INR' },
          seller: { '@id': 'https://nexagent.in/#organization' },
        },
        publisher: { '@id': 'https://nexagent.in/#organization' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best hospital management software in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent HMS is an AI-powered hospital management software (HMS) built specifically for Indian hospitals. It automates ESI outpatient triage, reduces bed turnaround to 35 minutes, is fully ABDM M1/M2/M3 compliant, integrates with HL7/FHIR standards, and processes TPA cashless claims with zero manual data entry.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is NexAgent HMS ABDM compliant?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. NexAgent HMS is fully ABDM (Ayushman Bharat Digital Mission) compliant at all three levels: M1 (digital health records), M2 (ABHA health ID linking), and M3 (full ABHA integration). Indian hospitals using NexAgent HMS can meet all National Digital Health Mission requirements out of the box.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does NexAgent HMS reduce hospital bed turnaround time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent HMS reduces hospital bed turnaround to 35 minutes by automating the post-discharge workflow. Upon physician discharge sign-off, the system simultaneously dispatches housekeeping, triggers sanitization verification, updates OPD triage queue with bed availability, and prepares the next patient intake. The industry average bed turnaround in India is 90+ minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between NexAgent HMS and legacy hospital management software?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Legacy HMS software is a passive record-keeping database: staff must manually enter, update, and retrieve data. NexAgent HMS is an active operational system that initiates workflows, dispatches tasks automatically, enforces clinical protocols via WebAssembly policy rules, and requires physician cryptographic sign-off on all high-risk decisions.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hmsJsonLd) }}
      />
      {children}
    </>
  );
}
