import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NexAgent | AI Automation Company India | Manthan & Vraj',
  description:
    'NexAgent Infra: AI automation startup from Gujarat, India. Founded 2026 by Manthan Kachhadiya (CEO) & Vraj Savani (COO). Building deterministic AI for hospitals, hotels & enterprises.',
  alternates: {
    canonical: 'https://nexagent.in/about',
  },
  keywords: [
    'NexAgent founders',
    'AI startup India 2026',
    'AI automation company India',
    'Manthan Kachhadiya NexAgent',
    'Vraj Savani NexAgent',
    'deterministic AI company India',
    'AI company Gujarat India',
  ],
  openGraph: {
    title: 'About NexAgent | AI Automation Company India | Manthan & Vraj',
    description:
      'NexAgent Infra: Indian AI automation company. Meet founders Manthan Kachhadiya (CEO, AI Architecture) and Vraj Savani (COO, Product & Operations). Gujarat, India.',
    url: 'https://nexagent.in/about',
    type: 'profile',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Founders - Manthan Kachhadiya and Vraj Savani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NexAgent | AI Automation Company India',
    description:
      'Founders Manthan Kachhadiya & Vraj Savani. Building zero-hallucination deterministic AI for Indian hospitals, hotels & enterprises.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
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
        name: 'About',
        item: 'https://nexagent.in/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
