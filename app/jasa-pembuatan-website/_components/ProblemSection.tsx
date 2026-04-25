"use client";
import { motion } from "framer-motion";
import {
  ExclamationTriangleIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const problems = [
  { icon: ExclamationTriangleIcon, title: "Tidak Terlihat Profesional", desc: "Calon pelanggan ragu karena bisnis Anda tidak terlihat profesional." },
  { icon: DevicePhoneMobileIcon, title: "Website Tidak Memberikan Hasil", desc: "Sudah punya website, tapi tidak memberikan hasil." },
  { icon: ChartBarIcon, title: "Sulit Bersaing", desc: "Sulit bersaing dengan kompetitor yang sudah go digital." },
  { icon: RocketLaunchIcon, title: "Tidak Punya Landing Page", desc: "Ingin menjalankan iklan, tapi belum punya landing page yang efektif." },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Bisnis Anda Butuh Website?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg text-gray-600">
            Banyak bisnis kehilangan peluang hanya karena tidak memiliki website yang tepat.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center text-gray-500 mt-10">
          Website bukan lagi pilihan, tapi kebutuhan untuk berkembang.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;