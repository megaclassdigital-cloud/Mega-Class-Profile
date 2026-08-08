import MecaReveal from "./MecaReveal";

const faqs = [
  ["Apakah MECA cocok untuk bimbel offline?", "Ya. MECA cocok untuk bimbel offline yang ingin merapikan materi, siswa, pembayaran, dan akses kelas secara digital."],
  ["Apakah MECA bisa untuk kursus musik?", "Bisa. Kursus musik dapat menyusun materi per level, video latihan, tugas, dan progress siswa."],
  ["Apakah siswa tetap bisa memakai WhatsApp?", "Bisa. WhatsApp tetap digunakan untuk komunikasi cepat. MECA merapikan materi, akses, pembayaran, dan progress yang sulit dikelola lewat chat."],
  ["Apakah harus punya video pembelajaran dulu?", "Tidak harus. Academy dapat mulai dari modul, PDF, latihan, atau materi sederhana. Video dapat ditambahkan bertahap."],
  ["Apakah pembayaran sudah otomatis?", "Untuk tahap awal, pembayaran menggunakan verifikasi manual. Integrasi payment gateway dapat dikembangkan sesuai kebutuhan."],
  ["Apa itu Mecademy?", "Mecademy adalah fitur engagement dan apresiasi siswa di dalam MECA."],
  ["Apa itu MVS?", "MVS adalah The Most Valuable Student, apresiasi untuk siswa dengan performa terbaik secara menyeluruh."],
  ["Apa itu The Forgotten One?", "The Forgotten One adalah spotlight positif untuk siswa yang rajin, aktif, dan konsisten, tetapi sering tidak terlihat di ranking utama."],
  ["Apakah MECA sudah bisa langsung digunakan?", "Saat ini MECA dibuka pada tahap pilot demo untuk memahami kebutuhan bimbel dan kursus sebelum pengembangan lebih lanjut."],
  ["Apakah MECA memakai brand lembaga sendiri?", "Ya. MECA dirancang agar academy dapat menggunakan nama, warna, dan identitas platform miliknya sendiri."],
] as const;

export default function MecaFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#f4f8fc] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <MecaReveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Pertanyaan yang sering muncul</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">Informasi awal untuk membantu academy memahami posisi MECA pada tahap pilot demo.</p>
        </MecaReveal>
        <MecaReveal className="grid gap-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-300 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                {question}
                <span className="text-xl font-medium text-blue-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 max-w-[70ch] border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </MecaReveal>
      </div>
    </section>
  );
}
