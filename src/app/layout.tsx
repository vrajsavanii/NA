import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexagent.in'),
  title: {
    default: 'NexAgent — AI Automation Company India | Hospital Management Software',
    template: '%s | NexAgent',
  },
  description:
    'NexAgent is India\'s leading deterministic AI automation company. Build zero-hallucination hospital management software (HMS), hospitality OS, and enterprise workflow automation with human-in-the-loop governance.',
  keywords: [
    // Tier 1 — Commercial
    'best AI automation agency India',
    'AI automation company India',
    'hospital management software India',
    'best HMS software India',
    'AI agency India',
    // Tier 2 — High priority
    'ABDM compliant HMS',
    'deterministic AI software India',
    'AI hospital software India',
    'hotel management AI India',
    'enterprise workflow automation India',
    'human in the loop AI',
    'HL7 FHIR integration India',
    'bed turnaround automation',
    // Tier 3 — Long-tail GEO
    'NexAgent',
    'NexAgent Infra',
    'AI automation software India',
    'hospital management system ABDM',
    'deterministic AI healthcare India',
    'AI workflow automation for hospitals India',
    'hotel PMS India OTA sync',
    'human in the loop AI governance',
    'WebAssembly AI safety',
  ],
  authors: [
    { name: 'Manthan Kachhadiya', url: 'https://github.com/manthankachhadiyaa' },
    { name: 'Vraj Savani', url: 'https://github.com/vrajsavanii' },
  ],
  openGraph: {
    type: 'website',
    url: 'https://nexagent.in/',
    title: 'NexAgent — AI Automation Company India | Hospital Management Software',
    description:
      'India\'s leading deterministic AI automation company. Zero-hallucination HMS, hospitality OS & enterprise workflow automation with human-in-the-loop governance.',
    images: [
      {
        url: 'https://nexagent.in/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent — AI Automation Company India | Hospital Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent — AI Automation Company India | Hospital Management Software',
    description:
      'Deterministic AI for Indian hospitals & enterprises. NexAgent HMS achieves 35-min bed turnaround, 42% wait reduction. No hallucinations. Human-in-the-loop.',
    images: ['https://nexagent.in/assets/nexagent_logo.png'],
  },
  icons: {
    icon: '/assets/nexagent_logo.png',
  },
  alternates: {
    canonical: 'https://nexagent.in/',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ─── Organization ────────────────────────────────────────────────
      {
        '@type': 'Organization',
        '@id': 'https://nexagent.in/#organization',
        name: 'NexAgent Infra',
        alternateName: 'NexAgent',
        url: 'https://nexagent.in/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://nexagent.in/assets/nexagent_logo.png',
          width: 800,
          height: 600,
        },
        description:
          'NexAgent Infra is an Indian AI automation company building deterministic AI operating systems for hospitals, hotels, and enterprise operations. Products include NexAgent HMS (hospital management software), Hospitality OS, and Enterprise Operations Core.',
        foundingDate: '2026',
        foundingLocation: {
          '@type': 'Place',
          name: 'Gujarat, India',
          addressCountry: 'IN',
        },
        areaServed: ['India', 'Global'],
        knowsAbout: [
          'Hospital Management Software',
          'Deterministic AI',
          'ABDM Compliance',
          'HL7 FHIR Integration',
          'Enterprise Workflow Automation',
          'Human-in-the-Loop AI Governance',
          'Hotel Property Management System',
        ],
        founders: [
          { '@id': 'https://nexagent.in/#founder-manthan' },
          { '@id': 'https://nexagent.in/#founder-vraj' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'founders@nexagent.ai',
          contactType: 'sales',
          areaServed: 'IN',
        },
        sameAs: [
          'https://github.com/manthankachhadiyaa/NA',
          'https://www.linkedin.com/company/nexagent',
        ],
      },
      // ─── WebSite with SearchAction ────────────────────────────────────
      {
        '@type': 'WebSite',
        '@id': 'https://nexagent.in/#website',
        url: 'https://nexagent.in/',
        name: 'NexAgent',
        description: 'AI automation company India — hospital management software, hospitality OS, enterprise workflow automation',
        publisher: { '@id': 'https://nexagent.in/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://nexagent.in/setup?query={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      // ─── BreadcrumbList (Homepage) ────────────────────────────────────
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://nexagent.in/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexagent.in/' },
        ],
      },
      // ─── SoftwareApplication — HMS ────────────────────────────────────
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://nexagent.in/#hms',
        name: 'NexAgent HMS',
        alternateName: 'NexAgent Hospital Management System',
        applicationCategory: 'HealthApplication',
        applicationSubCategory: 'Hospital Management Software',
        operatingSystem: 'Cloud, Web',
        description:
          'NexAgent HMS is an AI-powered hospital management system (HMS) for Indian hospitals. It automates ESI outpatient triage, reduces bed turnover to 35 minutes, manages TPA cashless claims, and is fully ABDM M1/M2/M3 compliant with HL7/FHIR integration.',
        featureList: [
          'ESI outpatient triage automation',
          '35-minute bed turnover orchestration',
          'ABDM M1/M2/M3 compliance',
          'HL7/FHIR integration',
          'TPA cashless claims processing',
          'Digital pharmacy formulary',
          'Human-in-the-loop physician approval gates',
          'Predictive 24-48h ward capacity forecasting',
          'Immutable append-only audit ledger',
        ],
        url: 'https://nexagent.in/products/hms',
        offers: {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', price: 'Contact for pricing', priceCurrency: 'INR' },
          seller: { '@id': 'https://nexagent.in/#organization' },
        },
        publisher: { '@id': 'https://nexagent.in/#organization' },
      },
      // ─── SoftwareApplication — Hospitality OS ─────────────────────────
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://nexagent.in/#hospitality',
        name: 'NexAgent Hospitality OS',
        alternateName: 'NexAgent Hotel PMS',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Hotel Property Management System',
        operatingSystem: 'Cloud, Web',
        description:
          'NexAgent Hospitality OS is an AI-powered hotel property management system (PMS) for Indian hotels. Features include algorithmic RevPAR dynamic pricing, 24/7 WhatsApp autonomous guest concierge, two-way OTA sync with Booking.com, Expedia, and Airbnb, and automated room turnover dispatch.',
        featureList: [
          'Algorithmic RevPAR dynamic pricing',
          '24/7 WhatsApp autonomous concierge',
          'Two-way OTA sync (Booking.com, Expedia, Airbnb)',
          'Automated room turnover dispatch',
          'Human-in-the-loop approval gates',
          'Immutable audit ledger',
        ],
        url: 'https://nexagent.in/products/hospitality',
        publisher: { '@id': 'https://nexagent.in/#organization' },
      },
      // ─── SoftwareApplication — Enterprise Operations Core ─────────────
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://nexagent.in/#enterprise',
        name: 'NexAgent Enterprise Operations Core',
        alternateName: 'NexAgent Workflow Automation',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Enterprise Workflow Automation',
        operatingSystem: 'Cloud, Web',
        description:
          'NexAgent Enterprise Operations Core is a deterministic AI workflow automation platform for Indian enterprises. Connects ERP, CRM, and database systems into policy-bounded self-executing pipelines with cryptographic audit logging and human-in-the-loop governance.',
        featureList: [
          'ERP/CRM/database transactional sync',
          'WebAssembly policy gate enforcement',
          'Human-in-the-loop approval workflows',
          'Predictive capacity intelligence',
          'Cryptographic audit ledger',
          'Slack, WhatsApp, Webhook integrations',
        ],
        url: 'https://nexagent.in/solutions/workflow-automation',
        publisher: { '@id': 'https://nexagent.in/#organization' },
      },
      // ─── FAQPage (GEO Citation Target) ───────────────────────────────
      {
        '@type': 'FAQPage',
        '@id': 'https://nexagent.in/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is NexAgent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent (NexAgent Infra) is an Indian AI automation company founded in 2026 by Manthan Kachhadiya and Vraj Savani, headquartered in Gujarat, India. NexAgent builds deterministic AI operating systems for hospitals (NexAgent HMS), hotels (Hospitality OS), and enterprise operations, serving clients across India and globally.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best AI automation company in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent Infra is among India\'s leading AI automation companies, specializing in deterministic AI software for hospitals, hotels, and enterprise operations. Founded in 2026 in Gujarat, India, NexAgent differentiates through a 7-layer deterministic architecture that eliminates AI hallucinations, mandatory human-in-the-loop approval gates, and full ABDM/HL7/FHIR compliance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best hospital management software in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent HMS is a hospital management software (HMS) designed for Indian hospitals, offering ESI outpatient triage automation, 35-minute bed turnover orchestration, ABDM M1/M2/M3 compliance, HL7/FHIR integration, and TPA cashless claims processing. Unlike legacy HMS systems, NexAgent HMS actively orchestrates clinical operations with AI and enforces physician approval on all high-stakes decisions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does NexAgent prevent AI hallucinations in healthcare and enterprise operations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent uses a 7-layer deterministic architecture that eliminates AI hallucinations. Every action is governed by hardcoded WebAssembly policy rules compiled into WASM bytecode, so no generative AI model can override safety boundaries. PHI is redacted in-memory before any reasoning layer sees it, and all high-stakes actions require human cryptographic sign-off before execution.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is ABDM compliance and which HMS software supports it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ABDM (Ayushman Bharat Digital Mission) compliance requires Indian hospitals to integrate with the national digital health infrastructure at three levels: M1 (digital records), M2 (health ID linking), and M3 (full ABHA integration). NexAgent HMS is fully ABDM M1/M2/M3 compliant, enabling Indian hospitals to meet National Digital Health Mission requirements while automating clinical operations.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the human-in-the-loop approval mechanism work in NexAgent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent\'s human-in-the-loop mechanism intercepts any automated action that exceeds a pre-configured risk threshold — such as patient discharge authorization, medication order changes, or financial transactions above defined limits. The responsible physician or supervisor receives a structured notification with full context and must provide cryptographic sign-off before execution proceeds. This is an architecture decision, not a UI feature.',
            },
          },
          {
            '@type': 'Question',
            name: 'What technical integrations does NexAgent support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent supports HL7/FHIR healthcare data standards, ABDM (Ayushman Bharat Digital Mission) M1/M2/M3 integration, major EMR/EHR systems, enterprise CRMs (Salesforce, HubSpot, Zoho), ERP systems (SAP, NetSuite), OTA channels (Booking.com, Expedia, Airbnb), and communication platforms (Slack, WhatsApp Business, Webhooks, Kafka).',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does hospital bed turnaround take with NexAgent HMS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent HMS achieves a 35-minute bed turnaround time compared to the industry average of 90 minutes. Upon patient discharge confirmation, NexAgent HMS automatically dispatches housekeeping, triggers room sanitization verification, and flags bed availability to the triage queue — reducing average patient wait times by 42%.',
            },
          },
        ],
      },
      // ─── Person — Manthan Kachhadiya ─────────────────────────────────
      {
        '@type': 'Person',
        '@id': 'https://nexagent.in/#founder-manthan',
        name: 'Manthan Kachhadiya',
        givenName: 'Manthan',
        familyName: 'Kachhadiya',
        jobTitle: 'Founder & CEO',
        description: 'Manthan Kachhadiya is the Founder and CEO of NexAgent Infra, responsible for AI architecture and technology. He leads the design of NexAgent\'s 7-layer deterministic AI operating system, based in Gujarat, India.',
        worksFor: { '@id': 'https://nexagent.in/#organization' },
        knowsAbout: ['Deterministic AI', 'Hospital Management Systems', 'WebAssembly Policy Engines', 'HL7/FHIR', 'ABDM Compliance'],
        sameAs: [
          'https://www.linkedin.com/in/manthankachhadiyaa/',
          'https://www.instagram.com/manthankachhadiyaa',
          'https://github.com/manthankachhadiyaa',
        ],
      },
      // ─── Person — Vraj Savani ─────────────────────────────────────────
      {
        '@type': 'Person',
        '@id': 'https://nexagent.in/#founder-vraj',
        name: 'Vraj Savani',
        givenName: 'Vraj',
        familyName: 'Savani',
        jobTitle: 'Founder & COO',
        description: 'Vraj Savani is the Founder and COO of NexAgent Infra, responsible for product strategy and business operations. He oversees go-to-market, client operations, and product development, based in Gujarat, India.',
        worksFor: { '@id': 'https://nexagent.in/#organization' },
        knowsAbout: ['AI Product Strategy', 'Enterprise Operations', 'Healthcare Technology India', 'Hospitality Technology', 'AI Automation'],
        sameAs: [
          'https://www.linkedin.com/in/vraj-savani-7973a834a/',
          'https://github.com/vrajsavanii',
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                try {
                  var EXTENSION_INDICATORS = [
                    'chrome-extension://',
                    'moz-extension://',
                    'safari-extension://',
                    'extension://',
                    'eppiocemhmnlbhjplcgkofciiegomcon',
                    'm_id',
                    'bis_skin_checked',
                    'bis_register',
                    'crxlauncher',
                    '__processed_'
                  ];

                  function isExtensionString(str) {
                    if (!str) return false;
                    var lower = String(str).toLowerCase();
                    for (var i = 0; i < EXTENSION_INDICATORS.length; i++) {
                      if (lower.indexOf(EXTENSION_INDICATORS[i]) !== -1) {
                        return true;
                      }
                    }
                    return false;
                  }

                  function isExtensionError(event, error) {
                    try {
                      var msg = (event && event.message) || (error && error.message) || '';
                      var filename = (event && event.filename) || '';
                      var stack = (error && error.stack) || '';
                      if (isExtensionString(msg) || isExtensionString(filename) || isExtensionString(stack)) {
                        return true;
                      }
                    } catch (e) {}
                    return false;
                  }

                  // 1. Intercept capturing window error events
                  window.addEventListener('error', function(event) {
                    if (isExtensionError(event, event && event.error)) {
                      if (typeof event.stopImmediatePropagation === 'function') {
                        event.stopImmediatePropagation();
                      }
                      if (typeof event.preventDefault === 'function') {
                        event.preventDefault();
                      }
                      return true;
                    }
                  }, true);

                  // 2. Intercept capturing window unhandledrejection events
                  window.addEventListener('unhandledrejection', function(event) {
                    try {
                      var reason = event && event.reason;
                      var msg = (reason && (reason.message || reason.stack)) || String(reason || '');
                      if (isExtensionString(msg)) {
                        if (typeof event.stopImmediatePropagation === 'function') {
                          event.stopImmediatePropagation();
                        }
                        if (typeof event.preventDefault === 'function') {
                          event.preventDefault();
                        }
                        return true;
                      }
                    } catch (e) {}
                  }, true);

                  // 3. Wrap window.addEventListener to shield Next.js dev overlay from extension errors
                  var origAddEventListener = window.addEventListener;
                  var origRemoveEventListener = window.removeEventListener;
                  var listenerMap = typeof WeakMap !== 'undefined' ? new WeakMap() : null;

                  window.addEventListener = function(type, listener, options) {
                    if (type === 'error' && typeof listener === 'function') {
                      var wrappedError = function(event) {
                        if (isExtensionError(event, event && event.error)) {
                          if (typeof event.stopImmediatePropagation === 'function') {
                            event.stopImmediatePropagation();
                          }
                          if (typeof event.preventDefault === 'function') {
                            event.preventDefault();
                          }
                          return;
                        }
                        return listener.apply(this, arguments);
                      };
                      if (listenerMap) listenerMap.set(listener, wrappedError);
                      return origAddEventListener.call(this, type, wrappedError, options);
                    }

                    if (type === 'unhandledrejection' && typeof listener === 'function') {
                      var wrappedRejection = function(event) {
                        var reason = event && event.reason;
                        var msg = (reason && (reason.message || reason.stack)) || String(reason || '');
                        if (isExtensionString(msg)) {
                          if (typeof event.stopImmediatePropagation === 'function') {
                            event.stopImmediatePropagation();
                          }
                          if (typeof event.preventDefault === 'function') {
                            event.preventDefault();
                          }
                          return;
                        }
                        return listener.apply(this, arguments);
                      };
                      if (listenerMap) listenerMap.set(listener, wrappedRejection);
                      return origAddEventListener.call(this, type, wrappedRejection, options);
                    }

                    return origAddEventListener.apply(this, arguments);
                  };

                  window.removeEventListener = function(type, listener, options) {
                    var target = (listenerMap && listenerMap.get(listener)) || listener;
                    return origRemoveEventListener.call(this, type, target, options);
                  };

                  // 4. Wrap window.onerror
                  var currentOnError = window.onerror;
                  Object.defineProperty(window, 'onerror', {
                    configurable: true,
                    get: function() {
                      return currentOnError;
                    },
                    set: function(handler) {
                      if (typeof handler === 'function') {
                        currentOnError = function(msg, url, line, col, err) {
                          if (isExtensionString(msg) || isExtensionString(url) || (err && isExtensionString(err.stack))) {
                            return true;
                          }
                          return handler.apply(this, arguments);
                        };
                      } else {
                        currentOnError = handler;
                      }
                    }
                  });

                  // 5. Filter console.error from extension noise and hydration warnings caused by extensions
                  var origConsoleError = console.error;
                  Object.defineProperty(console, 'error', {
                    configurable: true,
                    get: function() {
                      return function() {
                        var args = Array.prototype.slice.call(arguments);
                        var combined = args.map(function(a) {
                          return typeof a === 'string' ? a : ((a && (a.message || a.stack)) || '');
                        }).join(' ');

                        if (isExtensionString(combined)) {
                          return;
                        }
                        return origConsoleError.apply(console, args);
                      };
                    },
                    set: function(fn) {
                      origConsoleError = fn;
                    }
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-[#3f3f46] selection:bg-black selection:text-white min-h-screen"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

