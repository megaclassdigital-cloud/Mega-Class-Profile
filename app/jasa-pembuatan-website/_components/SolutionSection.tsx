"use client";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const solutions = [
  "Dirancang untuk meningkatkan kepercayaan",
  "Siap digunakan untuk promosi dan iklan",
  "Mudah diakses di semua perangkat",
  "Memiliki struktur yang jelas untuk mengarahkan pengunjung menjadi calon pelanggan",
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Website yang Tidak Hanya Tampilan, Tapi Juga Hasil</h2>
            <p className="text-lg text-gray-600 mb-8">Di Mega Class Digital, kami membangun website dengan tujuan yang jelas: membantu bisnis Anda terlihat profesional dan menghasilkan.</p>
            <ul className="space-y-4">
              {solutions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 flex items-center justify-center">
              <svg className="w-64 h-64 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;