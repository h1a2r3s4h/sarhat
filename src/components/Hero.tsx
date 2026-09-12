"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Compass, ShieldCheck, Play, Activity } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[680px] max-h-[1080px] w-full flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-solar.jpg"
          className="w-full h-full object-cover opacity-85 scale-105 transition-opacity duration-1000 pointer-events-none"
        >
          <source src="/generate_in_k_hd.mp4" type="video/mp4" />
          {/* Fallback image */}
          <Image
            src="/images/hero-solar.jpg"
            alt="SARHAT EPC Solar Power Plant"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
        </video>

        {/* Tailored Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/65 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6DAD45]/25 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content Container (Centered in Viewport) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-24 sm:pt-28 pb-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Top Animated Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
            <span className="px-4 py-1.5 bg-black/70 border border-[#6DAD45]/60 text-[#6DAD45] font-semibold text-[11px] uppercase tracking-widest rounded-full flex items-center gap-2 backdrop-blur-md shadow-2xl brand-glow-sm">
              <span className="w-2 h-2 rounded-full bg-[#6DAD45] animate-ping"></span>
              SARHAT.EPC / ENERGY × INFRASTRUCTURE
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-200 font-mono backdrop-blur-sm px-3 py-1 rounded-full bg-black/40 border border-white/10">
              <Activity className="w-3.5 h-3.5 text-[#6DAD45] animate-pulse" />
              47 MW UTILITY CAPACITY ACTIVE
            </span>
          </motion.div>

          {/* Hero Editorial Headline with Animated Accent Curve */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif-display font-medium tracking-tight text-white leading-[1.05] mb-6 [text-shadow:_0_4px_28px_rgba(0,0,0,0.95)]"
          >
            We build the{" "}
            <span className="italic font-normal text-[#6DAD45] relative inline-block drop-shadow-[0_0_35px_rgba(109,173,69,0.8)]">
              systems
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute -bottom-2 left-0 w-full h-3 text-[#6DAD45]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q 50 0 100 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </motion.svg>
            </span>{" "}
            that move India forward.
          </motion.h1>

          {/* Subheading in Montserrat */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl text-zinc-100 font-light max-w-2xl leading-relaxed mb-8 [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]"
          >
            Renewable energy, battery storage (BESS), substations and civil infrastructure, brought together by one connected execution mindset.
          </motion.p>

          {/* Animated Interactive CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuote}
              className="bg-[#6DAD45] hover:bg-[#5c9937] text-black font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-colors shadow-2xl shadow-[#6DAD45]/40 flex items-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Explore our solutions</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#footprint"
              className="glass-panel hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-colors border border-white/25 flex items-center gap-2 shadow-2xl backdrop-blur-md"
            >
              <span>See our footprint</span>
              <Compass className="w-4 h-4 text-zinc-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Floating Info Bar (100% Screen Bottom Lock) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6">
        <div className="border-t border-white/15 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            href="#about"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-200 hover:text-[#6DAD45] transition-colors [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]"
          >
            <ChevronDown className="w-4 h-4 text-[#6DAD45] animate-bounce" />
            <span>Scroll to discover execution methodology</span>
          </motion.a>

          {/* Floating Pill Feature Card with Subtle Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass-panel px-5 py-2.5 rounded-2xl border border-white/20 flex items-center gap-3 max-w-sm shadow-2xl backdrop-blur-xl"
          >
            <div className="w-9 h-9 rounded-xl bg-[#6DAD45]/20 border border-[#6DAD45]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#6DAD45]" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#6DAD45] tracking-wider uppercase font-sans-ui flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-current text-[#6DAD45]" /> ENERGY + INFRASTRUCTURE
              </div>
              <div className="text-[11px] text-zinc-200 font-light">
                Designed. Built. Operated.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
