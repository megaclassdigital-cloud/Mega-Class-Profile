import { CheckIcon, MinusIcon } from "@heroicons/react/24/solid";
import MecaReveal from "./MecaReveal";

const comparisons = [
  { title: "Website biasa", items: ["Menampilkan informasi", "Tidak mengatur akses belajar", "Tidak memantau progress", "Materi tetap dikirim manual"], featured: false },
  { title: "LMS besar", items: ["Fiturnya sangat banyak", "Setup dapat terasa rumit", "Tidak selalu cocok untuk lembaga kecil", "Perlu mempelajari platform baru"], featured: false },
  { title: "MECA", items: ["Fokus pada alur inti academy", "Kelas, siswa, pembayaran, progress, dan apresiasi", "Dapat dimulai dari pilot demo", "Tetap menghargai tools familiar", "Membawa brand lembaga sendiri"], featured: true },
] as const;

export default function MecaWhy() {
  return (
    <section className="bg-[#f4f8fc] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Bukan website biasa. Bukan LMS yang terasa berat.</h2>
        </MecaReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-[0.82fr_0.82fr_1.36fr]">
          {comparisons.map((column, index) => (
            <MecaReveal key={column.title} delay={index * 0.06} className={`rounded-2xl p-6 sm:p-7 ${column.featured ? "bg-[#0F2747] text-white shadow-[0_22px_60px_rgba(15,39,71,0.18)]" : "border border-slate-200 bg-white text-slate-900"}`}>
              <h3 className="text-xl font-black">{column.title}</h3>
              <ul className="mt-7 space-y-4">
                {column.items.map((item) => (
                  <li key={item} className={`flex items-start gap-3 text-sm leading-6 ${column.featured ? "text-slate-200" : "text-slate-600"}`}>
                    {column.featured ? <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sky-300" /> : <MinusIcon className="mt-1 h-4 w-4 shrink-0 text-slate-400" />}
                    {item}
                  </li>
                ))}
              </ul>
            </MecaReveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg font-bold leading-8 text-[#0F2747]">MECA dibangun agar lembaga belajar dapat mulai dari sistem sederhana, lalu berkembang bertahap sesuai kebutuhan academy.</p>
      </div>
    </section>
  );
}
