"use client";
import { motion } from "framer-motion";
import {
  CursorArrowRaysIcon,
  BuildingOffice2Icon,
  BookOpenIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const services = [
  { icon: CursorArrowRaysIcon, title: "Landing Page", desc: "Website satu halaman yang fokus untuk mengarahkan pengunjung menjadi calon pelanggan." },
  { icon: BuildingOffice2Icon, title: "Company Profile", desc: "Website profesional untuk memperkenalkan bisnis Anda secara lengkap." },
  { icon: BookOpenIcon, title: "Website Katalog", desc: "Menampilkan produk atau layanan Anda secara rapi tanpa checkout." },
  { icon: ShoppingBagIcon, title: "Toko Online", desc: "Website dengan sistem penjualan lengkap yang memungkinkan pelanggan membeli langsung." },
  { icon: AcademicCapIcon, title: "Website LMS / Study", desc: "Platform belajar online dengan fitur course, materi, dan manajemen pengguna." },
];

type Props = {
  onSelectCategory: (category: string) => void;
};

const ServicesSection = ({ onSelectCategory }: Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jenis Website yang Bisa Anda Pilih</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pilih paket yang sesuai dengan kebutuhan dan skala bisnis Anda.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl border border-gray-200 p-6 bg-white hover:scale-105 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <button
                onClick={() => onSelectCategory(service.title)}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Pilih Paket
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;