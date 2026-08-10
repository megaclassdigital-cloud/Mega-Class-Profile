"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function MecaMotionScene() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[680px] pb-8"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[5/3] overflow-hidden rounded-[24px] border border-[#d8a62a]/35 bg-[#102234] shadow-[0_28px_80px_rgba(0,0,0,0.28),0_0_45px_rgba(216,166,42,0.12)] sm:aspect-[4/3]"
      >
        <Image
          src="/images/meca/students-collaboration.jpg"
          alt="Siswa berkolaborasi dalam sesi belajar"
          fill
          priority
          loading="eager"
          unoptimized
          sizes="(max-width: 1024px) 94vw, 55vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a35]/70 via-transparent to-transparent" aria-hidden="true" />
      </motion.div>
      <motion.div animate={reduceMotion ? undefined : { y: [0, 5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-1 right-3 w-[58%] overflow-hidden rounded-[18px] border border-[#d8a62a]/55 bg-white p-1.5 shadow-[0_20px_55px_rgba(16,24,40,0.18),0_0_28px_rgba(216,166,42,0.16)] sm:right-7">
        <Image src="/images/meca/meca-dashboard.webp" alt="Cuplikan visual konsep dashboard MECA" width={1536} height={1024} unoptimized className="h-auto w-full rounded-[13px]" />
      </motion.div>
    </motion.div>
  );
}
