"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowLeftIcon, ArrowUpRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MECA_NAV_LINKS, MECA_WHATSAPP_URL } from "@/lib/meca";

export default function MecaNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-[#101828] backdrop-blur-xl">
      <nav className="meca-container flex h-[72px] items-center justify-between" aria-label="Navigasi MECA">
        <a href="/meca" className="meca-focus-ring flex items-center gap-3 rounded-lg" aria-label="MECA Home">
          <Image src="/images/meca/meca-mark-transparent-v1.webp" alt="" width={816} height={929} priority unoptimized className="h-12 w-auto" />
          <span>
            <span className="meca-wordmark meca-display block text-xl font-extrabold leading-none">MECA</span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.06em] text-slate-500">by Mega Class Digital</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {MECA_NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`meca-focus-ring rounded-lg px-4 py-2 text-sm font-semibold transition ${active ? (link.href === "/meca/mecademy" ? "bg-[#0a1735] text-[#f2c45b]" : "bg-[#f7edcf] text-[#08244b]") : "text-slate-600 hover:bg-slate-100 hover:text-[#101828]"}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://megaclassdigital.com" className="meca-focus-ring hidden items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-[#08244b] xl:inline-flex" aria-label="Kembali ke website Mega Class Digital">
            <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Mega Class Digital
          </a>
          <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="meca-focus-ring flex items-center gap-2 rounded-lg bg-[#08244b] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0d3b73]">
            Minta demo
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="meca-mobile-menu" aria-label={isOpen ? "Tutup menu" : "Buka menu"} className="meca-focus-ring rounded-lg border border-slate-200 p-2.5 text-[#101828] md:hidden">
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div id="meca-mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="meca-container grid gap-1 px-0">
            {MECA_NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} aria-current={active ? "page" : undefined} className={`rounded-lg px-4 py-3.5 text-base font-semibold ${active ? (link.href === "/meca/mecademy" ? "bg-[#0a1735] text-[#f2c45b]" : "bg-[#f7edcf] text-[#08244b]") : "text-slate-700"}`}>{link.label}</a>;
            })}
            <a href="https://megaclassdigital.com" onClick={() => setIsOpen(false)} className="mt-2 flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-slate-500">
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              Mega Class Digital
            </a>
            <a href={MECA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 rounded-lg bg-[#08244b] px-5 py-3.5 text-center text-sm font-bold text-white">Minta demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
