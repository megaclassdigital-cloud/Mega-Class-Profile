"use client";

import Image from "next/image";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CheckBadgeIcon,
  FireIcon,
  FlagIcon,
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

const journeyCards = [
  {
    id: "ambil-misi",
    label: "Misi tersedia",
    title: "Ambil misi",
    copy: "Siswa melihat tugas atau tantangan yang tersedia.",
    accent: "#18d5ff",
    icon: FlagIcon,
    span: "lg:col-span-5",
    tilt: "-2.2deg",
  },
  {
    id: "selesaikan-tugas",
    label: "Misi berjalan",
    title: "Selesaikan tugas",
    copy: "Tugas yang selesai menambah poin dan catatan konsistensi.",
    accent: "#ff4fd8",
    icon: FireIcon,
    span: "lg:col-span-7",
    tilt: "1.4deg",
  },
  {
    id: "naik-peringkat",
    label: "Poin terkumpul",
    title: "Naik peringkat",
    copy: "Poin menentukan posisi siswa pada peringkat setiap season.",
    accent: "#b8ff5b",
    icon: ArrowTrendingUpIcon,
    span: "lg:col-span-7",
    tilt: "-1.2deg",
  },
  {
    id: "dapatkan-julukan",
    label: "Pencapaian terbuka",
    title: "Dapatkan julukan",
    copy: "Misi tertentu membuka julukan di profil siswa.",
    accent: "#ffd84d",
    icon: TrophyIcon,
    span: "lg:col-span-5",
    tilt: "2deg",
  },
] as const;

const titleCards = [
  {
    id: "mvs",
    label: "Peringkat 1 tiap season",
    title: "MVS",
    subtitle: "Most Valuable Student",
    copy: "Untuk pelajar dengan skor keseluruhan tertinggi dalam satu season.",
    rarity: "Kartu unggulan",
    accent: "#ffd84d",
    icon: TrophyIcon,
    image: "/images/meca/mecademy-mvs-character-v1.png",
    span: "lg:col-span-5",
    tilt: "-1.8deg",
  },
  {
    id: "king-queen",
    label: "Tiga season berturut-turut",
    title: "King of Mecademy / Queen of Mecademy",
    subtitle: "Julukan permanen",
    copy: "Diberikan setelah meraih MVS selama tiga season beruntun. Titel ini tetap melekat saat season berganti.",
    rarity: "Kartu legendaris",
    accent: "#ff4fd8",
    icon: SparklesIcon,
    image: "/images/meca/mecademy-king-queen-character-v1.png",
    span: "lg:col-span-7",
    tilt: "1.3deg",
  },
  {
    id: "forgotten-one",
    label: "Rajin di luar peringkat teratas",
    title: "The Forgotten One",
    subtitle: "Aktif meski belum masuk peringkat atas",
    copy: "Untuk pelajar yang rajin mengerjakan tugas dan aktif mengikuti event, tetapi belum pernah masuk jajaran teratas.",
    rarity: "Kartu apresiasi",
    accent: "#18d5ff",
    icon: CheckBadgeIcon,
    image: "/images/meca/mecademy-forgotten-one-character-v1.png",
    span: "lg:col-span-7",
    tilt: "-1.1deg",
  },
  {
    id: "rich-guy",
    label: "Meca Points tertinggi",
    title: "Rich Guy",
    subtitle: "Pengumpul poin dan hadiah terbanyak",
    copy: "Untuk pelajar dengan Meca Points atau hadiah terbanyak dalam satu season, terpisah dari peringkat akademik.",
    rarity: "Kartu kolektor",
    accent: "#b8ff5b",
    icon: BoltIcon,
    image: "/images/meca/mecademy-rich-guy-character-v1.png",
    span: "lg:col-span-5",
    tilt: "1.9deg",
  },
] as const;

export default function MecademyCardGallery({ variant }: { variant: "journey" | "titles" }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 145, damping: 24, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 145, damping: 24, mass: 0.45 });
  const foil = useTransform([smoothX, smoothY], ([x, y]) =>
    "radial-gradient(circle at " + x + "% " + y + "%, rgba(255,255,255,.58), rgba(102,224,255,.24) 12%, rgba(255,82,207,.15) 25%, transparent 44%)"
  );
  const cards = variant === "journey" ? journeyCards : titleCards;

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
    <div
      className={"mecademy-card-gallery mecademy-card-gallery--" + variant}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isTitleCard = "subtitle" in card;

        return (
          <motion.article
            key={card.id}
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.68, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className={card.span + " mecademy-collectible-card"}
            style={{
              "--collectible-accent": card.accent,
              "--collectible-tilt": card.tilt,
            } as CSSProperties}
          >
            <motion.span className="mecademy-collectible-card__foil" style={{ backgroundImage: foil }} aria-hidden="true" />
            <span className="mecademy-collectible-card__shine" aria-hidden="true" />

            <div className="mecademy-collectible-card__topline">
              <span className="mecademy-collectible-card__icon"><Icon className="h-6 w-6" /></span>
              <span>{card.label}</span>
              {isTitleCard && <span className="ml-auto text-right text-[10px] font-extrabold text-white/58">{card.rarity}</span>}
            </div>

            <div className={"mecademy-collectible-card__art" + (isTitleCard ? " mecademy-collectible-card__art--character" : "")} aria-hidden="true">
              <span className="mecademy-collectible-card__halo" />
              {"image" in card ? (
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="mecademy-collectible-card__character"
                />
              ) : (
                <Icon className="h-24 w-24 sm:h-28 sm:w-28" />
              )}
            </div>

            <div className="mecademy-collectible-card__copy">
              <h3 className={card.id === "king-queen" ? "text-2xl sm:text-3xl" : "text-3xl"}>{card.title}</h3>
              {isTitleCard && <p className="mt-2 text-sm font-extrabold" style={{ color: card.accent }}>{card.subtitle}</p>}
              <p className="mt-3 max-w-[58ch] text-sm leading-7 text-white/66">{card.copy}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
