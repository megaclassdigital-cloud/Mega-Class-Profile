import { CheckIcon } from "@heroicons/react/24/solid";
import MecaReveal from "./MecaReveal";

const before = ["WhatsApp", "Drive", "Spreadsheet", "Transfer", "Follow-up manual"];
const after = ["Course", "Student access", "Payment status", "Progress", "Recognition"];

export default function MecaVision() {
  return (
    <section className="bg-[#f4f8fc] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-4xl">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Digitalisasi kelas seharusnya merapikan proses, bukan menambah beban baru.</h2>
          <p className="mt-5 max-w-[70ch] text-lg leading-8 text-slate-600">
            WhatsApp dan Instagram tetap dapat digunakan. MECA merapikan bagian yang membutuhkan sistem: kelas, siswa, pembayaran, akses materi, progress, dan dashboard academy.
          </p>
        </MecaReveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[0.78fr_auto_1.22fr]">
          <MecaReveal className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-bold text-slate-500">Sebelum MECA</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {before.map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">{item}</span>)}
            </div>
            <p className="mt-8 text-lg font-bold text-slate-900">Banyak tempat, banyak pengecekan.</p>
          </MecaReveal>

          <div className="flex items-center justify-center text-2xl font-black text-blue-700" aria-hidden="true">→</div>

          <MecaReveal delay={0.08} className="rounded-2xl bg-[#0F2747] p-6 text-white shadow-[0_20px_60px_rgba(15,39,71,0.16)] sm:p-8">
            <p className="text-sm font-bold text-sky-200">Sesudah MECA</p>
            <h3 className="mt-3 text-2xl font-black">Satu dashboard, satu alur yang lebih jelas.</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {after.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-slate-100">
                  <CheckIcon className="h-4 w-4 text-sky-300" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </MecaReveal>
        </div>
        <p className="mt-8 text-xl font-black tracking-[-0.02em] text-[#0F2747]">Dari banyak tempat, menjadi satu alur yang lebih jelas.</p>
      </div>
    </section>
  );
}
