"use client";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  ServerIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ChatBubbleOvalLeftIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: GlobeAltIcon,
    title: "Domain",
    desc: "Nama website profesional yang membuat bisnis Anda terlihat lebih terpercaya di mata pelanggan.",
  },
  {
    icon: ServerIcon,
    title: "Hosting",
    desc: "Website dapat diakses dengan stabil sehingga pengunjung tidak terganggu saat membuka halaman bisnis Anda.",
  },
  {
    icon: ShieldCheckIcon,
    title: "SSL",
    desc: "Website lebih aman dan membantu meningkatkan kepercayaan pengunjung saat mengakses bisnis Anda.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive",
    desc: "Tampilan website tetap rapi di HP maupun laptop sehingga pengunjung lebih nyaman saat melihat bisnis Anda.",
  },
  {
    icon: ChatBubbleOvalLeftIcon,
    title: "WhatsApp",
    desc: "Pengunjung dapat langsung menghubungi Anda melalui WhatsApp tanpa ribet, sehingga peluang mendapatkan pelanggan lebih besar.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO Friendly",
    desc: "Website sudah disiapkan agar lebih mudah ditemukan di Google oleh calon pelanggan yang mencari bisnis Anda.",
  },
  {
    icon: MegaphoneIcon,
    title: "Struktur Siap Promosi",
    desc: "Website sudah disusun dengan struktur yang siap digunakan untuk promosi dan mengarahkan pengunjung menjadi calon pelanggan.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Siap Digunakan",
    desc: "Website dapat langsung digunakan tanpa perlu setup tambahan yang rumit, sehingga Anda bisa fokus menjalankan bisnis.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Fitur Lengkap Jasa Pembuatan Website untuk Bisnis Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Setiap website yang kami buat sudah dilengkapi dengan fitur penting yang dibutuhkan untuk promosi, branding, dan mendapatkan pelanggan.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <benefit.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;