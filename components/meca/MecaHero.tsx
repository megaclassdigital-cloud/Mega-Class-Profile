import Image from "next/image";
import { MECA_WHATSAPP_URL } from "@/lib/meca";

export default function MecaHero() {
  return (
    <section id="home" className="scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(14,165,233,0.11),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#ffffff_82%)]">
      <div className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-800">
            Early Access. Pilot demo untuk bimbel dan kursus.
          </p>
          <h1 className="text-4xl font-black leading-[1.06] tracking-[-0.045em] text-[#0F2747] sm:text-5xl lg:text-[3.6rem]">
            Banyak kelas sudah online. <span className="text-blue-700">Sekarang saatnya tertata.</span>
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-8 text-slate-600">
            Kelola kelas, siswa, pembayaran, akses materi, dan progress belajar dalam satu platform academy dengan brand sendiri.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-blue-800 active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
              Mulai Demo
            </a>
            <a href="#fitur" className="whitespace-nowrap rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-bold text-slate-800 transition hover:border-blue-600 hover:text-blue-700 active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
              Lihat Fitur
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Demo diarahkan ke WhatsApp agar alurnya dapat disesuaikan dengan kebutuhan lembaga Anda.
          </p>
        </div>

        <div className="relative lg:-mr-24">
          <div className="absolute inset-x-10 bottom-0 h-24 rounded-full bg-blue-500/15 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,39,71,0.16)]">
            <Image src="/images/meca/meca-dashboard.webp" alt="Contoh dashboard MECA yang menyatukan kelas, siswa, pembayaran, progress, dan Mecademy" width={1536} height={1024} priority sizes="(max-width: 1024px) 100vw, 62vw" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
