import type { Metadata } from "next";
import {
  ArrowRightIcon,
  BoltIcon,
  ChartBarSquareIcon,
  CheckBadgeIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import MecaMotionScene from "@/components/meca/MecaMotionScene";
import MecaReveal from "@/components/meca/MecaReveal";
import MecaSectionCTA from "@/components/meca/MecaSectionCTA";
import MecaFeatureCardShowcase from "@/components/meca/MecaFeatureCardShowcase";
import { MECA_WHATSAPP_URL } from "@/lib/meca";

export const metadata: Metadata = {
  title: "Website Pengelolaan Bimbel dan Tempat Kursus",
  description: "MECA membantu bimbel dan tempat kursus mengatur kelas, jadwal, siswa, materi, pembayaran, dan hasil belajar dalam satu website.",
  alternates: { canonical: "/meca" },
};

const pillars = [
  { label: "Untuk pengelola", copy: "Pantau kelas, siswa, pembayaran, dan laporan.", icon: RectangleGroupIcon, color: "bg-[#08244b] text-white" },
  { label: "Untuk pengajar", copy: "Bagikan materi, tugas, ujian, dan nilai.", icon: ChartBarSquareIcon, color: "bg-[#d8a62a] text-[#172033]" },
  { label: "Untuk siswa", copy: "Lihat jadwal, materi, nilai, dan julukan.", icon: CheckBadgeIcon, color: "bg-[#0d3b73] text-white" },
] as const;

const scattered = ["Jadwal berubah di chat", "Materi tercecer di Drive", "Pembayaran direkap manual", "Tugas sulit dipantau", "Pemilik menunggu laporan"];

export default function MecaPage() {
  return (
    <main className="overflow-x-clip bg-[#f6f4ef]">
      <section className="meca-dark relative overflow-hidden">
        <div className="meca-container relative grid min-h-[calc(100dvh-68px)] items-center gap-14 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <MecaReveal className="meca-hero-copy">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.02em] text-[#f2c45b]">
                <BoltIcon className="h-4 w-4" />
                Website pengelolaan bimbel dan tempat kursus
              </p>
              <h1 className="text-white">
                Kelola bimbel dan kursus <span className="text-[#f2c45b]">dalam satu website.</span>
              </h1>
              <p className="mt-7 max-w-[58ch] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Atur kelas, jadwal, siswa, materi, pembayaran, dan progres belajar tanpa bolak-balik chat, Drive, dan spreadsheet.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="meca-focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[#d8a62a] px-6 py-3.5 text-sm font-bold text-[#061a35] transition hover:-translate-y-0.5 hover:bg-[#f2c45b]">
                  Minta demo
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="/meca/fitur" className="meca-focus-ring inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Lihat cara kerjanya</a>
              </div>
            </MecaReveal>
          </div>
          <div className="relative z-10 lg:-mr-12">
            <MecaMotionScene />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="meca-container grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.label} className="flex gap-4 py-7 md:px-6 md:first:pl-0 md:last:pr-0">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white ${pillar.color}`}><Icon className="h-5 w-5" /></span>
                <div><h2 className="text-sm font-bold text-[#101828]">{pillar.label}</h2><p className="mt-1 text-xs leading-5 text-slate-500">{pillar.copy}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="meca-container grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <MecaReveal className="lg:sticky lg:top-28">
            <p className="meca-eyebrow">Masalah sehari-hari</p>
            <h2 className="meca-section-title mt-5 text-[#101828]">Capek cek chat, Drive, dan spreadsheet?</h2>
            <p className="mt-6 max-w-[55ch] text-base leading-8 text-slate-600">Jadwal, materi, pembayaran, dan laporan tersimpan di satu website. Admin tidak perlu mencocokkan data dari banyak tempat.</p>
          </MecaReveal>
          <div className="grid gap-3">
            {scattered.map((item, index) => (
              <MecaReveal key={item} delay={index * 0.045} className="group flex items-center gap-4 border-b border-slate-200 py-5 sm:py-6">
                <span className="h-6 w-1 rounded-full bg-[#cfeff7] transition group-hover:bg-[#0a8fbd]" aria-hidden="true" />
                <p className="text-lg font-semibold text-[#101828] sm:text-xl">{item}</p>
              </MecaReveal>
            ))}
            <MecaReveal className="mt-4 rounded-[22px] border border-[#bde7f2] bg-[#e9f8fc] p-7 text-[#101828] sm:p-9">
              <p className="meca-eyebrow">Dengan MECA</p>
              <p className="mt-4 max-w-2xl text-2xl font-bold leading-snug sm:text-3xl">Jadwal, materi, tagihan, tugas, dan laporan tersedia di satu tempat.</p>
            </MecaReveal>
          </div>
        </div>
      </section>

      <MecaFeatureCardShowcase />

      <MecaSectionCTA />
    </main>
  );
}
