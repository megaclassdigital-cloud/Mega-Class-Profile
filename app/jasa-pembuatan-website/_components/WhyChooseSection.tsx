"use client";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  SparklesIcon,
  BoltIcon,
  HeartIcon,
  CurrencyDollarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const whyChooseData = [
  {
    icon: UserGroupIcon,
    title: "Tim Berpengalaman di Website Bisnis",
    desc: "Dikerjakan oleh tim yang berpengalaman dalam pembuatan website bisnis, mulai dari landing page hingga website dengan fitur yang lebih kompleks.",
  },
  {
    icon: SparklesIcon,
    title: "Desain Website yang Sesuai Branding",
    desc: "Desain website dibuat rapi, profesional, dan disesuaikan dengan identitas bisnis Anda agar terlihat lebih terpercaya di mata pelanggan.",
  },
  {
    icon: BoltIcon,
    title: "Fokus Konversi",
    desc: "Struktur website dirancang agar pengunjung lebih mudah memahami layanan Anda dan terdorong untuk langsung menghubungi melalui WhatsApp.",
  },
  {
    icon: HeartIcon,
    title: "Garansi & Support Website",
    desc: "Kami memberikan garansi setelah website selesai serta menyediakan layanan support tambahan sesuai kebutuhan Anda.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Harga Transparan",
    desc: "Harga yang jelas sejak awal tanpa biaya tersembunyi, sehingga Anda dapat menyesuaikan paket dengan kebutuhan bisnis.",
  },
  {
    icon: ClockIcon,
    title: "Proses Pengerjaan Efisien",
    desc: "Proses pengerjaan dilakukan secara terstruktur dan efisien sehingga website dapat digunakan lebih cepat tanpa mengorbankan kualitas.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "SEO Friendly & Siap Index Google",
    desc: "Website sudah disiapkan dengan struktur SEO yang rapi dan terhubung ke Google Search Console agar lebih mudah ditemukan di Google.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Siap Digunakan untuk Bisnis",
    desc: "Website yang dibuat sudah siap digunakan untuk promosi, branding, dan menerima calon pelanggan tanpa perlu setup tambahan.",
  },
];

const WhyChooseSection = () => {
  const firstItem = whyChooseData[0];
  const FirstIcon = firstItem.icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Alasan Memilih Jasa Pembuatan Website Mega Class Digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Mega Class Digital membantu bisnis memiliki website yang tidak hanya terlihat profesional, tetapi juga siap digunakan untuk promosi dan mendapatkan pelanggan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Baris 1: 1 card besar (full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <FirstIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{firstItem.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{firstItem.desc}</p>
          </motion.div>

          {/* Baris 2: 3 card kecil */}
          {whyChooseData.slice(1, 4).map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}

          {/* Baris 3: 2 card medium */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyChooseData.slice(4, 6).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 4) * 0.1 }}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Baris 4: 2 card medium (sisa) */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyChooseData.slice(6, 8).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 6) * 0.1 }}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;