"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  CursorArrowRaysIcon,
  BuildingOffice2Icon,
  BookOpenIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const categories = [
  "Landing Page",
  "Company Profile",
  "Website Katalog",
  "Toko Online",
  "Website LMS / Study",
] as const;

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Landing Page": CursorArrowRaysIcon,
  "Company Profile": BuildingOffice2Icon,
  "Website Katalog": BookOpenIcon,
  "Toko Online": ShoppingBagIcon,
  "Website LMS / Study": AcademicCapIcon,
};

type Paket = {
  name: string;
  desc: string;
  features: string[];
  popular?: boolean;
};

const pricingData: Record<string, Paket[]> = {
  "Landing Page": [
    { name: "Paket Start", desc: "Cocok untuk mulai promosi secara simpel", features: ["1 halaman website", "Desain profesional & responsive", "Tombol WhatsApp langsung", "Struktur siap promosi", "SEO basic (indexing Google)", "Domain & hosting"] },
    { name: "Paket Growth", desc: "Cocok untuk hasil yang lebih maksimal", features: ["Hingga 3–5 section terstruktur", "Desain lebih detail & rapi", "CTA (WhatsApp) lebih optimal", "Struktur lebih siap untuk iklan", "SEO basic + struktur lebih rapi", "Domain & hosting"], popular: true },
    { name: "Paket Scale", desc: "Cocok untuk kebutuhan profesional & serius", features: ["Full custom layout", "Struktur lebih kompleks", "Optimasi tampilan & flow", "Siap untuk campaign serius", "SEO basic + struktur premium", "Domain & hosting"] },
    { name: "Paket Custom", desc: "Untuk kebutuhan khusus", features: ["Request fitur sesuai kebutuhan", "Diskusi langsung sesuai bisnis"] },
  ],
  "Company Profile": [
    { name: "Paket Start", desc: "Cocok untuk memperkenalkan bisnis", features: ["3–5 halaman website", "Desain profesional", "Informasi bisnis dasar", "Tombol WhatsApp & kontak", "SEO basic", "Domain & hosting"] },
    { name: "Paket Growth", desc: "Cocok untuk bisnis yang ingin tampil lebih meyakinkan", features: ["Hingga 7–10 halaman", "Struktur lebih lengkap", "Desain lebih rapi", "Navigasi lebih jelas", "SEO basic + struktur lebih baik", "Domain & hosting"], popular: true },
    { name: "Paket Scale", desc: "Cocok untuk branding yang lebih kuat", features: ["Halaman lebih fleksibel", "Desain lebih premium", "Struktur konten lebih matang", "SEO basic + struktur optimal", "Domain & hosting"] },
    { name: "Paket Custom", desc: "Untuk kebutuhan khusus perusahaan", features: ["Fitur & halaman sesuai request", "Diskusi langsung"] },
  ],
  "Website Katalog": [
    { name: "Paket Start", desc: "Cocok untuk menampilkan produk sederhana", features: ["Halaman katalog produk", "Tampilan rapi", "WhatsApp untuk pemesanan", "SEO basic", "Domain & hosting"] },
    { name: "Paket Growth", desc: "Cocok untuk produk lebih banyak", features: ["Kategori produk", "Navigasi lebih jelas", "Tampilan lebih terstruktur", "WhatsApp order", "SEO basic", "Domain & hosting"], popular: true },
    { name: "Paket Scale", desc: "Cocok untuk katalog profesional", features: ["Struktur produk lebih lengkap", "Tampilan lebih premium", "User experience lebih nyaman", "SEO basic", "Domain & hosting"] },
    { name: "Paket Custom", desc: "Untuk kebutuhan katalog khusus", features: ["Request sesuai kebutuhan"] },
  ],
  "Toko Online": [
    { name: "Paket Start", desc: "Cocok untuk mulai jualan online", features: ["Produk + keranjang", "Checkout sederhana", "Tampilan toko", "SEO basic", "Domain & hosting"] },
    { name: "Paket Growth", desc: "Cocok untuk sistem lebih lengkap", features: ["Payment gateway", "Dashboard produk", "Tampilan lebih profesional", "Struktur lebih rapi", "SEO basic", "Domain & hosting"], popular: true },
    { name: "Paket Scale", desc: "Cocok untuk bisnis serius", features: ["Sistem toko lebih lengkap", "Pengalaman user lebih baik", "Struktur siap berkembang", "SEO basic", "Domain & hosting"] },
    { name: "Paket Custom", desc: "Untuk kebutuhan e-commerce khusus", features: ["Request sesuai kebutuhan"] },
  ],
  "Website LMS / Study": [
    { name: "Paket Start", desc: "Cocok untuk mulai kelas online", features: ["Halaman course", "Tampilan materi", "Login user", "Domain & hosting"] },
    { name: "Paket Growth", desc: "Cocok untuk kelas lebih terstruktur", features: ["Struktur course lebih rapi", "User management", "Tampilan profesional", "Domain & hosting"], popular: true },
    { name: "Paket Scale", desc: "Cocok untuk platform belajar serius", features: ["Sistem lebih kompleks", "User experience lebih baik", "Struktur siap berkembang", "Domain & hosting"] },
    { name: "Paket Custom", desc: "Untuk kebutuhan LMS khusus", features: ["Request sesuai kebutuhan"] },
  ],
};

type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const PricingSection = ({ activeCategory, setActiveCategory }: Props) => {
  const currentPackages = pricingData[activeCategory as keyof typeof pricingData] || [];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pilih Paket Website Sesuai Kebutuhan Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Setiap paket dirancang untuk membantu bisnis Anda tampil profesional dan siap mendapatkan pelanggan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-2">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {Icon && <Icon className="w-6 h-6 flex-shrink-0" />}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {currentPackages.map((pkg) => (
                  <motion.div
                    key={pkg.name}
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-2xl p-6 flex flex-col ${
                      pkg.popular
                        ? "bg-gradient-to-b from-blue-50 to-white border-2 border-blue-300 shadow-xl"
                        : "bg-white border border-gray-200 shadow-lg"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="flex justify-end mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-0.5">
                          Paling Banyak Dipilih
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{pkg.desc}</p>
                    <ul className="space-y-2 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/6281234567890"
                      className="mt-6 block text-center py-2.5 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:brightness-110 transition"
                    >
                      Pilih Paket
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/harga"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm gap-1"
          >
            Lihat berbagai macam Add-On menarik
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;