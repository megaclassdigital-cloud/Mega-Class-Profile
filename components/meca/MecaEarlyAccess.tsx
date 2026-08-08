import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { MECA_WHATSAPP_URL } from "@/lib/meca";
import MecaReveal from "./MecaReveal";

const points = ["Cocok untuk bimbel sekolah dan kursus musik", "Demo alur siswa, admin, dan owner", "Diskusi pain point lembaga Anda", "Prioritas untuk pilot partner awal", "Terbuka untuk 10 lembaga pertama pada tahap pilot demo"];

export default function MecaEarlyAccess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="rounded-2xl border border-blue-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ecfeff_100%)] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-blue-700">Early Access</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Pilot demo untuk lembaga belajar yang ingin mulai lebih rapi.</h2>
              <p className="mt-5 max-w-[62ch] text-lg leading-8 text-slate-600">Tahap awal MECA dibuka untuk memahami kebutuhan bimbel dan kursus sebelum pengembangan fitur berikutnya.</p>
              <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800 active:translate-y-px">Mulai Demo</a>
            </div>
            <ul className="grid gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold leading-6 text-slate-700 shadow-[0_8px_24px_rgba(15,39,71,0.05)]">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />{point}
                </li>
              ))}
            </ul>
          </div>
        </MecaReveal>
      </div>
    </section>
  );
}
