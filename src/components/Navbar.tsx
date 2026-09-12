"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exact navigation items from reference design
  const navLinks = [
    { label: "ABOUT US", href: "/about" },
    { label: "OUR SOLUTIONS", href: "/solutions" },
    { label: "PORTFOLIO", href: "/#execution" },
    { label: "PROJECT INTELLIGENCE", href: "/#intelligence" },
    { label: "NEWS & INSIGHTS", href: "/insights" },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Modern Transparent Pill Navbar */}
      <header className="fixed top-4 sm:top-6 left-3 right-3 sm:left-6 sm:right-6 z-50 max-w-7xl mx-auto transition-all duration-300">
        <div
          className={`rounded-full px-5 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300 backdrop-blur-2xl border ${
            scrolled
              ? "bg-black/85 border-[#6DAD45]/40 shadow-2xl shadow-black/90"
              : "bg-black/40 border-white/20 hover:border-white/35 shadow-2xl"
          }`}
        >
          {/* Exact Logo: SARHAT [Green Dot] EPC */}
          <Link href="/" className="flex items-center group shrink-0 select-none">
            <div className="font-sans-ui text-xl sm:text-2xl font-black tracking-tighter text-white flex items-baseline leading-none">
              <span className="font-black text-white uppercase tracking-tighter">SARHAT</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#6DAD45] inline-block mx-1 shrink-0 self-baseline group-hover:scale-125 transition-transform shadow-[0_0_10px_#6DAD45]"></span>
              <span className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-wider ml-0.5 opacity-90">
                EPC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] uppercase font-semibold tracking-widest text-zinc-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#6DAD45] transition-colors duration-200 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#6DAD45] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="bg-[#6DAD45] hover:bg-[#5b9538] text-black font-bold text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#6DAD45]/30 flex items-center gap-1.5"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </button>

            {/* Mobile / Tablet Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden text-zinc-200 hover:text-white p-2 rounded-full bg-black/60 border border-white/20"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#6DAD45]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-28 px-6 pb-10 flex flex-col justify-between xl:hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[10px] tracking-widest text-[#6DAD45] uppercase font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DAD45] animate-ping"></span>
                SARHAT EPC NAVIGATION
              </div>
              {navLinks.map((link, idx) => (
                <motion.div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif-display text-xl sm:text-2xl text-zinc-100 hover:text-[#6DAD45] transition-colors border-b border-zinc-900 pb-2.5 flex justify-between items-center"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#6DAD45]" />
                <span>Pan-India EPC • Utility Solar & Storage Infrastructure</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#6DAD45] text-black font-bold py-3.5 rounded-full text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-[#6DAD45]/30"
              >
                REQUEST PROJECT CONSULTATION
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
