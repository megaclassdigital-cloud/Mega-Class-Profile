import Image from "next/image";
import { CheckBadgeIcon, ClockIcon, TrophyIcon } from "@heroicons/react/24/outline";
import MecaReveal from "./MecaReveal";

const badges = ["Consistent Learner", "Task Finisher", "Event Active", "Rising Student", "MVS", "The Forgotten One"];

export default function MecaMecademy() {
  return (
    <section id="mecademy" className="scroll-mt-24 bg-[#0F2747] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-4xl">
          <p className="mb-5 text-sm font-bold text-sky-300">Pembeda utama MECA</p>
          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-5xl">Mecademy membantu siswa menjadi lebih terlihat.</h2>
          <p className="mt-6 max-w-[68ch] text-lg leading-8 text-slate-300">Tidak semua siswa berkembang dengan cara yang sama. Mecademy melihat nilai, konsistensi, keaktifan, tugas, event, dan partisipasi belajar.</p>
          <p className="mt-5 text-xl font-black text-sky-200">MECA membantu kelas menjadi tertata. Mecademy membantu siswa menjadi terlihat.</p>
        </MecaReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <MecaReveal className="rounded-2xl border border-amber-300/30 bg-[linear-gradient(145deg,rgba(245,158,11,0.18),rgba(255,255,255,0.04))] p-7 sm:p-8">
            <TrophyIcon className="h-9 w-9 text-amber-300" aria-hidden="true" />
            <h3 className="mt-7 text-2xl font-black text-amber-200">MVS: The Most Valuable Student</h3>
            <p className="mt-4 leading-8 text-slate-200">Apresiasi untuk performa terbaik secara menyeluruh berdasarkan nilai, keaktifan, penyelesaian tugas, dan kontribusi dalam kelas.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Top Performer", "Active Learner", "Task Finisher"].map((item) => <span key={item} className="rounded-lg border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-sm font-bold text-amber-100">{item}</span>)}
            </div>
          </MecaReveal>

          <MecaReveal delay={0.08} className="rounded-2xl border border-violet-300/30 bg-[linear-gradient(145deg,rgba(139,92,246,0.2),rgba(34,211,238,0.06))] p-7 sm:p-8">
            <CheckBadgeIcon className="h-9 w-9 text-violet-300" aria-hidden="true" />
            <h3 className="mt-7 text-2xl font-black text-violet-200">The Forgotten One</h3>
            <p className="mt-4 leading-8 text-slate-200">Spotlight untuk siswa yang rajin, aktif, dan konsisten, tetapi tidak selalu berada di ranking tertinggi.</p>
            <p className="mt-5 rounded-xl bg-white/10 p-4 text-sm leading-7 text-slate-200">Ini bukan label negatif. Ini adalah ruang apresiasi bagi siswa yang terus berusaha meski pencapaiannya tidak selalu paling terlihat.</p>
          </MecaReveal>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <MecaReveal className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="relative aspect-[16/8.8] overflow-hidden rounded-xl">
              <Image src="/images/meca/meca-dashboard.png" alt="Contoh tampilan Mecademy pada dashboard MECA" fill sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover object-bottom" />
            </div>
          </MecaReveal>

          <MecaReveal delay={0.08} className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8">
            <ClockIcon className="h-9 w-9 text-sky-300" aria-hidden="true" />
            <h3 className="mt-7 text-2xl font-black">Student Journey</h3>
            <p className="mt-4 leading-8 text-slate-300">Lihat jejak belajar dari waktu ke waktu: kelas yang diikuti, materi yang selesai, tugas yang dikumpulkan, dan aktivitas siswa.</p>
            <h4 className="mt-8 text-base font-black text-white">Engagement Badge</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge) => <span key={badge} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-slate-200">{badge}</span>)}
            </div>
          </MecaReveal>
        </div>

        <MecaReveal className="mt-14 max-w-4xl border-l-4 border-amber-400 pl-6 text-2xl font-black leading-snug tracking-[-0.02em] text-white sm:text-3xl">
          Karena pendidikan bukan hanya tentang siapa yang paling cepat unggul. Tapi juga tentang siapa yang terus hadir, berusaha, dan bertumbuh.
        </MecaReveal>
      </div>
    </section>
  );
}
