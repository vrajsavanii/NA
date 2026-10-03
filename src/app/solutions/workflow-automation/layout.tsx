import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Workflow Automation India | Enterprise Ops Core | NexAgent',
  description:
    'NexAgent Enterprise Ops Core: deterministic AI workflow automation for Indian enterprises. Connects ERP, CRM & databases into policy-bounded pipelines. Human-in-the-loop governance.',
  keywords: [
    'AI workflow automation India',
    'enterprise workflow automation India',
    'deterministic AI workflow software',
    'enterprise automation software India',
    'CRM ERP automation India',
    'human in the loop AI governance',
    'business process automation India',
    'NexAgent Enterprise Core',
  ],
  alternates: {
    canonical: 'https://nexagent.in/solutions/workflow-automation',
  },
  openGraph: {
    title: 'AI Workflow Automation India | Enterprise Ops Core | NexAgent',
    description:
      'Deterministic AI workflow automation connecting ERP, CRM & databases. Policy-bounded pipelines with cryptographic audit logging for Indian enterprises.',
    url: 'https://nexagent.in/solutions/workflow-automation',
    type: 'website',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Enterprise Workflow Automation India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation India | NexAgent Enterprise Core',
    description:
      'Policy-bounded ERP/CRM/database pipelines for Indian enterprises. Zero unauthorized bypass. Cryptographic audit. Human-in-the-loop.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
};

export default function WorkflowAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const workflowJsonLd = {
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
        name: 'Solutions',
        item: 'https://nexagent.in/#solutions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Workflow Automation',
        item: 'https://nexagent.in/solutions/workflow-automation',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowJsonLd) }}
      />
      {children}
    </>
  );
}
