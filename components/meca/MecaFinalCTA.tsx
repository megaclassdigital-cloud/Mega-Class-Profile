import { MECA_WHATSAPP_URL } from "@/lib/meca";
import MecaReveal from "./MecaReveal";

export default function MecaFinalCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MecaReveal className="overflow-hidden rounded-2xl bg-[#0F2747] px-6 py-14 text-center text-white shadow-[0_24px_70px_rgba(15,39,71,0.2)] sm:px-10 sm:py-16">
          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-[-0.04em] sm:text-5xl">Buat kelas digital Anda lebih tertata. Mulai dari demo MECA.</h2>
          <p className="mx-auto mt-6 max-w-[66ch] text-lg leading-8 text-slate-300">Ceritakan alur bimbel atau kursus Anda. Kami akan menunjukkan bagaimana MECA merapikan kelas, siswa, pembayaran, akses materi, dan progress.</p>
          <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex whitespace-nowrap rounded-xl bg-white px-7 py-3.5 text-sm font-black text-[#0F2747] transition hover:bg-sky-50 active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F2747]">Mulai Demo</a>
        </MecaReveal>
      </div>
    </section>
  );
}
