"use client";
import { motion } from "framer-motion";
import {
  CubeTransparentIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const KenapaSection = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  const data = [
    {
      icon: CubeTransparentIcon,
      title: "Proses Kerja yang Jelas dan Terstruktur",
      desc: "Setiap project mengikuti alur yang sudah terstandarisasi agar hasil konsisten dan sesuai harapan.",
    },
    {
      icon: LightBulbIcon,
      title: "Fokus pada Kebutuhan Bisnis, Bukan Hanya Desain",
      desc: "Kami rancang website berdasarkan tujuan bisnis Anda, sehingga bisa langsung digunakan untuk promosi dan menjangkau pelanggan.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Website Siap Digunakan Tanpa Setup Tambahan yang Rumit",
      desc: "Setelah selesai, website langsung online dan dapat diakses oleh pelanggan tanpa perlu konfigurasi tambahan.",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Pendekatan yang Transparan dalam Setiap Project",
      desc: "Kami selalu berkomunikasi secara terbuka di setiap tahap, sehingga Anda selalu tahu perkembangan project.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          {...fadeUp()}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          Kenapa Memilih Mega Class Digital?
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Kami memahami bahwa website adalah investasi, karena itu kami memastikan setiap website yang dibuat memiliki arah yang jelas.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(0.1 * (idx + 1))}
              className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <item.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KenapaSection;