import MecaReveal from "./MecaReveal";

const steps = [
  ["Academy membuat kelas", "Admin menyusun course, modul, lesson, dan materi."],
  ["Siswa memilih kelas", "Siswa melihat daftar kelas dan detail program."],
  ["Siswa mendaftar", "Data siswa masuk agar dapat dipantau admin."],
  ["Pembayaran diverifikasi", "Admin memeriksa status dan membuka akses."],
  ["Siswa belajar dari dashboard", "Materi, video, file, dan progress tersedia bersama."],
  ["Perkembangan siswa terlihat", "Aktivitas, progress, dan apresiasi lebih mudah dipantau."],
] as const;

export default function MecaHowItWorks() {
  return (
    <section className="bg-[#f4f8fc] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Alur belajar online yang sederhana untuk siswa, admin, dan owner.</h2>
        </MecaReveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-blue-200 lg:block" aria-hidden="true" />
          {steps.map(([title, copy], index) => (
            <MecaReveal key={title} delay={index * 0.04} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-base font-black text-white shadow-[0_8px_20px_rgba(29,78,216,0.2)]">{index + 1}</div>
              <h3 className="mt-6 text-lg font-black text-slate-900">{title}</h3>
              <p className="mt-2 max-w-[34ch] text-sm leading-7 text-slate-600">{copy}</p>
            </MecaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
