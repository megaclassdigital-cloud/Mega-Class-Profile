"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Tutup mobile menu saat pathname berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Jika link yang diklik sama dengan halaman saat ini
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Jika berbeda, biarkan Link menjalankan navigasi normal
  };

  const navLinks = [
    { href: "/jasa-pembuatan-website", label: "Jasa Website" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/harga", label: "List & Add-On" },
    { href: "/tentang", label: "Profil Mega Class Digital" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Mega Class<span className="text-gray-900">Digital</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-5 py-2.5 rounded-full font-medium hover:brightness-110 transition-all"
            >
              Konsultasi Gratis
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-gray-700 hover:text-blue-600 py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="block bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-center px-5 py-2.5 rounded-full"
            >
              Konsultasi Gratis
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;