"use client";

import Link from "next/link";
import {
  AcademicCapIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { CSSProperties, PointerEvent } from "react";

const cards = [
  {
    id: "kelas",
    label: "Kelas",
    title: "Buka jadwal dan materi kelas.",
    detail: "Agenda belajar dan bahan kelas dapat dilihat dari satu akun.",
    href: "/meca/fitur",
    icon: CalendarDaysIcon,
    supportIcon: AcademicCapIcon,
    accent: "#46d6ff",
    className: "meca-feature-card--left",
  },
  {
    id: "tugas",
    label: "Tugas dan hasil",
    title: "Cek tugas yang harus diselesaikan.",
    detail: "Lihat nilai dan hasil belajar.",
    href: "/meca/fitur",
    icon: ClipboardDocumentCheckIcon,
    supportIcon: ChartBarSquareIcon,
    accent: "#ffd45a",
    className: "meca-feature-card--center",
  },
  {
    id: "mecademy",
    label: "Mecademy",
    title: "Misi selesai, poin bertambah, julukan terbuka.",
    detail: "Siswa dapat melihat poin dan julukan yang sudah didapat.",
    href: "/meca/mecademy",
    icon: TrophyIcon,
    supportIcon: SparklesIcon,
    accent: "#ff67ca",
    className: "meca-feature-card--right",
  },
] as const;

const sparkles = [
  [7, 18, 3, -0.2],
  [18, 74, 5, -1.1],
  [28, 34, 3, -2.4],
  [37, 9, 4, -0.8],
  [44, 82, 3, -3.1],
  [53, 25, 5, -1.7],
  [61, 68, 3, -0.4],
  [69, 13, 4, -2.7],
  [76, 87, 3, -1.3],
  [84, 41, 5, -3.4],
  [92, 20, 3, -2],
  [13, 48, 4, -3],
  [58, 93, 3, -0.9],
  [95, 64, 4, -2.2],
] as const;

export default function MecaFeatureCardShowcase() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 24, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 24, mass: 0.45 });
  const rotateY = useTransform(smoothX, [0, 100], [-4.5, 4.5]);
  const rotateX = useTransform(smoothY, [0, 100], [4.5, -4.5]);
  const foil = useTransform([smoothX, smoothY], ([x, y]) =>
    "radial-gradient(circle at " + x + "% " + y + "%, rgba(255,255,255,.62) 0%, rgba(135,228,255,.28) 12%, rgba(255,91,203,.15) 24%, transparent 42%)"
  );

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  function resetPointer() {
    pointerX.set(50);
    pointerY.set(50);
  }

  return (
    <section className="meca-feature-showcase py-20 text-white sm:py-28">
      <div className="meca-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.02em] text-[#ffd45a]">Fitur untuk siswa</p>
          <h2 className="meca-section-title mx-auto mt-5 max-w-[17ch]">Pilih fitur yang ingin Anda lihat.</h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-sm leading-7 text-white/70 sm:text-base">
            Buka kelas, selesaikan tugas, lalu lihat hasil belajar dan pencapaian dari satu akun.
          </p>
        </div>

        <div
          className="meca-card-deck mt-12 sm:mt-16"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="meca-card-deck__aurora" aria-hidden="true" />
          <div className="meca-card-deck__sparkles" aria-hidden="true">
            {sparkles.map(([x, y, size, delay], index) => (
              <span
                key={index}
                style={{
                  "--spark-x": x,
                  "--spark-y": y,
                  "--spark-size": size,
                  "--spark-delay": String(delay) + "s",
                } as CSSProperties}
              />
            ))}
          </div>

          <div className="meca-card-deck__track">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const SupportIcon = card.supportIcon;
              const isCenter = index === 1;

              return (
                <motion.div
                  key={card.id}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className={"meca-feature-card-shell " + card.className}
                >
                  <motion.div
                    style={isCenter && !reduceMotion ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
                    className="h-full"
                  >
                    <Link
                      href={card.href}
                      aria-label={card.title + " Lihat penjelasan fitur."}
                      className="meca-feature-card meca-focus-ring group"
                      style={{ "--card-accent": card.accent } as CSSProperties}
                    >
                      <motion.span className="meca-feature-card__foil" style={{ backgroundImage: foil }} aria-hidden="true" />
                      <span className="meca-feature-card__shine" aria-hidden="true" />

                      <span className="meca-feature-card__topline">
                        <span className="meca-feature-card__icon">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-xs font-extrabold tracking-[0.02em]">{card.label}</span>
                        <SupportIcon className="ml-auto h-5 w-5 opacity-70" />
                      </span>

                      <span className="meca-feature-card__art" aria-hidden="true">
                        <Icon className="h-24 w-24 sm:h-28 sm:w-28" />
                        <span className="meca-feature-card__orbit" />
                      </span>

                      <span className="relative z-10 mt-auto block">
                        <span className="block text-[1.35rem] font-extrabold leading-[1.13] tracking-[-0.035em] sm:text-[1.55rem]">
                          {card.title}
                        </span>
                        <span className="mt-3 block text-sm leading-6 text-white/72">{card.detail}</span>
                        <span className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-bold text-white/88">
                          Lihat penjelasan
                          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
