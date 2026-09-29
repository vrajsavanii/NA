'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { transitionPresets } from '@/lib/motion';

interface NavbarProps {
  onOpenStrategyCall: () => void;
  activePath?: string;
}

const NAV_LINKS = [
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Company',   href: '/about' },
];

export default function Navbar({ onOpenStrategyCall, activePath = '/' }: NavbarProps) {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] py-3.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg select-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/assets/nexagent_logo.png"
              alt="NexAgent Logo"
              width={32}
              height={32}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-bold text-xl tracking-tight text-[#0f1117]">NexAgent</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold hidden sm:block">
              Infra
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full ${
                activePath === href
                  ? 'text-zinc-950 bg-black/[0.06]'
                  : 'text-zinc-500 hover:text-zinc-950 hover:bg-black/[0.04]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenStrategyCall}
            className="btn hidden md:inline-flex"
            aria-label="Request Live Demo"
          >
            <span className="relative z-10">Request Demo</span>
            <span className="animation">
              <ArrowRight className="w-3.5 h-3.5 text-white relative z-10" />
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2.5 md:hidden text-[#0f1117] hover:bg-black/[0.06] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitionPresets.fast}
            className="md:hidden border-t border-black/[0.08] bg-white px-4 pt-3 pb-8 space-y-1 overflow-hidden shadow-lg"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-bold text-zinc-900 border-b border-black/[0.06] min-h-[44px] flex items-center"
              >
                {label}
              </Link>
            ))}

            <div className="pt-4">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenStrategyCall(); }}
                className="btn w-full"
                aria-label="Request Live Demo"
              >
                <span className="relative z-10">Request Demo</span>
                <span className="animation">
                  <ArrowRight className="w-3.5 h-3.5 text-white relative z-10" />
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
