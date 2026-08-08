"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BoltIcon, CheckBadgeIcon, FireIcon, SparklesIcon, TrophyIcon } from "@heroicons/react/24/solid";

const orbitItems = [
  { icon: BoltIcon, label: "Konsisten", position: "left-[1%] top-[44%]", color: "#18d5ff", delay: 0 },
  { icon: SparklesIcon, label: "Misi", position: "right-[2%] top-[13%]", color: "#ff4fd8", delay: 0.35 },
  { icon: CheckBadgeIcon, label: "Julukan", position: "bottom-[6%] right-[12%]", color: "#b8ff5b", delay: 0.7 },
] as const;

export default function MecaBadgeOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[650px] [perspective:1300px]">
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),rgba(24,213,255,0.08)_44%,transparent_70%)] blur-2xl" />
      <div className="meca-neon-grid absolute inset-[4%] rotate-12 rounded-full opacity-50 [mask-image:radial-gradient(circle,black,transparent_70%)]" aria-hidden="true" />

      <motion.div
        animate={reduceMotion ? undefined : { rotateZ: 360, rotateX: [64, 70, 64] }}
        transition={{ rotateZ: { duration: 24, repeat: Infinity, ease: "linear" }, rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute inset-[9%] rounded-full border border-dashed border-[#18d5ff]/55 shadow-[0_0_30px_rgba(24,213,255,0.18)] [transform:rotateX(66deg)]"
      />
      <motion.div
        animate={reduceMotion ? undefined : { rotateZ: -360, rotateY: [58, 68, 58] }}
        transition={{ rotateZ: { duration: 18, repeat: Infinity, ease: "linear" }, rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute inset-[20%] rounded-full border border-[#ff4fd8]/45 shadow-[0_0_25px_rgba(255,79,216,0.16)] [transform:rotateY(62deg)]"
      />

      <motion.div
        data-mecademy-3d="badge-core"
        animate={reduceMotion ? undefined : { rotateY: [0, 360], y: [0, -10, 0] }}
        transition={{ rotateY: { duration: 11, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        style={{ transformStyle: "preserve-3d" }}
        className="absolute inset-[28%] grid place-items-center rounded-[26%] border border-[#18d5ff]/60 bg-[linear-gradient(145deg,#151d58,#8b5cf6_48%,#18d5ff)] text-white shadow-[0_0_35px_rgba(24,213,255,0.36),0_0_80px_rgba(139,92,246,0.24)]"
      >
        <div className="absolute inset-[8%] rounded-[22%] border border-white/25" />
        <TrophyIcon className="h-[42%] w-[42%] drop-shadow-[0_0_18px_rgba(255,216,77,0.75)]" />
        <div className="absolute -bottom-4 rounded-lg border border-[#b8ff5b]/55 bg-[#07101f]/90 px-4 py-2 text-[10px] font-extrabold tracking-[0.08em] text-[#b8ff5b] shadow-[0_0_22px_rgba(184,255,91,0.24)] [transform:translateZ(42px)]">POIN BERTAMBAH</div>
      </motion.div>

      {orbitItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            animate={reduceMotion ? undefined : { y: [0, index % 2 ? 10 : -10, 0], rotateY: [0, index % 2 ? -18 : 18, 0], rotateX: [0, 6, 0] }}
            transition={{ duration: 4.8 + index, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute grid h-20 w-20 place-items-center rounded-[20px] border bg-[#0d1538]/88 text-white backdrop-blur-xl sm:h-24 sm:w-24 ${item.position}`}
            style={{ borderColor: `${item.color}80`, boxShadow: `0 0 28px ${item.color}38, inset 0 1px 0 rgba(255,255,255,.12)` }}
          >
            <div className="text-center"><Icon className="mx-auto h-7 w-7 sm:h-8 sm:w-8" style={{ color: item.color }} /><span className="mt-1.5 block text-[10px] font-bold tracking-[0.04em]">{item.label}</span></div>
          </motion.div>
        );
      })}

      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.25, 0.8, 0.25], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[13%] grid h-12 w-12 place-items-center rounded-full border border-[#ffd84d]/55 bg-[#ffd84d]/10 text-[#ffd84d] shadow-[0_0_24px_rgba(255,216,77,0.3)]"
      >
        <FireIcon className="h-5 w-5" />
      </motion.div>
    </div>
  );
}
