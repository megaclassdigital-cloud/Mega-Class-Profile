import type { Metadata } from "next";
import { ArrowRightIcon, ChatBubbleLeftRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import MecaReveal from "@/components/meca/MecaReveal";
import MecaSectionCTA from "@/components/meca/MecaSectionCTA";

export const metadata: Metadata = {
  title: "FAQ MECA",
  description: "Jawaban singkat tentang demo, fitur, kecocokan lembaga, data, dan proses penggunaan MECA.",
  alternates: { canonical: "/meca/faq" },
};

const faqGroups = [
  {
    title: "Tentang produk",
    items: [
      ["Apakah MECA sudah bisa langsung dipakai?", "Belum. MECA masih dalam tahap demo. Versi awal akan disesuaikan dengan kebutuhan lembaga pertama."],
      ["Apakah tampilan pengelolaan di website sudah aktif?", "Belum. Tampilan di website adalah visual demo dengan data contoh."],
      ["Apakah semua fitur langsung tersedia?", "Tidak. Fitur awal dipilih bersama, misalnya kelas, tugas, pembayaran, atau laporan. Fitur lain dapat ditambahkan setelahnya."],
    ],
  },
  {
    title: "Kecocokan lembaga",
    items: [
      ["MECA cocok untuk siapa?", "Untuk bimbel, tempat kursus, tutor privat, sekolah musik, dan lembaga belajar kecil hingga menengah."],
      ["Apakah kelas harus online?", "Tidak. MECA dapat digunakan untuk kelas tatap muka, kelas online, atau gabungan keduanya."],
      ["Apakah siswa masih bisa memakai WhatsApp?", "Bisa. WhatsApp tetap dipakai untuk komunikasi cepat. Materi, tugas, pembayaran, dan hasil belajar disimpan di MECA agar dapat dicari kembali."],
    ],
  },
  {
    title: "Penggunaan dan data",
    items: [
      ["Apakah bisa memakai brand lembaga sendiri?", "Bisa. Nama, warna, dan tampilan dapat disesuaikan setelah kebutuhan awal disepakati."],
      ["Bagaimana data siswa disimpan?", "Cara penyimpanan, akses, cadangan, dan keamanan data akan dibahas sebelum pembuatan dimulai."],
      ["Bagaimana cara melihat demo?", "Klik tombol demo dan ceritakan jenis lembaga, jumlah pengguna, serta masalah yang paling sering terjadi."],
    ],
  },
] as const;

export default function MecaFaqPage() {
  return (
    <main className="overflow-x-clip bg-[#f6f4ef]">
      <section className="meca-dark meca-page-hero relative overflow-hidden">
        <div className="meca-container relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <MecaReveal className="meca-hero-copy">
            <p className="text-xs font-bold tracking-[0.02em] text-[#f2c45b]">FAQ</p>
            <h1>Jawaban singkat sebelum melihat demo.</h1>
          </MecaReveal>
          <MecaReveal delay={0.08} className="rounded-[22px] border border-[#d8a62a]/45 bg-[#d8a62a]/10 p-7 shadow-[0_0_40px_rgba(216,166,42,0.1)]">
            <ShieldCheckIcon className="h-10 w-10 text-[#f2c45b]" />
            <p className="mt-7 text-xl font-bold">MECA masih dalam tahap demo.</p>
            <p className="mt-3 text-sm leading-7 text-white/70">Fitur awal dipilih setelah kami mengetahui cara lembaga Anda mengelola kelas, siswa, dan pembayaran.</p>
          </MecaReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="meca-container grid gap-14 lg:grid-cols-[0.64fr_1.36fr]">
          <MecaReveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="grid h-14 w-14 place-items-center rounded-[16px] bg-[#08244b] text-white shadow-[0_12px_28px_rgba(8,36,75,0.22)]"><ChatBubbleLeftRightIcon className="h-8 w-8" /></span>
            <h2 className="meca-section-title mt-6 text-[#101828]">Yang perlu Anda tahu.</h2>
            <p className="mt-5 max-w-[44ch] text-sm leading-7 text-slate-600">Belum menemukan jawaban? Ceritakan kebutuhan bimbel atau tempat kursus Anda.</p>
            <a href="/meca/fitur" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0d3b73]">Lihat fitur <ArrowRightIcon className="h-4 w-4" /></a>
          </MecaReveal>
          <div className="grid gap-10">
            {faqGroups.map((group, groupIndex) => (
              <MecaReveal key={group.title} delay={groupIndex * 0.05}>
                <p className="meca-eyebrow">{group.title}</p>
                <div className="mt-4 grid gap-3">
                  {group.items.map(([question, answer]) => (
                    <details key={question} className="group rounded-[18px] border border-[#dbe2ea] bg-white p-5 shadow-[0_10px_30px_rgba(16,24,40,0.035)] open:border-[#d8a62a]/70 open:shadow-[0_16px_40px_rgba(8,36,75,0.1)] sm:p-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-[#101828] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a8fbd]">
                        {question}
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#eef3fa] text-lg text-[#0d3b73] transition group-open:rotate-45 group-open:bg-[#d8a62a] group-open:text-[#172033]">+</span>
                      </summary>
                      <p className="mt-5 max-w-[78ch] border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600">{answer}</p>
                    </details>
                  ))}
                </div>
              </MecaReveal>
            ))}
          </div>
        </div>
      </section>

      <MecaSectionCTA eyebrow="Masih ada pertanyaan?" title="Ceritakan kebutuhan bimbel atau kursus Anda." copy="Kami bantu memilih fitur awal yang perlu ditampilkan dalam demo." />
    </main>
  );
}
