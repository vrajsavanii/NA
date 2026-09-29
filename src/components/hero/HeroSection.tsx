'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import TotemAnimation from './TotemAnimation';
import TechnicalGrid from '@/components/ui/TechnicalGrid';

interface HeroSectionProps {
  onOpenStrategyCall: () => void;
}

const SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: SPRING } },
};

export default function HeroSection({ onOpenStrategyCall }: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-white">
      <TechnicalGrid withVignette withDots={false} dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left: Copy & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-8 pt-0 lg:pt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                AI Infrastructure · Portfolio Company
              </span>
            </motion.div>

            {/* Headline — minimal, single strong line */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-extrabold text-zinc-950 tracking-[-0.04em] leading-[1.04]"
            >
              Intelligent systems.<br />
              <span className="text-zinc-300">Built to operate.</span>
            </motion.h1>

            {/* One-sentence value prop */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-500 max-w-[460px] leading-relaxed font-normal"
            >
              NexAgent is a technology holding company building AI-native operating systems for high-stakes industries.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <Link href="/setup" className="btn-architect">
                <span>Launch Solution Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={onOpenStrategyCall} className="btn-demo-glow">
                <span>Request Live Demo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Visual */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: SPRING }}
          >
            <TotemAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
