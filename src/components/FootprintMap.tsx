"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface StateInfo {
  name: string;
  code: string;
  mwInstalled: string;
  activeProjects: number;
  highlightVertical: string;
  discom: string;
  description: string;
  // Position percentage relative to map image box
  targetPos: { top: string; left: string };
}

export default function FootprintMap() {
  const stateData: StateInfo[] = [
    {
      name: "Uttar Pradesh",
      code: "UP",
      mwInstalled: "18.5 MW",
      activeProjects: 8,
      highlightVertical: "Solar EPC & Substation 132kV",
      discom: "UPPCL / UPNEDA",
      description: "A core operating footprint for renewable energy, utility solar and infrastructure execution.",
      targetPos: { top: "36%", left: "53%" },
    },
    {
      name: "Rajasthan",
      code: "RJ",
      mwInstalled: "16.0 MW",
      activeProjects: 6,
      highlightVertical: "Utility Solar & BESS Storage",
      discom: "RRECL / JVVNL",
      description: "High-irradiance solar parks and utility-scale battery energy storage system (BESS) integration.",
      targetPos: { top: "36%", left: "34%" },
    },
    {
      name: "Madhya Pradesh",
      code: "MP",
      mwInstalled: "12.4 MW",
      activeProjects: 5,
      highlightVertical: "Agrivoltaics & Grid Evacuation",
      discom: "MPMKVVCL / MPPMCL",
      description: "Central India utility solar installations and high-voltage transmission substation corridors.",
      targetPos: { top: "49%", left: "44%" },
    },
    {
      name: "Haryana",
      code: "HR",
      mwInstalled: "6.2 MW",
      activeProjects: 4,
      highlightVertical: "C&I Rooftop & Agrivoltaics",
      discom: "DHBVN / UHBVN",
      description: "Industrial C&I solar rooftops and PM-KUSUM Component A agrivoltaics power plants.",
      targetPos: { top: "28%", left: "41%" },
    },
    {
      name: "Himachal Pradesh",
      code: "HP",
      mwInstalled: "2.8 MW",
      activeProjects: 2,
      highlightVertical: "Mountainous Terrain Substation & Solar",
      discom: "HPSEBL / HIMURJA",
      description: "Specialized cold-climate civil engineering and high-altitude power evacuation.",
      targetPos: { top: "22%", left: "44%" },
    },
    {
      name: "Bihar",
      code: "BR",
      mwInstalled: "3.5 MW",
      activeProjects: 4,
      highlightVertical: "PM-KUSUM & Civil Infrastructure",
      discom: "NBPDCL / BREDA",
      description: "Rural electrification, PM-KUSUM feeder solarization, and access roads.",
      targetPos: { top: "41%", left: "65%" },
    },
  ];

  const [activeState, setActiveState] = useState<StateInfo>(stateData[0]);

  return (
    <section id="footprint" className="py-28 bg-black relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#6DAD45] uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6DAD45] animate-ping"></span>
                06 / FOOTPRINT
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-medium text-white tracking-tight leading-tight">
                Built across India. <br />
                <span className="text-[#6DAD45]">Growing with purpose.</span>
              </h2>
            </div>
            <p className="text-zinc-400 font-light text-base max-w-md leading-relaxed">
              Our current operating footprint includes Uttar Pradesh, Rajasthan, Madhya Pradesh, Haryana, Himachal Pradesh, and Bihar.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Layout: Sage Green Map Graphic + State Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tactical Sage Green Cartographic Map Graphic */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" distance={50}>
              <div className="card-gradient rounded-3xl p-4 sm:p-6 border border-white/15 relative overflow-hidden shadow-2xl bg-[#141b14]">
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4 px-2 z-10">
                  <span className="text-xs font-mono text-[#6DAD45] uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#6DAD45]" /> STATES AND UNION TERRITORIES MAP OF INDIA
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    PAN-INDIA EXECUTION
                  </span>
                </div>

                {/* Map Image Canvas with Interactive Glowing Targets */}
                <div className="relative w-full aspect-square max-h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                  <Image
                    src="/images/india-map-tactical.jpg"
                    alt="States and Union Territories Map of India - SARHAT EPC"
                    fill
                    className="object-cover object-center filter contrast-105"
                  />

                  {/* Dark sage vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a120a]/80 via-transparent to-[#0a120a]/40 pointer-events-none"></div>

                  {/* Glowing Target Rings over Map Coordinates */}
                  {stateData.map((st) => {
                    const isActive = activeState.code === st.code;
                    return (
                      <button
                        key={st.code}
                        onClick={() => setActiveState(st)}
                        onMouseEnter={() => setActiveState(st)}
                        style={{ top: st.targetPos.top, left: st.targetPos.left }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group/target z-20 cursor-pointer focus:outline-none"
                      >
                        {/* Outer Pulsing Green Ring */}
                        <span
                          className={`absolute -inset-3 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#6DAD45]/40 animate-ping border border-[#6DAD45]"
                              : "bg-[#6DAD45]/20 group-hover/target:scale-150"
                          }`}
                        ></span>

                        {/* Middle Glowing Target Circle */}
                        <div
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "border-[#6DAD45] bg-[#6DAD45]/30 shadow-[0_0_20px_#6DAD45] scale-125"
                              : "border-[#6DAD45]/70 bg-black/60 group-hover/target:border-[#6DAD45]"
                          }`}
                        >
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              isActive ? "bg-[#6DAD45] scale-125" : "bg-[#6DAD45]/80"
                            }`}
                          ></div>
                        </div>

                        {/* Floating Tooltip Label */}
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase whitespace-nowrap transition-all shadow-xl ${
                            isActive
                              ? "bg-[#6DAD45] text-black opacity-100 scale-100"
                              : "bg-black/90 text-white opacity-0 group-hover/target:opacity-100 border border-white/20"
                          }`}
                        >
                          {st.name}
                        </div>
                      </button>
                    );
                  })}

                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
                    Target Icons: Active EPC Project Clusters
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Active State Detail Card (Reference Exact Layout) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            <ScrollReveal direction="right" distance={50} delay={0.15}>
              <motion.div
                key={activeState.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="card-gradient border border-[#6DAD45]/50 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[480px] shadow-2xl backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#6DAD45]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#6DAD45] uppercase tracking-widest flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#6DAD45]" /> CURRENT OPERATING FOOTPRINT
                    </span>
                    <span className="px-3 py-1 bg-[#6DAD45]/20 text-[#6DAD45] font-mono text-xs font-bold rounded-full">
                      {activeState.mwInstalled}
                    </span>
                  </div>

                  <h3 className="text-4xl font-serif-display font-medium text-white mb-4">
                    {activeState.name}
                  </h3>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8">
                    {activeState.description}
                  </p>

                  {/* State Tag Pills (RJ, UP, Haryana, etc.) */}
                  <div className="mb-8 border-t border-b border-white/10 py-6">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
                      FOOTPRINT REGION SELECTOR:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stateData.map((st) => (
                        <button
                          key={st.code}
                          onClick={() => setActiveState(st)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                            activeState.code === st.code
                              ? "bg-[#6DAD45] text-black font-bold shadow-lg shadow-[#6DAD45]/30 scale-105"
                              : "bg-black/60 text-zinc-400 border border-white/15 hover:text-white hover:border-[#6DAD45]/50"
                          }`}
                        >
                          {st.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Metrics Summary */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">ACTIVE PROJECT SITES:</span>
                      <span className="text-white font-mono font-bold">
                        {activeState.activeProjects} Operational Sites
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">CORE VERTICAL:</span>
                      <span className="text-[#6DAD45] font-semibold">
                        {activeState.highlightVertical}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">STATE UTILITY / DISCOM:</span>
                      <span className="text-white font-mono">{activeState.discom}</span>
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <a
                  href="#contact"
                  className="w-full bg-[#6DAD45] hover:bg-[#5b9538] text-black font-bold text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#6DAD45]/30 group"
                >
                  <span>Explore state projects →</span>
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
