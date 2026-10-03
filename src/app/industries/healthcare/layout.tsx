import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare AI Software India | Hospital Automation | NexAgent',
  description:
    'NexAgent for Indian healthcare: AI-powered hospital automation with ABDM compliance, ESI triage, 35-min bed turnaround, HL7/FHIR integration, and doctor-in-the-loop safety.',
  keywords: [
    'healthcare AI software India',
    'hospital automation software India',
    'ABDM compliance hospital India',
    'healthcare technology India',
    'AI healthcare India 2026',
    'hospital network operations India',
    'bed turnover automation India',
    'NexAgent Healthcare',
    'deterministic AI healthcare India',
  ],
  alternates: {
    canonical: 'https://nexagent.in/industries/healthcare',
  },
  openGraph: {
    title: 'Healthcare AI Software India | Hospital Automation | NexAgent',
    description:
      'NexAgent for Indian hospitals: ABDM-compliant AI automation, ESI triage, 35-min bed turnaround, HL7/FHIR integration, and 100% doctor-in-the-loop safety architecture.',
    url: 'https://nexagent.in/industries/healthcare',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Healthcare AI Software India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI Software India | NexAgent',
    description:
      'ABDM-compliant hospital automation: ESI triage, 35-min bed turnaround, HL7/FHIR, doctor-in-the-loop. For Indian hospitals.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

export default function HealthcareIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const healthcareJsonLd = {
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
        name: 'Industries',
        item: 'https://nexagent.in/#industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Healthcare',
        item: 'https://nexagent.in/industries/healthcare',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareJsonLd) }}
      />
      {children}
    </>
  );
}
