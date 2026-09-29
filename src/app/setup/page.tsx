'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChooseYourSetup from '@/components/interactive/ChooseYourSetup';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import { ArrowLeft, Layers } from 'lucide-react';

export default function SetupPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3f3f46]">
      {/* Top Standard Navigation */}
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/setup" />

      {/* Main Dedicated Workflow Container */}
      <main className="flex-1 w-full pt-10 pb-24">
        {/* Breadcrumb & Navigation Sub-Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-black/[0.08]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#71717a] hover:text-[#09090b] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-[#09090b]">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span>Deterministic Architecture Engine v2.4</span>
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-1.5 rounded-full bg-[#09090b] text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-sm"
              >
                Request Live Sandbox
              </button>
            </div>
          </div>
        </div>

        {/* Page Header — minimal */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.10] text-[11px] font-mono font-semibold text-[#09090b] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Solution Architect</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] tracking-tight leading-tight">
            Configure your setup.
          </h1>
          <p className="text-sm text-[#71717a] max-w-lg mx-auto leading-relaxed">
            Select your industry and operational environment — we&apos;ll generate a tailored blueprint and connect you with our founders.
          </p>
        </section>

        {/* Interactive 4-Step Architecture Configurator (Spacious Full Layout) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChooseYourSetup onOpenStrategyCall={() => setModalOpen(true)} isStandalonePage={true} />
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenStrategyCall={() => setModalOpen(true)} />

      {/* Strategy Call Booking Modal */}
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
