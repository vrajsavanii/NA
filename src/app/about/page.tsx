'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import { Code2, LineChart, ArrowRight } from 'lucide-react';

const FOUNDERS = [
  {
    name:       'Manthan Kachhadiya',
    role:       'Founder & CEO',
    domain:     'Technology & AI',
    domainIcon: Code2,
    quote:      '"Focused on building the technology and intelligence systems that turn ideas into working, reliable products."',
    bio:        'Leads core software engineering, deterministic agent runtimes, and low-latency infrastructure. Building mission-critical systems that eliminate human error.',
    image:      '/assets/founder_manthan.webp',
    linkedin:   'https://www.linkedin.com/in/manthankachhadiyaa/',
    instagram:  'https://www.instagram.com/manthankachhadiyaa',
  },
  {
    name:       'Vraj Savani',
    role:       'Founder & COO',
    domain:     'Product & Business',
    domainIcon: LineChart,
    quote:      '"Focused on understanding business problems and turning them into useful products and systems."',
    bio:        'Directs product strategy, commercial scaling, and enterprise deployments. Translating operational friction into high-leverage software that delivers measurable ROI.',
    image:      '/assets/founder_vraj.webp',
    linkedin:   'https://www.linkedin.com/in/vraj-savani-7973a834a/',
    instagram:  null,
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-600">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/about" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">

        {/* Page Header */}
        <section className="space-y-4 max-w-2xl">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>The Company</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
            About NexAgent
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            NexAgent is a technology holding company building AI-native operating systems
            for high-stakes industries — starting with healthcare.
          </p>
        </section>

        {/* Mission */}
        <section className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
            We build deterministic software that doesn&rsquo;t just log tasks — it executes them.
            Each portfolio company is purpose-built for a single vertical, with its own product team and roadmap,
            all sharing a common infrastructure core.
          </p>
        </section>

        {/* Founders */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Built by two founders.
            </h2>
            <p className="text-sm text-zinc-400 mt-1">Equal equity · Equal authority · Complementary domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUNDERS.map((f) => {
              const DomainIcon = f.domainIcon;
              return (
                <div
                  key={f.name}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lift hover:border-zinc-300 transition-all duration-300 flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative w-full h-72 bg-zinc-100">
                    <Image
                      src={f.image}
                      alt={`${f.name} — ${f.role}`}
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest text-zinc-600 bg-zinc-100 border border-zinc-200 font-bold">
                        {f.role}
                      </span>
                      <h3 className="text-xl font-extrabold text-zinc-950 mt-2 tracking-tight">{f.name}</h3>
                    </div>

                    <blockquote className="text-sm text-zinc-700 italic border-l-2 border-zinc-300 pl-3 leading-relaxed">
                      {f.quote}
                    </blockquote>

                    <p className="text-xs text-zinc-500 leading-relaxed flex-1">{f.bio}</p>

                    {/* Footer row */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <DomainIcon className="w-3.5 h-3.5 text-zinc-700" />
                        <span className="font-medium">{f.domain}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-zinc-400 font-semibold">
                        <a href={f.linkedin} target="_blank" rel="noopener noreferrer"
                          className="hover:text-zinc-900 transition-colors inline-flex items-center gap-0.5">
                          LinkedIn <span className="text-[10px]">↗</span>
                        </a>
                        {f.instagram && (
                          <a href={f.instagram} target="_blank" rel="noopener noreferrer"
                            className="hover:text-zinc-900 transition-colors inline-flex items-center gap-0.5">
                            Instagram <span className="text-[10px]">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="p-8 sm:p-12 rounded-2xl bg-zinc-950 text-white text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to work with us?
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Schedule a discovery call directly with the founders.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-100 transition-colors"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>

      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
