'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Activity, Bed, ShieldCheck, Stethoscope, FileCheck, Clock, Users, Pill, Scan } from 'lucide-react';
import { fadeUpVariants, staggerContainerVariants, viewportConfig } from '@/lib/motion';

interface PortfolioSectionProps {
  onOpenStrategyCall: () => void;
}

const IMUNA_MODULES = [
  { icon: Activity,    name: 'OPD Queue Intelligence' },
  { icon: Bed,         name: 'Bed Turnover Engine' },
  { icon: Stethoscope, name: 'IPD & ICU Coordination' },
  { icon: FileCheck,   name: 'Discharge Packet Automation' },
  { icon: Pill,        name: 'Digital Pharmacy & Formulary' },
  { icon: ShieldCheck, name: 'TPA & Insurance Engine' },
  { icon: Scan,        name: 'LIS / RIS Integration' },
  { icon: Clock,       name: 'OT Surgical Scheduling' },
  { icon: Users,       name: 'ABDM & NABH Compliance' },
];

const COMING_SOON = [
  'Hospitality OS',
  'Enterprise Workflow',
  'Legal & Compliance',
];

export default function PortfolioSection({ onOpenStrategyCall }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#fafafa] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-12"
        >

          {/* Section Header — no description paragraph */}
          <div className="space-y-3">
            <motion.p variants={fadeUpVariants} className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Portfolio Companies
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.08]"
            >
              Built to own<br className="hidden sm:block" /> each vertical.
            </motion.h2>
          </div>

          {/* ── Imuna Card ── */}
          <motion.div variants={fadeUpVariants}>
            <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden">

              {/* Card top */}
              <div className="p-8 sm:p-10 border-b border-zinc-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="space-y-2.5">
                    {/* Status pill */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                      Active · Healthcare OS
                    </div>

                    {/* Name */}
                    <h3 className="text-5xl sm:text-6xl font-extrabold text-zinc-950 tracking-[-0.04em] leading-none">
                      Imuna
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase">by NexAgent</p>

                    {/* Tagline */}
                    <p className="text-sm text-zinc-500 max-w-sm leading-relaxed pt-1">
                      AI operating system for hospitals and clinical networks.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="shrink-0">
                    <button
                      onClick={onOpenStrategyCall}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
                    >
                      <span>Request Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Module chips grid */}
              <div className="p-8 sm:p-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 font-bold mb-5">
                  Solution Modules
                </p>
                <div className="flex flex-wrap gap-2">
                  {IMUNA_MODULES.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700 hover:bg-white hover:border-zinc-300 transition-colors"
                    >
                      <Icon className="w-3 h-3 text-zinc-500 shrink-0" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon row */}
          <motion.div variants={fadeUpVariants}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl border border-dashed border-zinc-200 bg-white">
              <div className="flex-1 space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 font-bold">
                  In Development
                </p>
                <div className="flex flex-wrap gap-2">
                  {COMING_SOON.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs text-zinc-400 font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 font-bold shrink-0">
                Coming Soon
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
