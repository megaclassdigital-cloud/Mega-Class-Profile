import { MECA_WHATSAPP_URL } from "@/lib/meca";
import MecaReveal from "./MecaReveal";

export default function MecaDemoCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <MecaReveal>
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#0F2747] sm:text-4xl">Coba lihat bagaimana MECA bekerja untuk bimbel atau kursus Anda.</h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-8 text-slate-600">Demo melalui WhatsApp membantu kami memahami alur lembaga Anda, lalu menunjukkan flow MECA yang paling relevan.</p>
          <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800 active:translate-y-px">Mulai Demo</a>
          <p className="mt-4 text-sm leading-6 text-slate-500">Tidak perlu langsung membeli. Mulai dari diskusi kebutuhan dan contoh alur demo.</p>
        </MecaReveal>

        <MecaReveal delay={0.08} className="rounded-2xl border border-slate-200 bg-[#f4f8fc] p-5 sm:p-8">
          <div className="rounded-xl bg-white p-5 shadow-[0_12px_36px_rgba(15,39,71,0.08)]">
            <p className="text-sm font-black text-slate-900">Percakapan demo</p>
            <div className="mt-6 flex justify-end">
              <p className="max-w-[78%] rounded-xl rounded-br-sm bg-blue-700 px-4 py-3 text-sm leading-6 text-white">Hai, saya mau coba platform MECA.</p>
            </div>
            <div className="mt-4 flex justify-start">
              <p className="max-w-[84%] rounded-xl rounded-bl-sm border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">Halo Kak, boleh kami tahu jenis lembaga dan alur kelas yang berjalan saat ini?</p>
            </div>
          </div>
        </MecaReveal>
      </div>
    </section>
  );
}
