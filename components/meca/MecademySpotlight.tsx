"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, BoltIcon, SparklesIcon, TrophyIcon } from "@heroicons/react/24/outline";

const spotlightItems = [
  { icon: TrophyIcon, label: "Poin", color: "#ffd84d" },
  { icon: SparklesIcon, label: "Julukan", color: "#ff4fd8" },
  { icon: BoltIcon, label: "Misi", color: "#18d5ff" },
] as const;

export default function MecademySpotlight({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={`meca-neon-card relative isolate overflow-hidden rounded-[22px] text-white ${compact ? "p-7 sm:p-9" : "p-8 sm:p-11 lg:p-14"}`}
    >
      <div className="meca-neon-grid absolute inset-0 -z-10 opacity-65" aria-hidden="true" />
      <motion.div
        animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-12 -top-16 -z-10 h-56 w-56 rounded-full bg-[#ff4fd8]/25 blur-3xl"
        aria-hidden="true"
      />
      <div className={`grid gap-8 ${compact ? "lg:grid-cols-[1fr_auto] lg:items-end" : "lg:grid-cols-[1.15fr_0.85fr] lg:items-center"}`}>
        <div>
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.04em] text-[#18d5ff]">
            <BoltIcon className="h-4 w-4" />
            Mecademy
          </div>
          <h2 className={`${compact ? "mt-5 text-3xl sm:text-4xl" : "mt-5 text-4xl sm:text-5xl"} max-w-[15ch] font-extrabold leading-[1.08] tracking-[-0.045em]`}>
            Misi selesai, poin bertambah, julukan terbuka.
          </h2>
          <p className="mt-5 max-w-[58ch] text-sm leading-7 text-white/68 sm:text-base">
            Siswa menyelesaikan tugas, menjaga konsistensi, mengumpulkan poin, dan mendapatkan julukan sesuai pencapaiannya.
          </p>
          <Link href="/meca/mecademy" className="meca-focus-ring mt-7 inline-flex items-center gap-2 rounded-lg bg-[#b8ff5b] px-5 py-3 text-sm font-extrabold text-[#08101d] transition hover:-translate-y-0.5 hover:bg-[#d2ff99]">
            Lihat Mecademy
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        {!compact && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {spotlightItems.map((item, index) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={item.label}
                animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -7 : 7, 0], rotateZ: [0, index - 1, 0] }}
                transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[18px] border border-white/12 bg-white/[0.07] p-5 backdrop-blur-md last:col-span-2 sm:last:col-span-1 lg:last:col-span-2"
              >
                <Icon className="h-7 w-7" style={{ color: item.color }} />
                <p className="mt-4 text-sm font-bold">{item.label}</p>
              </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.article>
  );
}
