'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import FoundersSection from '@/components/sections/FoundersSection';
import StrategyCallModal from '@/components/modals/StrategyCallModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3f3f46] overflow-x-hidden" suppressHydrationWarning>
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/" />

      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <HeroSection onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 2. Portfolio — Sub-companies */}
        <PortfolioSection onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 3. Founders */}
        <FoundersSection />
      </main>

      <Footer onOpenStrategyCall={() => setModalOpen(true)} />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
