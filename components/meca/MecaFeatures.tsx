import {
  AcademicCapIcon,
  BanknotesIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  IdentificationIcon,
  PaintBrushIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import MecaReveal from "./MecaReveal";

const features = [
  { icon: AcademicCapIcon, title: "Kelas & Materi", copy: "Kelola course, modul, video, file, dan materi belajar dalam susunan yang lebih rapi.", tone: "bg-blue-50" },
  { icon: IdentificationIcon, title: "Akses Siswa", copy: "Siswa melihat kelas yang diikuti dan mengakses materi dari dashboard masing-masing.", tone: "bg-white" },
  { icon: BanknotesIcon, title: "Pembayaran & Verifikasi", copy: "Pantau status pembayaran dan buka akses setelah pembayaran terverifikasi.", tone: "bg-sky-50" },
  { icon: Cog6ToothIcon, title: "Dashboard Admin", copy: "Kelola kelas, siswa, materi, pembayaran, dan akses dari satu tempat.", tone: "bg-white" },
  { icon: ChartBarSquareIcon, title: "Progress Belajar", copy: "Lihat perkembangan berdasarkan materi, tugas, dan aktivitas belajar siswa.", tone: "bg-blue-50" },
  { icon: PaintBrushIcon, title: "Brand Academy", copy: "Gunakan identitas lembaga sendiri agar pengalaman belajar terlihat profesional.", tone: "bg-white" },
];

export default function MecaFeatures() {
  return (
    <section id="fitur" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Fitur yang fokus pada alur penting academy.</h2>
          <p className="mt-5 max-w-[64ch] text-lg leading-8 text-slate-600">MECA tidak dibuat menjadi aplikasi kursus online yang berat. Fokusnya adalah alur inti yang paling sering membuat admin, siswa, dan owner kewalahan.</p>
        </MecaReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const span = index === 0 || index === 5 ? "lg:col-span-7" : "lg:col-span-5";
            return (
              <MecaReveal key={feature.title} delay={index * 0.035} className={`${span} rounded-2xl border border-slate-200 ${feature.tone} p-6 sm:p-7`}>
                <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-black text-slate-900">{feature.title}</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-7 text-slate-600">{feature.copy}</p>
              </MecaReveal>
            );
          })}
          <MecaReveal className="rounded-2xl border border-blue-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ecfeff_100%)] p-6 md:col-span-2 sm:p-8 lg:col-span-12">
            <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <SparklesIcon className="h-10 w-10 text-blue-700" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-black text-[#0F2747]">Mecademy Special Layer</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Fitur apresiasi siswa untuk melihat prestasi, konsistensi, keaktifan, dan pertumbuhan dari sudut yang lebih utuh.</p>
              </div>
              <a href="#mecademy" className="w-fit whitespace-nowrap rounded-xl bg-[#0F2747] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900 active:translate-y-px">Pelajari Mecademy</a>
            </div>
          </MecaReveal>
        </div>
      </div>
    </section>
  );
}
