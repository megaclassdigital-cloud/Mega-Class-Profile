import type { Metadata } from "next";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BanknotesIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import MecaReveal from "@/components/meca/MecaReveal";
import MecaSectionCTA from "@/components/meca/MecaSectionCTA";
import MecademySpotlight from "@/components/meca/MecademySpotlight";
import MecaStructuredData from "@/components/meca/MecaStructuredData";

export const metadata: Metadata = {
  title: { absolute: "Fitur Aplikasi Administrasi Bimbel dan Kursus | MECA" },
  description: "Lihat fitur aplikasi administrasi bimbel dan kursus untuk mengelola kelas, absensi, materi, tugas, tagihan siswa, progres belajar, dan laporan pemilik.",
  alternates: { canonical: "/meca/fitur" },
  openGraph: {
    title: "Fitur Aplikasi Administrasi Bimbel dan Kursus | MECA",
    description: "Kelola kelas, siswa, materi, tugas, tagihan, progres belajar, dan laporan pemilik dalam satu website.",
    url: "https://megaclassdigital.com/meca/fitur",
  },
};

const features = [
  { icon: RectangleStackIcon, title: "Kelas dan materi", copy: "Susun modul, video, file, dan jadwal dalam urutan yang jelas.", tone: "bg-[#08244b] text-white", span: "lg:col-span-7" },
  { icon: IdentificationIcon, title: "Akses siswa", copy: "Setiap siswa hanya melihat kelas dan materi yang sesuai.", tone: "bg-[#f7edcf] text-[#101828]", span: "lg:col-span-5" },
  { icon: ClipboardDocumentCheckIcon, title: "Tugas dan ujian", copy: "Atur tenggat, pengumpulan, nilai, dan umpan balik.", tone: "bg-white text-[#101828]", span: "lg:col-span-5" },
  { icon: BanknotesIcon, title: "Pembayaran", copy: "Cek tagihan dan pembayaran tanpa membongkar riwayat chat.", tone: "bg-[#0d3b73] text-white", span: "lg:col-span-7" },
  { icon: ChartBarSquareIcon, title: "Progres belajar", copy: "Lihat materi, tugas, dan target yang sudah diselesaikan.", tone: "bg-white text-[#101828]", span: "lg:col-span-7" },
  { icon: PresentationChartLineIcon, title: "Ringkasan pemilik", copy: "Cek jumlah siswa, kelas, pembayaran, dan tugas dari satu halaman.", tone: "bg-[#d8a62a] text-[#172033]", span: "lg:col-span-5" },
] as const;

const roles = [
  ["Pemilik", "Melihat kelas, siswa, pembayaran, dan hasil belajar dari satu ringkasan."],
  ["Admin", "Mengatur data, akses, materi, tagihan, dan pengumuman."],
  ["Pengajar", "Menyiapkan materi, tugas, ujian, nilai, dan umpan balik."],
  ["Siswa", "Mengetahui apa yang harus dipelajari dan diselesaikan berikutnya."],
] as const;

export default function MecaFeaturesPage() {
  return (
    <main className="overflow-x-clip bg-[#f6f4ef]">
      <MecaStructuredData page="features" />
      <section className="meca-dark meca-page-hero relative overflow-hidden">
        <div className="meca-container relative">
          <MecaReveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="meca-hero-copy">
              <p className="text-xs font-bold tracking-[0.02em] text-[#f2c45b]">Fitur MECA</p>
              <h1>Kelola operasional bimbel tanpa rekap manual.</h1>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-[60ch] text-base leading-8 text-white/70 sm:text-lg">Fitur aplikasi administrasi bimbel MECA membantu mengatur kelas, data siswa, absensi, tugas, tagihan, progres belajar, dan laporan dari satu website.</p>
              <a href="/meca/mecademy" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f2c45b] hover:text-white">Lihat fitur Mecademy <ArrowRightIcon className="h-4 w-4" /></a>
            </div>
          </MecaReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="meca-container">
          <MecaReveal className="max-w-3xl">
            <p className="meca-eyebrow">Kebutuhan utama</p>
            <h2 className="meca-section-title mt-5">Yang bisa dikelola dengan MECA.</h2>
          </MecaReveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const muted = feature.tone.includes("text-white") ? "text-white/70" : "text-slate-600";
              return (
                <MecaReveal key={feature.title} delay={index * 0.04} className={`${feature.span} ${feature.tone} min-h-[270px] rounded-[22px] border border-[#dce5ec] p-7 shadow-[0_14px_40px_rgba(16,24,40,0.05)] sm:p-9`}>
                  <Icon className="h-9 w-9" aria-hidden="true" />
                  <h3 className="mt-14 text-2xl font-extrabold">{feature.title}</h3>
                  <p className={`mt-3 max-w-[50ch] text-sm leading-7 ${muted}`}>{feature.copy}</p>
                </MecaReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="meca-container grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <MecaReveal className="relative">
            <figure className="relative overflow-hidden rounded-[22px] border border-[#dce5ec] bg-[#f4fafc] p-2 shadow-[0_24px_70px_rgba(16,24,40,0.12)] sm:p-3">
              <Image src="/images/meca/meca-dashboard.png" alt="Visual konsep dashboard MECA dengan kelas, siswa, pembayaran, progres, dan Mecademy" width={1536} height={1024} unoptimized sizes="(max-width: 1024px) 100vw, 58vw" className="h-auto w-full rounded-[16px]" />
              <figcaption className="px-3 pb-2 pt-3 text-xs leading-5 text-slate-500">Visual demo dengan data contoh.</figcaption>
            </figure>
          </MecaReveal>
          <MecaReveal delay={0.08}>
            <p className="meca-eyebrow">Data yang terhubung</p>
            <h2 className="meca-section-title mt-5 text-[#101828]">Data kelas tidak perlu dicocokkan manual.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">Perubahan pada kelas, tugas, pembayaran, dan hasil belajar tercatat di tempat yang sama. Admin tidak perlu menyalin ulang data saat pemilik meminta ringkasan operasional.</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Cari data lebih cepat", "Kurangi input berulang", "Batasi akses pengguna", "Tambah fitur saat dibutuhkan"].map((item) => <div key={item} className="rounded-xl border border-[#dce5ec] bg-[#f7f9fc] p-4 text-sm font-bold text-[#101828]">{item}</div>)}
            </div>
          </MecaReveal>
        </div>
      </section>

      <section className="meca-academy-band py-20 sm:py-28">
        <div className="meca-container">
          <MecaReveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-[#d8a62a] text-[#172033] shadow-[0_12px_28px_rgba(216,166,42,0.24)]"><AcademicCapIcon className="h-8 w-8" /></span>
              <h2 className="meca-section-title mt-6 text-[#101828]">Setiap pengguna melihat menu sesuai tugasnya.</h2>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {roles.map(([role, copy]) => (
                <div key={role} className="border-t border-[#cdd5ef] py-6">
                  <h3 className="text-xl font-bold text-[#101828]">{role}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </MecaReveal>
        </div>
      </section>

      <section className="meca-academy-band border-y border-[#dbe1f3] py-20 sm:py-24">
        <div className="meca-container">
          <MecademySpotlight compact />
        </div>
      </section>

      <MecaSectionCTA title="Pilih fitur yang ingin Anda lihat." copy="Kami dapat mendemokan pengelolaan kelas, siswa, tugas, pembayaran, atau laporan sesuai kebutuhan." />
    </main>
  );
}
