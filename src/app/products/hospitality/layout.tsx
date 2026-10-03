import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Hotel Management Software India | PMS & OTA Sync | NexAgent',
  description:
    'NexAgent Hospitality OS: AI hotel PMS for India. Dynamic RevPAR pricing, 24/7 WhatsApp concierge, Booking.com/Expedia/Airbnb OTA sync, room turnover automation. Request a demo.',
  keywords: [
    'AI hotel management software India',
    'hotel PMS India',
    'hotel management AI India',
    'dynamic pricing hotel software India',
    'WhatsApp hotel concierge',
    'OTA sync hotel software',
    'hotel revenue management software India',
    'NexAgent Hospitality OS',
    'RevPAR optimization software India',
  ],
  alternates: {
    canonical: 'https://nexagent.in/products/hospitality',
  },
  openGraph: {
    title: 'AI Hotel Management Software India | PMS & OTA Sync | NexAgent',
    description:
      'NexAgent Hospitality OS: Dynamic pricing AI, 24/7 WhatsApp concierge, Booking.com/Expedia/Airbnb OTA sync for Indian hotels. Request a demo.',
    url: 'https://nexagent.in/products/hospitality',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Hospitality OS - AI Hotel Management Software India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Hotel Management Software India | NexAgent Hospitality OS',
    description:
      'Dynamic RevPAR pricing, 24/7 WhatsApp concierge, OTA sync for Indian hotels. Deterministic AI. Human-in-the-loop. Book a demo.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hospitalityJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
            name: 'Products',
            item: 'https://nexagent.in/#products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Hospitality OS',
            item: 'https://nexagent.in/products/hospitality',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'NexAgent Hospitality OS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud / Web',
        description:
          'AI-powered hotel property management system featuring dynamic pricing, 24/7 WhatsApp concierge, and automated room turnover dispatch.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalityJsonLd) }}
      />
      {children}
    </>
  );
}
