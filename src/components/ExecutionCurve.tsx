"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Step {
  id: string;
  stepNumber: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  cx: number;
  cy: number;
}

export default function ExecutionCurve() {
  const steps: Step[] = [
    {
      id: "discover",
      stepNumber: "01",
      name: "Discover",
      headline: "Site Intelligence & Grid Assessment",
      description: "We evaluate land topography, solar irradiance metrics, substation proximity, and regulatory permissions to map total project feasibility.",
      deliverables: ["Solar Irradiance Audit", "Substation Distance Matrix", "Land Title Verification"],
      cx: 10,
      cy: 70,
    },
    {
      id: "design",
      stepNumber: "02",
      name: "Design",
      headline: "Engineering & Procurement Blueprint",
      description: "Detailed civil engineering, electrical single-line diagrams (SLD), array layout optimization, and bill of materials (BOM) finalized.",
      deliverables: ["3D Shadow Analysis", "SLD & Civil Layouts", "Equipment Procurement BOM"],
      cx: 26,
      cy: 25,
    },
    {
      id: "structure",
      stepNumber: "03",
      name: "Structure",
      headline: "Commercial & Statutory Clearances",
      description: "PPA negotiation, state utility open-access approvals, CEIG clearance filing, and project financing closure.",
      deliverables: ["CEIG & DISCOM Approvals", "PPA Documentation", "EPC Contract Execution"],
      cx: 42,
      cy: 65,
    },
    {
      id: "build",
      stepNumber: "04",
      name: "Build",
      headline: "Precision On-Site EPC Execution",
      description: "Piling, mounting structure assembly, module installation, inverter station wiring, substation bay erection, and transmission line corridor.",
      deliverables: ["Civil Foundations", "Substation Erection", "String Inverter Cabling"],
      cx: 58,
      cy: 90,
    },
    {
      id: "commission",
      stepNumber: "05",
      name: "Commission",
      headline: "Grid Synchronization & COD",
      description: "High-voltage insulation testing, SCADA telemetry calibration, DISCOM grid synchronization, and Commercial Operation Date (COD) handover.",
      deliverables: ["Grid Synchronization", "SCADA Calibration", "COD Certificate"],
      cx: 74,
      cy: 35,
    },
    {
      id: "upgrade",
      stepNumber: "06",
      name: "Upgrade",
      headline: "Asset Operations & Lifecycle Expansion",
      description: "24/7 remote monitoring, preventive maintenance, BESS integration upgrades, and performance ratio optimization.",
      deliverables: ["24/7 Telemetry Monitoring", "O&M Maintenance Support", "BESS Retrofit Options"],
      cx: 90,
      cy: 20,
    },
  ];

  const [activeStep, setActiveStep] = useState<Step>(steps[0]);

  return (
    <section id="execution" className="py-28 bg-zinc-950 text-white relative z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#6DAD45] uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6DAD45] animate-ping"></span>
                02 / THE CURVE OF EXECUTION
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-medium text-white tracking-tight leading-tight">
                A project journey <br />
                <span className="text-[#6DAD45]">with a clear curve.</span>
              </h2>
            </div>
            <p className="text-zinc-400 font-light text-base max-w-md leading-relaxed">
              6 core phases in sequence. The roadmap lights up as the project moves from discovery to long-term operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Curved Pathway Component */}
        <ScrollReveal direction="up" distance={50} delay={0.15}>
          <div className="card-gradient rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden mb-12 shadow-2xl">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
              INTERACTIVE LIFECYCLE ROADMAP — CLICK ANY PHASE TO INSPECT
            </div>

            {/* SVG Canvas for Curve */}
            <div className="relative w-full h-[260px] sm:h-[300px]">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Glow background curve */}
                <path
                  d="M 10 70 C 20 15, 32 15, 42 65 C 50 105, 66 105, 74 35 C 80 5, 85 10, 90 20"
                  fill="none"
                  stroke="rgba(109, 173, 69, 0.2)"
                  strokeWidth="6"
                />
                {/* Vibrant active curve line */}
                <path
                  d="M 10 70 C 20 15, 32 15, 42 65 C 50 105, 66 105, 74 35 C 80 5, 85 10, 90 20"
                  fill="none"
                  stroke="#6DAD45"
                  strokeWidth="2.5"
                  className="path-pulse"
                />

                {/* Node Dots */}
                {steps.map((step) => {
                  const isActive = activeStep.id === step.id;
                  return (
                    <g
                      key={step.id}
                      onClick={() => setActiveStep(step)}
                      className="cursor-pointer group"
                    >
                      {isActive && (
                        <circle
                          cx={step.cx}
                          cy={step.cy}
                          r="6"
                          fill="none"
                          stroke="#6DAD45"
                          strokeWidth="1.5"
                          className="animate-ping"
                        />
                      )}
                      <circle
                        cx={step.cx}
                        cy={step.cy}
                        r={isActive ? "4.5" : "3.5"}
                        fill={isActive ? "#6DAD45" : "#111111"}
                        stroke={isActive ? "#ffffff" : "#6DAD45"}
                        strokeWidth={isActive ? "2" : "1.5"}
                        className="transition-all duration-300 group-hover:scale-125"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Labels overlay positioned over nodes */}
              {steps.map((step) => {
                const isActive = activeStep.id === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step)}
                    style={{
                      left: `${step.cx}%`,
                      top: `${step.cy}%`,
                      transform: "translate(-50%, -150%)",
                    }}
                    className={`absolute font-sans-ui text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg ${
                      isActive
                        ? "bg-[#6DAD45] text-black scale-110 font-bold border-2 border-white"
                        : "bg-black/80 text-zinc-300 hover:text-white border border-white/20 hover:border-[#6DAD45]"
                    }`}
                  >
                    <span className="font-mono opacity-60 mr-1">{step.stepNumber}</span>
                    {step.name}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Selected Phase Detail Panel */}
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0A0A0A] border border-[#6DAD45]/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6DAD45]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#6DAD45]/20 text-[#6DAD45] font-mono text-xs font-bold rounded-full">
                  PHASE {activeStep.stepNumber} OF 06
                </span>
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
                  EPC STAGE HANDOFF
                </span>
              </div>
              <h3 className="text-3xl font-serif-display font-medium text-white mb-4">
                {activeStep.headline}
              </h3>
              <p className="text-zinc-300 font-light text-base leading-relaxed mb-6">
                {activeStep.description}
              </p>
            </div>

            {/* Key Deliverables Column */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/10 shrink-0 min-w-[280px]">
              <div className="text-xs font-semibold text-[#6DAD45] uppercase tracking-widest mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6DAD45]" />
                STAGE DELIVERABLES
              </div>
              <ul className="space-y-3">
                {activeStep.deliverables.map((item) => (
                  <li key={item} className="text-xs text-zinc-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DAD45]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
