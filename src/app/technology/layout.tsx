import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deterministic AI Architecture India | 7-Layer Stack | NexAgent',
  description:
    'NexAgent\'s 7-layer deterministic AI architecture: edge ingestion, in-memory PHI redaction, WebAssembly policy engine, two-phase commit, and immutable audit ledger. Zero hallucinations.',
  keywords: [
    'deterministic AI software India',
    'deterministic AI architecture',
    'WebAssembly AI policy engine',
    '7 layer AI operating system',
    'human in the loop AI India',
    'HIPAA SOC2 compliant AI India',
    'NexAgent Technology',
    'AI safety architecture India',
  ],
  alternates: {
    canonical: 'https://nexagent.in/technology',
  },
  openGraph: {
    title: 'Deterministic AI Architecture India | 7-Layer Stack | NexAgent',
    description:
      'How NexAgent eliminates AI hallucinations: 7-layer deterministic stack with WebAssembly policy gates, in-memory PHI redaction, and cryptographic audit ledger.',
    url: 'https://nexagent.in/technology',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent 7-Layer Deterministic AI Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deterministic AI Architecture India | NexAgent',
    description:
      'How NexAgent builds zero-hallucination AI: WebAssembly policy gates, in-memory PHI redaction, two-phase commit, cryptographic audit.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const techJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nexagent.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Technology',
        item: 'https://nexagent.in/technology',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techJsonLd) }}
      />
      {children}
    </>
  );
}
