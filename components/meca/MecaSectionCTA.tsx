import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { MECA_WHATSAPP_URL } from "@/lib/meca";
import MecaReveal from "./MecaReveal";

export default function MecaSectionCTA({
  eyebrow = "Demo MECA",
  title = "Punya bimbel atau tempat kursus?",
  copy = "Ceritakan cara kerja tim Anda. Kami tunjukkan bagian yang bisa dirapikan dengan MECA.",
  variant = "default",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  variant?: "default" | "neon";
}) {
  const isNeon = variant === "neon";
  return (
    <section className={`${isNeon ? "bg-[#070b1d]" : "bg-white"} py-20 sm:py-28`}>
      <div className="meca-container">
        <MecaReveal className={`relative overflow-hidden rounded-[24px] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16 ${isNeon ? "meca-neon-card" : "bg-[#061a35]"}`}>
          <div className="relative z-10 grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.02em] text-[#f2c45b]">{eyebrow}</p>
              <h2 className="meca-section-title mt-5 max-w-4xl">{title}</h2>
              <p className="mt-6 max-w-[64ch] text-base leading-8 text-white/70">{copy}</p>
            </div>
            <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`meca-focus-ring inline-flex w-fit items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 lg:justify-self-end ${isNeon ? "bg-[#b8ff5b] text-[#08101d] hover:bg-[#d2ff99]" : "bg-[#d8a62a] text-[#061a35] hover:bg-[#f2c45b]"}`}>
              Minta demo
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </MecaReveal>
      </div>
    </section>
  );
}
