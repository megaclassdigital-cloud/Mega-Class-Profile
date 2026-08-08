import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  MusicalNoteIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MecaReveal from "./MecaReveal";

const useCases = [
  { icon: BookOpenIcon, title: "Bimbel Sekolah", copy: "Kelola paket belajar, kelas rekaman, latihan soal, dan akses siswa." },
  { icon: MusicalNoteIcon, title: "Kursus Musik", copy: "Susun materi per level, video latihan, jadwal, dan perkembangan siswa." },
  { icon: AcademicCapIcon, title: "Sekolah Musik", copy: "Pantau perjalanan belajar dari basic, intermediate, sampai advanced." },
  { icon: UserIcon, title: "Private Tutor", copy: "Ubah materi privat menjadi kelas digital yang dapat diakses ulang." },
  { icon: BuildingLibraryIcon, title: "Academy Kecil-Menengah", copy: "Mulai jual kelas online tanpa membangun sistem besar dari nol." },
];

export default function MecaUseCases() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Dibuat untuk lembaga belajar yang ingin kelas digitalnya lebih rapi.</h2>
        </MecaReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            const layout = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <MecaReveal key={item.title} delay={index * 0.04} className={`${layout} rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(15,39,71,0.08)]`}>
                <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
              </MecaReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
