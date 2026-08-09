import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { MECA_CONTACT, MECA_NAV_LINKS, MECA_WHATSAPP_URL } from "@/lib/meca";

export default function MecaFooter() {
  return (
    <footer className="bg-[#061a35] text-white">
      <div className="meca-container grid gap-12 py-14 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
        <div>
          <Image src="/images/meca/meca-logo-transparent-v1.png" alt="MECA" width={1129} height={1393} unoptimized className="h-28 w-auto" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">Atur kelas, jadwal, siswa, materi, pembayaran, tugas, dan laporan bimbel dari satu website.</p>
          <p className="mt-5 text-xs font-semibold tracking-[0.04em] text-[#f2c45b]">Saat ini tersedia dalam bentuk demo.</p>
          <a href="https://megaclassdigital.com" className="mt-5 inline-flex text-xs font-semibold text-white/45 transition hover:text-white/80">Kembali ke Mega Class Digital</a>
        </div>
        <nav aria-label="Navigasi footer MECA">
          <p className="text-sm font-bold text-white">Jelajahi</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/60">
            {MECA_NAV_LINKS.map((link) => <li key={link.href}><a href={link.href} className="transition hover:text-white">{link.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-bold text-white">Hubungi kami</p>
          <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-between rounded-xl border border-white/15 px-4 py-4 text-sm font-semibold text-white transition hover:border-[#f2c45b] hover:bg-white/5">
            WhatsApp {MECA_CONTACT.whatsappLabel}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${MECA_CONTACT.email}`} className="mt-3 block break-all text-sm text-white/55 hover:text-white">{MECA_CONTACT.email}</a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
        © 2026 <a href="https://megaclassdigital.com" className="transition hover:text-white/80">Mega Class Digital</a>. MECA masih dalam tahap demo.
      </div>
    </footer>
  );
}
