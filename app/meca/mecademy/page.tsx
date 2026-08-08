import type { Metadata } from "next";
import Image from "next/image";
import {
  BoltIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import MecaBadgeOrbit from "@/components/meca/MecaBadgeOrbit";
import MecademyCardGallery from "@/components/meca/MecademyCardGallery";
import MecaReveal from "@/components/meca/MecaReveal";
import MecaSectionCTA from "@/components/meca/MecaSectionCTA";

export const metadata: Metadata = {
  title: "Mecademy | Misi, Poin, dan Julukan Siswa",
  description: "Siswa menyelesaikan misi, mengumpulkan poin, naik peringkat, dan mendapatkan julukan berdasarkan tugas yang selesai.",
  alternates: { canonical: "/meca/mecademy" },
};

export default function MecademyPage() {
  return (
    <main className="mecademy-page overflow-x-clip">
      <section className="relative isolate overflow-hidden">
        <div className="meca-neon-grid absolute inset-0 -z-20 opacity-60" aria-hidden="true" />
        <div className="absolute -left-28 top-12 -z-10 h-80 w-80 rounded-full bg-[#8b5cf6]/25 blur-[110px]" aria-hidden="true" />
        <div className="absolute -right-20 bottom-8 -z-10 h-96 w-96 rounded-full bg-[#18d5ff]/18 blur-[120px]" aria-hidden="true" />
        <div className="meca-container grid min-h-[calc(100dvh-68px)] items-center gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <MecaReveal className="meca-hero-copy relative z-10">
            <p className="flex items-center gap-2 text-xs font-extrabold tracking-[0.05em] text-[#f2c45b]"><BoltIcon className="h-4 w-4" />Mecademy</p>
            <h1 className="mecademy-text-glow">Selesaikan misi. Raih julukan.</h1>
            <p className="mt-7 max-w-[56ch] text-base leading-8 text-white/70 sm:text-lg">Setiap tugas dan aktivitas dapat menghasilkan poin, peringkat, atau julukan dengan syarat yang jelas.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Misi", "Poin", "Peringkat", "Julukan", "Pamer Karya"].map((item, index) => (
                <span key={item} className="rounded-lg border bg-[#0d1538]/80 px-3 py-2 text-xs font-bold text-white/85 backdrop-blur-md" style={{ borderColor: ["#18d5ff66", "#ff4fd866", "#b8ff5b66", "#ffd84d66", "#8b5cf666"][index] }}>{item}</span>
              ))}
            </div>
            <div className="mt-9 h-1 w-32 rounded-full mecademy-neon-line" aria-hidden="true" />
          </MecaReveal>
          <MecaReveal delay={0.08}><MecaBadgeOrbit /></MecaReveal>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#18d5ff]/55 to-transparent" />
        <div className="meca-container">
          <MecaReveal className="max-w-4xl">
            <p className="meca-eyebrow">Perjalanan siswa</p>
            <h2 className="meca-section-title mt-5 mecademy-text-glow">Setiap aktivitas punya hasil yang jelas.</h2>
            <p className="mt-6 max-w-[65ch] text-base leading-8 text-white/65">Tugas selesai menambah poin. Poin membuka peringkat dan julukan sesuai aturan yang ditentukan.</p>
          </MecaReveal>
          <div className="mt-14"><MecademyCardGallery variant="journey" /></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0f29] py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,79,216,0.14),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(184,255,91,0.09),transparent_28%)]" aria-hidden="true" />
        <div className="meca-container relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <MecaReveal className="lg:sticky lg:top-28">
            <h2 className="meca-section-title mt-6 mecademy-text-glow">Setiap julukan punya cara mendapatkannya.</h2>
            <p className="mt-6 max-w-[52ch] text-base leading-8 text-white/65">Syaratnya tampil jelas. Siswa tahu apa yang perlu dilakukan untuk mendapatkan setiap julukan.</p>
          </MecaReveal>
          <MecademyCardGallery variant="titles" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="meca-container">
          <MecaReveal className="max-w-4xl">
            <p className="meca-eyebrow">Event dan pamer karya</p>
            <h2 className="meca-section-title mt-5 mecademy-text-glow">Ikuti tantangan dan pamerkan hasil karya.</h2>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-white/65">Siswa dapat mengikuti event, mengirim karya, melihat hasil peserta lain, dan mendapatkan umpan balik.</p>
          </MecaReveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <MecaReveal className="mecademy-event-card relative min-h-[460px] overflow-hidden rounded-[22px] border border-[#18d5ff]/25 shadow-[0_0_55px_rgba(24,213,255,0.12)]">
              <Image src="/images/meca/mecademy-classroom-event-v1.png" alt="Sekelompok siswa berdiskusi dan mengerjakan proyek di dalam kelas" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b1d] via-[#070b1d]/25 to-transparent" />
              <div className="absolute bottom-0 z-10 p-7 sm:p-9"><p className="text-xs font-bold text-[#f2c45b]">Contoh event</p><h3 className="mt-3 text-3xl font-extrabold">Pekan Proyek Bareng</h3><p className="mt-3 max-w-xl text-sm leading-7 text-white/70">Siswa menyelesaikan tantangan, mempresentasikan hasil, lalu mendapat umpan balik dan julukan.</p></div>
            </MecaReveal>
            <MecaReveal delay={0.08} className="meca-neon-card mecademy-rare-card grid content-between rounded-[22px] p-7 sm:p-9">
              <div className="mecademy-event-variation" aria-hidden="true"><span /><span /><span /><span /></div>
              <TrophyIcon className="relative z-10 h-11 w-11 text-[#ffd84d] drop-shadow-[0_0_14px_rgba(255,216,77,0.65)]" />
              <div className="relative z-10"><h3 className="text-3xl font-extrabold">Jenis event dapat disesuaikan.</h3><p className="mt-4 text-sm leading-7 text-white/65">Event di halaman ini adalah contoh, bukan program yang sudah berjalan.</p></div>
            </MecaReveal>
          </div>
        </div>
      </section>

      <MecaSectionCTA variant="neon" eyebrow="Demo Mecademy" title="Pilih aktivitas yang akan menghasilkan poin." copy="Tugas, kehadiran, event, dan karya dapat diubah menjadi misi, poin, peringkat, atau julukan." />
    </main>
  );
}
